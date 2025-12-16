"use client";
import { useI18n } from "@/i18n/I18nProvider";

export default function CardCourse() {
  const { locale } = useI18n();

  const imageSrc = locale === "ru"
    ? "/CardCourse.svg"
    : "/CardCourse_en.svg";

  const mobileSrc = locale === "ru"
    ? "/MobCourse.svg"
    : "/MobCourse_en.svg";

  return (
    <a href="#lessons" className="flex items-center justify-center w-full">
      <picture className="z-[2] w-[70%]">
        <source srcSet={mobileSrc} media="(max-width: 767px)" />
        <img
          src={imageSrc}
          alt=""
          className="w-full h-auto transform translate-x-[20px] will-change-transform rotate-[-6deg] max-[767px]:rotate-0 transition-transform duration-300 hover:scale-105 hover:rotate-[0.5deg] max-[767px]:translate-x-0 max-[767px]:mx-auto max-[767px]:w-[100%] cursor-pointer"
        />
      </picture>
    </a>
  );
}