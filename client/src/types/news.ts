export interface NewsItem {
  id: number;
  titleRu: string;
  titleEn?: string;
  contentRu: string;
  contentEn?: string;
  photo: string;
  photos?: string[];
  createdAt: string;
}