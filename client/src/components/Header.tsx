'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/I18nProvider";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();

  const { t, locale, setLocale } = useI18n();

  // Функция для получения правильного пути для якорных ссылок
  const getAnchorLink = (anchor: string) => {
    // Если мы на главной странице, используем просто якорь
    // Иначе переходим на главную страницу с якорем
    return pathname === '/' ? `#${anchor}` : `/#${anchor}`;
  };

  const currentFlagSrc = locale === "ru" ? "/ru.svg" : "/en.svg";

  const handleChangeLocale = (nextLocale: "ru" | "en") => {
    if (nextLocale === locale) {
      setIsLangOpen(false);
      return;
    }
    setLocale(nextLocale);
    setIsLangOpen(false);
  };

  return (
    <header className="relative">
      <div className="flex w-full min-h-[16px] max-h-[72px] px-[10%] py-[clamp(8px,1.5vw,16px)] justify-between items-center bg-[#FDFAF9] shadow-[0_4px_10px_rgba(187,187,187,0.25)] fixed top-0 left-0 z-50">
        {/* переключатель языка */}
        <div className="order-2 max-[768px]:order-1 flex items-center mr-[clamp(8px,1.2vw,16px)]">
          <div
            className="relative flex items-center gap-[clamp(6px,1vw,12px)] cursor-pointer"
            onClick={() => setIsLangOpen((v) => !v)}
          >
            <div className="flag">
              <picture>
                <img src={currentFlagSrc} alt={t("header.languageAlt")} />
              </picture>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#502E12"
              aria-hidden="true"
            >
              <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" />
            </svg>

            {/* выпадающий список языков */}
            {isLangOpen && (
              <div
                className="absolute left-[-10] ml-2 top-[calc(100%+8px)] min-w-[120px] rounded-md bg-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] py-1 z-[60]"
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-3 py-1.5 text-sm hover:bg-[#F5F5F5]"
                  onClick={() => handleChangeLocale("ru")}
                >
                  <img src="/ru.svg" alt="Русский" className="w-5 h-5" />
                  <span>Русский</span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-3 py-1.5 text-sm hover:bg-[#F5F5F5]"
                  onClick={() => handleChangeLocale("en")}
                >
                  <img src="/en.svg" alt="English" className="w-5 h-5" />
                  <span>English</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* логотип (desktop) */}
        <div className="flex items-center max-[767px]:hidden">
          <Link href="/">
            <Image
              src="/logohead.svg"
              alt={t("header.logoAlt")}
              width={40}
              height={40}
              className="w-[50px] h-[50px]"
            />
          </Link>
        </div>

        {/* навигация + бургер */}
        <div className="order-1 max-[768px]:order-3 flex items-center w-full text-[clamp(12px,0.7vw+8px,18px)] max-[768px]:flex-1 max-[768px]:justify-end">
          {/* desktop-меню */}
          <nav className="mx-auto max-w-[1200px] max-[768px]:hidden flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center w-auto">
            <Link href="/news" className="header--link inline-block">
              {t("header.news")}
            </Link>
            <Link href={getAnchorLink("about")} className="header--link inline-block">
              {t("header.about")}
            </Link>
            <Link href={getAnchorLink("lessons")} className="header--link inline-block">
              {t("header.price")}
            </Link>
            <Link href={getAnchorLink("abouthsk")} className="header--link inline-block">
              {t("header.hsk")}
            </Link>
            <Link href={getAnchorLink("contactlink")} className="header--link inline-block">
              {t("header.contacts")}
            </Link>
          </nav>

          {/* бургер для мобилки */}
          <button
            type="button"
            className="hidden max-[768px]:inline-flex flex-col justify-center items-center gap-[4px] w-8 h-8"
            aria-label={t("header.menuOpen")}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            <span
              className={`block w-7 h-[3px] bg-black rounded transition-transform ${
                isMobileOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-7 h-[3px] bg-black rounded transition-opacity ${
                isMobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-7 h-[3px] bg-black rounded transition-transform ${
                isMobileOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* мобильное меню */}
      <div
        className={`max-[770px]:block hidden fixed top-0 left-0 z-[40] w-full transition-[max-height,opacity] ${
          isMobileOpen
            ? "max-h-screen opacity-100 overflow-visible"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="relative w-full min-h-[320px]">
          <div className="absolute inset-0 z-0">
            <img
              src="/headermob.svg"
              alt=""
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </div>

          <nav className="absolute inset-0 grid grid-cols-1 max-[600px]:grid-cols-2 items-center justify-center justify-items-center gap-2 text-center px-[10%] py-6 z-10 mt-6 max-[500px]:h-7 min-[600px]: sm:mt-9 min-[700px]:mt-8 max-[700px]:gap-1">
            <Link
              href="/news"
              onClick={() => setIsMobileOpen(false)}
              className="header--link py-1 text-[#502E12] text-right font-inter not-italic font-normal leading-normal mt-[clamp(8px,2vw,40px)] text-[clamp(14px,6vw,18px)] max-[500px]:text-[clamp(12px,5vw,14px)]"
            >
              {t("header.news")}
            </Link>
            <Link
              href={getAnchorLink("about")}
              onClick={() => setIsMobileOpen(false)}
              className="header--link py-1 text-[#502E12] text-right font-inter not-italic font-normal leading-normal mt-[clamp(8px,2vw,40px)] text-[clamp(14px,6vw,18px)] max-[500px]:text-[clamp(12px,5vw,14px)]"
            >
              {t("header.about")}
            </Link>
            <Link
              href={getAnchorLink("lessons")}
              onClick={() => setIsMobileOpen(false)}
              className="header--link py-1 text-[#502E12] text-right font-inter not-italic font-normal leading-normal mt-[clamp(8px,2vw,40px)] text-[clamp(14px,6vw,18px)] max-[500px]:text-[clamp(12px,5vw,14px)]"
            >
              {t("header.price")}
            </Link>
            <Link
              href={getAnchorLink("abouthsk")}
              onClick={() => setIsMobileOpen(false)}
              className="header--link py-1 text-[#502E12] text-right font-inter not-italic font-normal leading-normal mt-[clamp(8px,2vw,40px)] text-[clamp(14px,6vw,18px)] max-[500px]:text-[clamp(12px,5vw,14px)]"
            >
              {t("header.hsk")}
            </Link>
            <Link
              href={getAnchorLink("contactlink")}
              onClick={() => setIsMobileOpen(false)}
              className="header--link py-1 text-[#502E12] text-right font-inter not-italic font-normal leading-normal mt-[clamp(8px,2vw,40px)] text-[clamp(14px,6vw,18px)] max-[500px]:text-[clamp(12px,5vw,14px)]"
            >
              {t("header.contacts")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}