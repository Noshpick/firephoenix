"use client";

import CardGroup from "../Cards/CardsLink/CardGroup";
import CardSolo from "../Cards/CardsLink/CardSolo";
import { useI18n } from "@/i18n/I18nProvider";

export default function LinkLessons() {
  const { t, locale } = useI18n();

  // выбор SVG в зависимости от языка
  const freelessSrc = locale === "ru" ? "/freeless.svg" : "/freeless_en.svg";

  return (
    <>
      <div className="linklessons relative flex flex-col justify-center items-center w-full h-auto px-0 mt-[8vw] md:mt-[15vw]">
        {/* заголовок (мобилка) */}
        <span className="block md:hidden text-[#502E12] text-center font-['Inter'] text-[clamp(16px,5vw,40px)] not-italic font-semibold leading-[clamp(20px,6vw,34px)]">
          {t("linkLessons.titleLine1")}
          <br />
          {t("linkLessons.titleLine2")}
        </span>

        {/* декор для мобилки */}
        <div
          className="md:hidden pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[150vw] sm:h-[130vw] z-0"
          aria-hidden="true"
        >
          <div className="relative w-full h-full">
            <img src="/housemob.svg" alt="" className="absolute top-0 left-0 w-full h-auto" />
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[37%] w-[50vw] sm:top-[39%] sm:w-[50vw] max-w-[520px]">
              <img src="/housemidmob.svg" alt="" className="w-full h-auto" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[51%] w-[50vw] sm:top-[52%] sm:w-[50vw] max-w-[560px]">
              <img src="/houselowmob.svg" alt="" className="w-full h-auto" />
            </div>
            <img
              src="/housemobcloud.svg"
              alt=""
              className="absolute top-[55%] sm:top-[60%] left-0 w-full h-auto"
            />
          </div>
        </div>

        {/* декор для десктопа */}
        <div
          className="linklessons--decor hidden md:flex justify-center items-center w-full h-auto"
          aria-hidden="true"
        >
          <picture className="clouds hidden md:flex w-full items-center absolute z-20 mt-[9vw] pointer-events-none">
            <img src="/cloudslinks.svg" alt="" />
          </picture>
          <picture className="house hidden md:block">
            <img src="/houses.svg" alt="" />
          </picture>
        </div>

        {/* контент */}
        <div className="linklessons--content relative z-[1] md:absolute md:z-[2] flex flex-col md:flex-row md:justify-start md:items-start w-[80%] md:w-full md:max-w-none h-auto mt-[21vw] md:mt-[7vw] px-0 md:px-[12%] gap-y-[180px] md:gap-y-0 md:gap-[clamp(10px,3vw,70px)]">
          <div className="linklessons--content__type flex flex-col max-w-[500px] items-center self-center md:items-start md:self-start justify-start gap-[clamp(10px,6%,70px)]">
            <CardSolo />
            <CardGroup />
          </div>

          {/* Кнопка freeless */}
          <div className="freeless cursor-pointer mt-[80px] sm:mt-[108px] md:mt-[10px] self-center md:self-auto">
            <a href="#form">
              <picture>
                <img src={freelessSrc} alt="" />
              </picture>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}