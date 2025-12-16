"use client";

import CourseGroup from "../Cards/CardFormat/Grouplessons/CourseGroup";
import OneGroup from "../Cards/CardFormat/Grouplessons/OneGroup";
import PackGroup from "../Cards/CardFormat/Grouplessons/PackGroup";
import CourseSolo from "../Cards/CardFormat/Sololessons/CourseSolo";
import OneSolo from "../Cards/CardFormat/Sololessons/OneSolo";
import PackSolo from "../Cards/CardFormat/Sololessons/PackSolo";
import Line from "../Line/line";
import Linemobile from "../Line/Linemobile";
import { useI18n } from "@/i18n/I18nProvider";

export default function Lessons() {
  const { t, locale } = useI18n();
  const morelessSrc = locale === "ru" ? "/moreless.svg" : "/moreless_en.svg";

  return (
    <section
      id="lessons"
      className="flex flex-col items-center w-full h-auto mt-[86px] relative px-[clamp(16px,6vw,28px)] md:px-0"
    >
      <div className="mb-[40px]">
        <Line />
        <Linemobile />
      </div>

      {/* Индивидуальные занятия */}
      <div id="solo" className="flex flex-col justify-center items-center">
        <span className="text-[#604127] text-center font-inter text-[40px] not-italic font-semibold leading-normal">
          {t("lessons.soloTitle")}
        </span>
        <span className="text-[#805B3C] text-center font-inter text-[20px] not-italic font-medium leading-normal mt-[30px] whitespace-pre-line">
          {t("lessons.soloDescription")}
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[20px] mt-[70px] md:px-[clamp(16px,6vw,28px)]">
        <OneSolo />
        <PackSolo />
        <CourseSolo />
      </div>

      {/* Групповые занятия */}
      <div id="group" className="flex flex-col justify-center items-center mt-[193px]">
        <span className="text-[#604127] text-center font-inter text-[40px] not-italic font-semibold leading-normal">
          {t("lessons.groupTitle")}
        </span>
        <span className="text-[#805B3C] text-center font-inter text-[20px] not-italic font-medium leading-normal mt-[30px] whitespace-pre-line">
          {t("lessons.groupDescription")}
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[20px] mt-[70px] md:px-[clamp(16px,6vw,28px)]">
        <OneGroup />
        <PackGroup />
        <CourseGroup />
      </div>

      <div className="mt-[55px] cursor-pointer">
        <picture>
          <img src={morelessSrc} alt="" />
        </picture>
      </div>

      <div className="clouds absolute bottom-1/2 pointer-events-none z-10 hidden md:block">
        <picture>
          <img src="/cloudsless.svg" alt={t("lessons.cloudsAlt")} />
        </picture>
      </div>
    </section>
  );
}