import Image from "next/image";
import Link from "next/link";
import { NewsMock } from "@/mocks/news";
import Footer from "../Footer";

interface NewsDetailProps {
  news: NewsMock;
}

export default function NewsDetail({ news }: NewsDetailProps) {
  return (
    <div className="">
      <div className="relative mt-[20px] md:mt-[30px] max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 pb-20">
        
        {/* Кнопка возврата в верхнем левом углу */}
        <Link
          href="/news"
          className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#F5F0E8] rounded-[8px] hover:bg-[#E8DDD0] transition-colors mb-6 md:mb-8 shadow-sm mt-[100px]"
          aria-label="Вернуться к новостям"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        
        {/* Верхняя часть: изображение слева и панель заголовка справа */}
        <div className="relative flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
          
          {/* Главное изображение слева в рамке */}
          <div className="w-full lg:w-[45%] xl:w-[40%] relative z-20">
            {/* Декоративный веер позади левого блока - частично виден */}
            <div className="absolute -bottom-4 -right-16 lg:-bottom-8 lg:-right-24 hidden lg:block z-0">
              <Image src="/RedFan.svg" alt="" width={200} height={200} className="object-contain" />
            </div>
            
            {/* Облачко, налегающее на левый блок */}
            <div className="absolute -bottom-8 -right-8 lg:-bottom-8 lg:-right-24 hidden md:block z-30">
              <Image src="/cloudfull.svg" alt="" width={300} height={200} className="object-contain" />
            </div>
            
            {/* Рамка с изображением */}
            <div className="relative z-10">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] bg-[url('/CardNews.svg')] bg-no-repeat bg-contain bg-center p-4 sm:p-6 md:p-8">
                <div className="relative w-full h-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3">
                  <div className="relative w-full h-full rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden">
                    <Image 
                      src={news.imageSrc} 
                      alt={news.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Панель заголовка справа */}
          <div className="w-full lg:w-[55%] xl:w-[60%] relative">
            <div className="relative bg-[#F5F0E8] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-6 sm:p-8 md:p-10 lg:p-12 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] shadow-lg">
              {/* Декоративный китайский узел в левом верхнем углу */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                {/* TODO: Вставить SVG китайского узла */}
                {/* <Image src="/chinese-knot.svg" alt="" width={60} height={60} className="object-contain" /> */}
              </div>
              
              {/* Полупрозрачный контур пагоды на фоне */}
              <div className="absolute inset-0 opacity-10">
                {/* TODO: Вставить SVG пагоды для фона */}
                {/* <Image src="/pagoda-outline.svg" alt="" fill className="object-contain" /> */}
              </div>
              
              {/* Заголовок новости */}
              <div className="relative z-10 pt-8 md:pt-12">
                <h1 className="text-[#604127] font-crimson font-semibold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-6">
                  {news.title}
                </h1>
                
                {/* Содержание новости */}
                <div className="text-[#57524E] font-sans text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed whitespace-pre-line">
                  {news.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

