export interface ReviewItem {
  id: string;
  reviewId: string;
  imageSrc: string;
}

// Данные отзывов: имена и тексты находятся в локалях (ru.ts и en.ts)
// imageSrc - путь к фото отзывающегося
export const reviewData: ReviewItem[] = [
  { id: '1', reviewId: '1', imageSrc: '/teacher.svg' },
  { id: '2', reviewId: '2', imageSrc: '/teacher.svg' },
  { id: '3', reviewId: '3', imageSrc: '/teacher.svg' },
  { id: '4', reviewId: '4', imageSrc: '/teacher.svg' },
  { id: '5', reviewId: '5', imageSrc: '/teacher.svg' },
];

