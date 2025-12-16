'use client';
import React from "react";

import Linemobile from "../Line/Linemobile";
import CardNative from "../Cards/CardHero/CardNative";
import CardGrouples from "../Cards/CardHero/CardGrouples";
import CardHSK from "../Cards/CardHero/CardHSK";
import CardCourse from "../Cards/CardHero/CardCourse";
import { useI18n } from "@/i18n/I18nProvider";

export default function TypesOfLessons() {
  const { t } = useI18n();

  return (
    <>
      <div className="flex w-full flex-col items-center justify-between md:flex-row mt-[12%] md:mt-[8%]">
        <div className="flex flex-col w-full items-center justify-between">
          <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:flex-nowrap lg:gap-0 px-[clamp(32px,4vw,40px)]">
            <picture className="flex justify-center md:justify-start mt-[4%] relative shrink-0">
              <img
                className="h-auto max-w-none w-[200px] sm:w-[300px] md:w-[clamp(220px,35vw,280px)] lg:w-[360px] xl:w-[400px] max-[500px]:w-[200px]"
                src="/logo-fire-fenix.svg"
                alt={t("phoenix.logoAlt")}
              />
            </picture>

            <div className="flex flex-col items-center md:items-start mt-6 md:mt-[5%] md:ml-[-3%] z-10 w-auto max-w-[90%] whitespace-normal gap-[2px] text-center md:text-left">
              <span className="text-[#502E12] font-inter text-[clamp(20px,6vw,64px)] md:text-[clamp(24px,4.5vw,64px)] font-semibold leading-[1.05] tracking-[1px] md:tracking-[1.5px]">
                {t("phoenix.titleLine1")}
                <br />
                {t("phoenix.titleLine2")}
              </span>

              <div className="z-10 flex items-center justify-center md:justify-start flex-wrap gap-1 sm:gap-2 max-[600px]:flex-col">
                <div className="flex items-center justify-center max-[600px]:w-full">
                  <span
                    aria-hidden="true"
                    className="hidden max-[600px]:block h-[2px] w-10 mr-2 bg-[#C9B48F]/80"
                  />
                  <picture className="flex justify-center items-center">
                    <img
                      className="block h-auto w-[72px] sm:w-[84px] md:w-[92px] lg:w-[100px] max-w-none max-[600px]:w-[60px]"
                      src="/Group.svg"
                      alt={t("phoenix.groupGraphicAlt")}
                    />
                  </picture>
                  <span
                    aria-hidden="true"
                    className="hidden max-[600px]:block h-[2px] w-10 ml-2 bg-[#C9B48F]/80"
                  />
                </div>

                <span className="m-0 text-[#502E12] text-[clamp(10px,3.2vw,18px)] md:text-[clamp(12px,2vw,20px)] leading-tight max-[600px]:mt-2 text-center md:text-left">
                  {t("phoenix.subtitle")}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start mt-[40%] md:mt-[2%] z-10 w-auto max-w-[100%] whitespace-normal gap-[2px] text-center md:text-left">
              <Linemobile />
              <CardNative />
              <CardGrouples />
              <CardHSK />
              <CardCourse />
              <Linemobile />
            </div>
          </div>
        </div>

        <picture className="hidden md:flex w-full items-center justify-center absolute z-20 mt-[8%] pointer-events-none">
          <img
            src="/cloudsmain.svg"
            alt={t("phoenix.cloudMainAlt")}
            className="w-full"
          />
        </picture>

        <picture className="flex md:hidden absolute left-0 z-20 mt-[8%] pointer-events-none justify-start w-full">
          <img
            src="/clmainmobl.svg"
            alt={t("phoenix.cloudLeftAlt")}
            className="w-[40%] max-w-[300px] shrink"
          />
        </picture>
        <picture className="flex md:hidden absolute right-0 z-20 mt-[8%] pointer-events-none justify-end w-full">
          <img
            src="/clmainmobr.svg"
            alt={t("phoenix.cloudRightAlt")}
            className="w-[40%] max-w-[300px] shrink"
          />
        </picture>
      </div>
    </>
  );
}