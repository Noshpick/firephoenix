// Для продакшена используем https://firephoenix.school
// Для локальной разработки установите NEXT_PUBLIC_API_URL=http://localhost:3000 в .env.local
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://firephoenix.school";

// Определяем базовый URL для фронтенда (для API routes)
// В продакшене это должен быть тот же домен, где развернут Next.js
const getFrontendUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_FRONTEND_URL || API_BASE_URL;
};

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    news: {
      list: `${API_BASE_URL}/api/news`,
      latest: `${API_BASE_URL}/api/news/latest`,
      detail: (id: string | number) => `${API_BASE_URL}/api/news/${id}`,
    },
    order: {
      create: `${API_BASE_URL}/api/bot`,
    },
  },
};

/**
 * Fetch wrapper with error handling
 */
export async function apiFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    // Добавляем таймаут для fetch запросов (5 секунд для продакшена)
    const timeout = 5000;
    const controller =
      typeof AbortController !== "undefined" ? new AbortController() : null;
    let timeoutId: NodeJS.Timeout | null = null;

    if (controller) {
      timeoutId = setTimeout(() => controller.abort(), timeout);
    }

    let response: Response;
    try {
      response = await fetch(url, {
        ...options,
        signal: controller?.signal,
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
      });
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
    }

    // Проверяем content-type перед чтением ответа
    const contentType = response.headers.get("content-type") || "";

    // Если сервер вернул HTML (например, 404 страницу), это ошибка
    if (contentType.includes("text/html")) {
      throw new Error(
        `Сервер вернул HTML вместо JSON. Возможно, эндпоинт не существует или бэкенд не запущен. URL: ${url}`
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `API Error: ${response.status} ${response.statusText}`;

      // Если это HTML, не пытаемся парсить как JSON
      if (
        errorText.trim().startsWith("<!DOCTYPE") ||
        errorText.includes("<html")
      ) {
        throw new Error(
          `Сервер вернул HTML страницу (${response.status}). Проверьте, что бэкенд запущен и эндпоинт существует: ${url}`
        );
      }

      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorJson.error || errorMessage;
      } catch {
        // Если не JSON и не HTML, используем текст ошибки (если он короткий)
        if (errorText && errorText.length < 200) {
          errorMessage = errorText;
        }
      }
      throw new Error(errorMessage);
    }

    // Обработка пустого ответа или null
    if (!contentType.includes("application/json")) {
      return null as T;
    }

    const text = await response.text();
    if (!text || text.trim() === "" || text === "null") {
      return null as T;
    }

    try {
      return JSON.parse(text);
    } catch (error) {
      console.error(
        "Error parsing JSON response:",
        error,
        text.substring(0, 200)
      );
      return null as T;
    }
  } catch (error) {
    // Обработка сетевых ошибок (CORS, таймаут, недоступность сервера)
    if (error instanceof Error) {
      // Обработка таймаута
      if (error.name === "AbortError" || error.message.includes("aborted")) {
        throw new Error(
          `Запрос превысил время ожидания. Проверьте доступность бэкенда на ${API_BASE_URL}`
        );
      }
    }

    if (error instanceof TypeError) {
      const errorMessage = error.message || "";

      // Проверяем, является ли это ошибкой подключения (бэкенд не запущен)
      if (
        errorMessage.includes("fetch failed") ||
        errorMessage.includes("ECONNREFUSED")
      ) {
        // Тихая обработка - не логируем в консоль, просто пробрасываем понятную ошибку
        throw new Error(
          `Бэкенд недоступен на ${API_BASE_URL}. Убедитесь, что бэкенд запущен.`
        );
      }

      // Проверяем, является ли это CORS ошибкой
      if (errorMessage.includes("CORS") || errorMessage.includes("fetch")) {
        throw new Error(
          `Ошибка CORS: Браузер заблокировал запрос. Убедитесь, что:\n` +
            `1. Бэкенд запущен на ${API_BASE_URL}\n` +
            `2. NODE_ENV не установлен в 'production' при локальной разработке\n` +
            `3. CORS настроен правильно в бэкенде\n` +
            `URL запроса: ${url}`
        );
      }

      throw new Error(
        `Не удалось подключиться к серверу. Проверьте, что бэкенд запущен на ${API_BASE_URL}. URL: ${url}`
      );
    }
    // Пробрасываем другие ошибки дальше
    throw error;
  }
}
