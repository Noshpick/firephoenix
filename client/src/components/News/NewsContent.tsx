"use client";

import CardNews from "@/components/Cards/CardNews/CardNews";
import NewsTitle from "./NewsTitle";
import InfoNew from "./InfoNew";
import Footer from "../Footer";
import { useI18n } from "@/i18n/I18nProvider";
import type { NewsItem } from "@/types/news";

interface NewsContentProps {
  news: NewsItem[];
}

export default function NewsContent({ news }: NewsContentProps) {
  const { locale, t } = useI18n();

  const getTitle = (item: NewsItem) => {
    return locale === 'en' && item.titleEn ? item.titleEn : item.titleRu;
  };

  const getContent = (item: NewsItem) => {
    return locale === 'en' && item.contentEn ? item.contentEn : item.contentRu;
  };

  return (
    <div className="">
      <NewsTitle />
      {news && news.length > 0 && <InfoNew />}

      {!news || news.length === 0 ? (
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 py-20 text-center">
          <div className="bg-white rounded-[20px] p-8 sm:p-12 md:p-16 shadow-lg">
            <h2 className="text-[#604127] font-crimson font-semibold text-[28px] sm:text-[32px] md:text-[36px] mb-4">
              {t("news.noNews")}
            </h2>
            <p className="text-[#8C5E3C] font-inter text-[16px] sm:text-[18px] md:text-[20px]">
              {t("news.noNewsDescription")}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center pt-10 pb-0 max-w-[1240px] w-full mx-auto">
          {news.map((item) => (
            <CardNews
              key={item.id}
              title={getTitle(item)}
              excerpt={getContent(item)}
              imageSrc={item.photo}
              href={`/news/${item.id}`}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}