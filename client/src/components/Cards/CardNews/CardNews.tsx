"use client";

import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useI18n } from "@/i18n/I18nProvider";

interface CardNewsProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  href: string;
  maxChars?: number;
}

const truncate = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  return text.slice(0, limit).trimEnd() + "…";
};

const CardNews: FC<CardNewsProps> = ({
  title,
  excerpt,
  imageSrc,
  href,
  maxChars = 100,
}) => {
  const { t } = useI18n();

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[531px] h-full flex flex-col mx-auto">
      {/* Рамка с золотистыми границами */}
      <div className="relative w-full h-full flex flex-col border-2 sm:border-[3px] md:border-[3px] border-[#D4AF37] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] bg-white shadow-md overflow-hidden">
        <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4 h-full px-3 pt-3 pb-4 sm:px-3.5 sm:pt-3.5 sm:pb-4 md:px-5 md:pt-5 md:pb-6 lg:px-6 lg:pt-6 lg:pb-6 items-center">
          {/* Картинка */}
          <div className="relative w-full overflow-hidden rounded-[8px] sm:rounded-[10px] md:rounded-[12px] flex-shrink-0">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover rounded-[8px] sm:rounded-[10px] md:rounded-[12px]"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 531px"
              />
            </div>
          </div>

          {/* Текст */}
          <p className="flex-1 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed text-[#57524E] text-center w-full break-words">
            {truncate(excerpt, maxChars)}
          </p>

          {/* Кнопка */}
          <Link
            href={href}
            className="w-full max-w-[180px] sm:max-w-[200px] rounded-[8px] bg-[#B92C2C] py-2 sm:py-2.5 md:py-3 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-white hover:bg-[#a02020] transition-colors text-center min-h-[44px] flex items-center justify-center"
          >
            {t("news.readMore")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardNews;