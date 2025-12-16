"use client";

import BtnSignUp from "@/components/Buttons/ButtonSignUp/BtnSignUp";
import { useI18n } from "@/i18n/I18nProvider";

export default function PackSolo() {
  const { t } = useI18n();

  return (
    <div className="w-full max-w-[420px] mx-auto">
      <div className="relative w-full h-auto max-w-[420px]">
        <img
          src="/cardless.svg"
          alt={t("lessons.packSolo.cardAlt")}
          className="w-full h-auto object-contain max-[639px]:max-w-[330px]"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center text-center px-4">
          <span
            className="text-[#604127] font-inter font-semibold leading-tight 
            mt-[15%]
            md:mt-[13%]
            min-[840px]:!mt-[15%] lg:!mt-[10%]
            max-[767px]:text-[34px] md:text-[26px]
            min-[840px]:!text-[30px] lg:text-[38px] xl:text-[42px]"
          >
            {t("lessons.packSolo.title")}
          </span>

          <div
            className="max-[767px]:mt-[4%] sm:mt-[5%] md:mt-[3%] lg:mt-[5%]
            w-[95%] md:w-[93%] min-[840px]:!w-[95%]
            max-[767px]:px-5 md:px-4 lg:px-5  
            max-[767px]:space-y-3 md:space-y-3"
          >
            <span
              className="block text-[#604127] font-inter leading-snug whitespace-pre-line
                        max-[767px]:text-[18px] sm:text-[20px] md:text-[14px] lg:text-[18px] xl:text-[20px]"
            >
              {t("lessons.packSolo.description")}
            </span>

            <span
              className="block text-[#62432B] font-inter font-semibold leading-none 
                        max-[767px]:text-[34px] md:text-[20px] lg:text-[36px] xl:text-[38px]
                        max-[767px]:mt-0 sm:mt-7 md:mt-0
                        min-[840px]:!mt-[15%]"
            >
              {t("lessons.packSolo.price")}
            </span>
          </div>

          <div className="mt-[4%] sm:mt-[10%] md:mt-[4%] lg:mt-[10%] max-[767px]:scale-110 md:scale-115 lg:scale-120 xl:scale-[1.25]">
            <BtnSignUp />
          </div>
        </div>
      </div>
    </div>
  );
}