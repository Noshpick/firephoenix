"use client";

import Image from "next/image"
import { apiConfig, apiFetch } from "@/lib/api";
import type { NewsItem } from "@/types/news";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { useEffect, useState } from "react";

export default function InfoNew() {
    const { t, locale } = useI18n();
    const [latestNews, setLatestNews] = useState<NewsItem | null>(null);

    useEffect(() => {
        async function fetchLatestNews() {
            try {
                const news = await apiFetch<NewsItem | null>(apiConfig.endpoints.news.latest, {
                    cache: "no-store",
                });
                setLatestNews(news);
            } catch (error) {
                console.error("Error fetching latest news:", error);
                setLatestNews(null);
            }
        }
        fetchLatestNews();
    }, []);

    const getTitle = (news: NewsItem) => {
        return locale === 'en' && news.titleEn ? news.titleEn : news.titleRu;
    };

    const getContent = (news: NewsItem) => {
        return locale === 'en' && news.contentEn ? news.contentEn : news.contentRu;
    };
    
    return(
        <div className="relative mt-[10px] md:mt-[20px] max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 pb-0">
            
            {/* Заголовок "Новое" в верхнем левом углу */}
            <h1 className="text-[#604127] font-crimson font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[100%] tracking-normal mb-8 md:mb-12 text-center md:text-left">
                {t("news.new")}
            </h1>

            {/* Основной контент: изображение слева и текст справа */}
            <div className="relative flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-20 items-center lg:items-start z-10">
                
                {/* Блок с изображением книг в рамке (слева) */}
                <div className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-none lg:w-[45%] xl:w-[40%] relative z-20 mx-auto lg:mx-0">
                    {/* Декоративный веер позади левого блока - частично виден */}
                    <div className="absolute -bottom-4 -right-16 lg:-bottom-8 lg:-right-24 hidden lg:block z-0">
                        <Image src="/RedFan.svg" alt="" width={200} height={200} className="object-contain" />
                    </div>
                    
                    {/* Облачко, налегающее на левый блок и немного на веер */}
                    <div className="absolute -bottom-8 -right-8 lg:-bottom-8 lg:-right-24 hidden lg:block z-30">
                        <Image src="/cloudfull.svg" alt="" width={300} height={200} className="object-contain" />
                    </div>
                    
                    {/* Рамка с золотистыми границами */}
                    <div className="relative z-10 w-full">
                        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] border-2 sm:border-[3px] md:border-[3px] border-[#D4AF37] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] bg-white shadow-md overflow-hidden p-3 sm:p-4 md:p-5 lg:p-6">
                            <div className="relative w-full h-full rounded-[8px] sm:rounded-[10px] md:rounded-[12px] overflow-hidden">
                                {latestNews ? (
                                    <Image 
                                        src={latestNews.photo} 
                                        alt={getTitle(latestNews)} 
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 40vw, 40vw"
                                    />
                                ) : (
                                    <Image 
                                        src="/news-test.svg" 
                                        alt="News image" 
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Блок с текстом справа */}
                <div className="w-full lg:w-[50%] xl:w-[55%] relative mx-auto lg:mx-0">
                    <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col">
                        {latestNews ? (
                            <>
                                <h2 className="text-[#604127] font-crimson font-semibold text-[24px] sm:text-[28px] md:text-[32px] mb-4">
                                    {getTitle(latestNews)}
                                </h2>
                                <div className="text-[#1e3a5f] font-sans text-[14px] sm:text-[16px] md:text-[18px] leading-[1.8] sm:leading-[2] whitespace-pre-line flex-1">
                                    {getContent(latestNews)}
                                </div>
                                {latestNews.id && (
                                    <div className="mt-6 flex justify-center">
                                        <Link
                                            href={`/news/${latestNews.id}`}
                                            className="inline-block rounded-[8px] bg-[#B92C2C] px-6 py-3 text-white font-semibold hover:bg-[#a02020] transition-colors"
                                        >
                                            {t("news.readMore")}
                                        </Link>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center flex-1 text-center">
                                <h3 className="text-[#604127] font-crimson font-semibold text-[24px] sm:text-[28px] md:text-[32px] mb-4">
                                    {t("news.noNews")}
                                </h3>
                                <p className="text-[#8C5E3C] font-inter text-[16px] sm:text-[18px] md:text-[20px]">
                                    {t("news.noNewsDescription")}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Линия под блоками */}
            <div className="mt-8 md:mt-12 lg:mt-16 flex justify-center">
                <picture>
                    <img src="/line.svg" alt="line" className="w-full max-w-full h-auto" />
                </picture>
            </div>
            
        </div>
    );
}