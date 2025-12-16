import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";

type CardReviewProps = {
  reviewId: string;      // id отзыва: "1" | "2" | "3" ...
  imageSrc?: string;      // путь к фото (не используется, оставлен для обратной совместимости)
};

export default function CardReview({ reviewId }: CardReviewProps) {
  const { t } = useI18n();

  const name = t(`review.items.${reviewId}.name`);
  const text = t(`review.items.${reviewId}.text`);

  return (
    <div className="w-full mx-auto overflow-hidden">
      {/* Общий контейнер для обеих версий, чтобы текст и фото были одни и те же */}
      <div
        className="
        relative mx-auto 
        w-[340px] h-[340px]        /* < sm */
        sm:w-[500px] sm:h-[500px]  /* ≥640px */
        md:w-full md:max-w-[770px] md:aspect-[770/508] /* ≥768px — как сейчас */
      "
      >
        {/* Фон для мобилки */}
        <div className="absolute inset-0 z-0 md:hidden">
          <img
            src="/reviewmob.svg"
            alt={t("reviews.backgroundAltMobile")}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Фон для десктопа */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/cardreview.svg"
            alt={t("reviews.backgroundAltDesktop")}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Внутренняя субкарточка — только на десктопе */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-[94%] max-w-[720px] aspect-[720/456]">
            <Image
              src="/subcardreview.svg"
              alt={t("reviews.subcardAlt")}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Текстовые блоки — доступны на всех брейкпоинтах */}
        <div className="absolute z-30 inset-0 flex items-start justify-center pointer-events-none pt-16 sm:pt-24 md:pt-20">
          <h3 className="text-[#502E12] font-[Inter] text-[20px] sm:text-[26px] md:text-[34px] font-semibold leading-tight text-center">
            Ученик
          </h3>
        </div>

        <div className="absolute z-30 left-13 top-30 max-w-[270px] sm:left-20 sm:top-50 md:left-25 md:right-auto md:top-63 sm:max-w-[400px] md:max-w-[600px]">
          <p className="text-[#6C5B4C] font-inter text-[10px] sm:text-[14px] md:text-[16px] leading-normal">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}