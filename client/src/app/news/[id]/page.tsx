"use client";

import Image from "next/image";
import type { NewsItem } from "@/types/news";
import { apiConfig, apiFetch } from "@/lib/api";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { useEffect, useState } from "react";

interface NewsPageProps {
  params: Promise<{ id: string }>;
}

export default function NewsDetailPage({ params }: NewsPageProps) {
  const { t, locale } = useI18n();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [newsId, setNewsId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setNewsId(resolvedParams.id);
    }
    fetchParams();
  }, [params]);

  useEffect(() => {
    if (!newsId) return;

    async function fetchNews() {
      try {
        const id = newsId;
        if (!id) return;
        const newsData = await apiFetch<NewsItem>(apiConfig.endpoints.news.detail(id), {
          cache: "no-store",
        });
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchNews();
  }, [newsId]);

  if (!news) {
    return <div>Loading...</div>;
  }

  const getTitle = (news: NewsItem) => {
    return locale === 'en' && news.titleEn ? news.titleEn : news.titleRu;
  };

  const getContent = (news: NewsItem) => {
    return locale === 'en' && news.contentEn ? news.contentEn : news.contentRu;
  };

  // Объединяем основное фото и дополнительные фото
  const allPhotos = news.photos && news.photos.length > 0 
    ? [news.photo, ...news.photos]
    : [news.photo];

  return (
    <div className="relative max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 pt-[100px] pb-10">
      {/* Кнопка назад */}
      <Link 
        href="/news"
        className="inline-flex items-center gap-2 mb-8 text-[#604127] hover:text-[#B92C2C] transition-colors"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-[16px] font-medium">{t("news.backToNews")}</span>
      </Link>

      {/* Основной контент: изображение слева и текст справа */}
      <div className="relative flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-20 items-start z-10">
        
        {/* Блок с изображением в рамке (слева) */}
        <div className="w-full lg:w-[45%] xl:w-[40%] relative z-20">
          {/* Декоративный веер позади левого блока */}
          <div className="absolute -bottom-4 -right-16 lg:-bottom-8 lg:-right-24 hidden lg:block z-0">
            <Image src="/RedFan.svg" alt="" width={200} height={200} className="object-contain" />
          </div>
          
          {/* Облачко */}
          <div className="absolute -bottom-8 -right-8 lg:-bottom-8 lg:-right-24 hidden md:block z-30">
            <Image src="/cloudfull.svg" alt="" width={300} height={200} className="object-contain" />
          </div>
          
          {/* Рамка с золотистыми границами */}
          <div className="relative z-10 w-full">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] border-2 sm:border-[3px] md:border-[3px] border-[#D4AF37] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] bg-white shadow-md overflow-hidden p-3 sm:p-4 md:p-5 lg:p-6">
              <div className="relative w-full h-full rounded-[8px] sm:rounded-[10px] md:rounded-[12px] overflow-hidden">
                <Image 
                  src={news.photo} 
                  alt={getTitle(news)} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Блок с текстом справа */}
        <div className="w-full lg:w-[50%] xl:w-[55%] relative">
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg">
            <h1 className="text-[#604127] font-crimson font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-6 leading-tight">
              {getTitle(news)}
            </h1>
            
            <div className="text-[#1e3a5f] font-sans text-[14px] sm:text-[16px] md:text-[18px] leading-[1.8] sm:leading-[2] whitespace-pre-line">
              {getContent(news)}
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительные фото, если есть */}
      {allPhotos.length > 1 && (
        <div className="mt-12">
          <h2 className="text-[#604127] font-crimson font-semibold text-[24px] sm:text-[28px] md:text-[32px] mb-6">
            {t("news.photos")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {allPhotos.map((photo, index) => (
              <div 
                key={index}
                className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5]"
              >
                {/* Рамка с золотистыми границами */}
                <div className="relative w-full h-full border-2 sm:border-[3px] md:border-[3px] border-[#D4AF37] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] bg-white shadow-md overflow-hidden p-3 sm:p-4 md:p-5 lg:p-6">
                  <div className="relative w-full h-full rounded-[8px] sm:rounded-[10px] md:rounded-[12px] overflow-hidden">
                    <Image
                      src={photo}
                      alt={`${getTitle(news)} - фото ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Линия под контентом */}
      <div className="mt-12 flex justify-center">
        <picture>
          <img src="/line.svg" alt="line" className="w-full max-w-full h-auto" />
        </picture>
      </div>
    </div>
  );
}