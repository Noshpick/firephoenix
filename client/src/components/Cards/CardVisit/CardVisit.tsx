"use client";

import { useI18n } from "@/i18n/I18nProvider";

export default function CardVisit() {
  const { t } = useI18n();

  return (
    <div className="relative flex items-center justify-center w-[350px] sm:w-[450px] md:w-[650px]">
      {/* Базовая визитка */}
      <picture className="relative z-1 w-full block">
        <img
          className="w-full"
          src="/visitka.svg"
          alt={t("visit.baseAlt")}
        />
      </picture>

      {/* Сабвизитка */}
      <picture className="absolute z-2 w-[95%] block">
        <img
          className="w-full"
          src="/subvisitka.svg"
          alt={t("visit.subAlt")}
        />
      </picture>

      {/* Виселка — скрыть на ширине ≤ 767px */}
      <picture className="absolute z-3 right-10 top-4 hidden md:block">
        <img
          className="max-w-[60px]"
          src="/viselka.svg"
          alt={t("visit.hangerAlt")}
        />
      </picture>

      {/* Данные визитки */}
      <picture className="absolute z-4 block">
        <img
          className="w-[300px] sm:w-[450px] md:w-[600px]"
          src="/visitdat.svg"
          alt={t("visit.dataAlt")}
        />
      </picture>

      {/* Текст */}
      <span
        className="whitespace-pre-line absolute z-3 top-1.5 sm:top-2 md:top-5
                   text-[#502E12] text-center font-inter
                   text-[13px] sm:text-[18px] md:text-[30px]
                   font-semibold
                   leading-[22px] sm:leading-[26px] md:leading-[28px]"
      >
        {t("visit.address")}
      </span>

      <span
        className="whitespace-nowrap absolute z-3 left-30 sm:left-40 md:left-50
                   bottom-4 sm:bottom-5 md:bottom-8
                   text-[#502E12] font-inter
                   text-[16px] sm:text-[20px] md:text-[34px]
                   font-semibold
                   leading-[22px] sm:leading-[26px] md:leading-[28px]"
      >
        {t("visit.phone")}
      </span>
    </div>
  );
}