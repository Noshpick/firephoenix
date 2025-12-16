import { NextRequest, NextResponse } from 'next/server';

// Используем отдельную переменную для бэкенда или дефолтный URL
// BACKEND_API_URL должен быть установлен в продакшене (например, в CI/CD переменных окружения)
const BACKEND_URL = process.env.BACKEND_API_URL || 'https://firephoenix.school';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Добавляем таймаут для запроса к бэкенду (10 секунд)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    let response: Response;
    try {
      response = await fetch(`${BACKEND_URL}/order/bot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `API Error: ${response.status} ${response.statusText}`;
      
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorMessage;
      } catch {
        if (errorText && errorText.length < 200) {
          errorMessage = errorText;
        }
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error proxying request to backend:', error);
    
    // Обработка таймаута
    if (error instanceof Error && (error.name === 'AbortError' || error.message.includes('aborted'))) {
      return NextResponse.json(
        { error: 'Request timeout: Backend server did not respond in time' },
        { status: 504 }
      );
    }
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to connect to backend server: ${errorMessage}` },
      { status: 500 }
    );
  }
}

