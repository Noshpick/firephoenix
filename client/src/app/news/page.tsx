import NewsContent from "@/components/News/NewsContent";
import type { NewsItem } from "@/types/news";
import { apiConfig, apiFetch } from "@/lib/api";

async function getNews(): Promise<NewsItem[]> {
  try {
    const news = await apiFetch<NewsItem[]>(apiConfig.endpoints.news.list, {
      cache: "no-store",
    });
    return news || [];
  } catch {
    // Тихая обработка ошибок - просто возвращаем пустой массив
    // Ошибки уже залогированы в apiFetch
    return [];
  }
}

export default async function NewsPage() {
  const news = await getNews();

  return <NewsContent news={news} />;
}
