"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Скрываем прелоадер после загрузки страницы
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Показываем прелоадер минимум 1.5 секунды

    // Также скрываем когда все ресурсы загружены
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", () => {
        setTimeout(() => setIsLoading(false), 500);
      });
    }

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#F5E6D3] flex items-center justify-center transition-opacity duration-500">
      {/* Декоративные облака */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 opacity-20">
          <Image src="/cloudfull.svg" alt="" width={200} height={150} className="object-contain" />
        </div>
        <div className="absolute -right-20 bottom-20 opacity-20">
          <Image src="/cloudfull.svg" alt="" width={200} height={150} className="object-contain" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
        {/* Логотип феникса с анимацией */}
        <div className="relative">
          {/* Вращающееся кольцо */}
          <div className="absolute inset-0 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" style={{ animationDuration: "2s" }}></div>
          
          {/* Логотип */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
            <Image
              src="/logo-fire-fenix.svg"
              alt="Fire Phoenix"
              width={128}
              height={128}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Текст загрузки */}
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <h2 className="text-[#604127] font-crimson font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Огненный Феникс
          </h2>
          <p className="text-[#8C5E3C] font-inter text-xs sm:text-sm md:text-base">
            Загрузка...
          </p>
        </div>

        {/* Прогресс-бар */}
        <div className="w-48 sm:w-64 md:w-80 h-1.5 sm:h-2 bg-white/40 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-[#D4AF37] via-[#B92C2C] to-[#D4AF37] rounded-full animate-progress"></div>
        </div>

        {/* Декоративные точки */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#D4AF37] animate-spin" style={{ animationDuration: "2s" }}></div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#B92C2C] animate-spin" style={{ animationDuration: "2s", animationDirection: "reverse" }}></div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#D4AF37] animate-spin" style={{ animationDuration: "1.5s" }}></div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#B92C2C] animate-spin" style={{ animationDuration: "1.5s", animationDirection: "reverse" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
