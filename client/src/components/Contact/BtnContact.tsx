"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { ButtonHTMLAttributes } from "react";

type BtnContactProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function BtnContact({ className = "", ...props }: BtnContactProps) {
  const { t } = useI18n();

  return (
    <button
      {...props}
      aria-label={t("buttons.signUpLabel")}
      className={`w-full md:w-auto inline-flex items-center justify-center min-w-0 whitespace-nowrap
                  h-10 sm:h-11 md:h-9 lg:h-12
                  px-4 sm:px-7 md:px-4
                  gap-2 sm:gap-2 md:gap-3
                  rounded-[12px] bg-[#A50000] text-white
                  hover:bg-white hover:text-[#A50000]
                  transition-colors duration-300 cursor-pointer shadow-md ${className}`}
    >
      <span
        className="font-inter font-medium leading-none
        text-sm sm:text-xs md:text-sm lg:text-base"
      >
        {t("buttons.signUpText")}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5"
        viewBox="0 0 16 14"
        fill="none"
      >
        <path
          d="M1 7H15M15 7L9 1M15 7L9 13"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}