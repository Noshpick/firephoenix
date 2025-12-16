"use client";

import { useI18n } from "@/i18n/I18nProvider";

export default function CardGroup() {
  const { t } = useI18n();

  const lines = t("linkLessons.groupTitle").split("\n");

  return (
    <div className="content--type__solo cursor-pointer relative">
      <a href="#group">
        <picture>
          <img src="/card.svg" alt="" />
        </picture>
      </a>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] text-[#62432B] text-center font-inter text-[20px] sm:text-[24px] md:text-[22px] lg:text-[26px] xl:text-[28px] not-italic font-semibold leading-normal tracking-[2px]">
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </span>
    </div>
  );
}