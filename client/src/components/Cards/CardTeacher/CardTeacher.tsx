"use client";

import Image from "next/image";
import BtnSignUp from "@/components/Buttons/ButtonSignUp/BtnSignUp";
import { useI18n } from "@/i18n/I18nProvider";

interface CardTeacherProps {
  name: string;
  image: string;
  education: string;
  experience: string;
  additional: string;
}

export default function CardTeacher({ 
  name, 
  image, 
  education, 
  experience, 
  additional 
}: CardTeacherProps) {
  const { t } = useI18n();
  const nameLines = name.split("\n");

  return (
    <div className="relative max-w-100">
      <picture className="flex w-full h-auto">
        <img
          src="/cardteach.svg"
          alt=""
          className="w-[360px] sm:w-full h-auto object-contain"
        />
      </picture>

      <picture>
        <img
          src="/viselkateach.svg"
          alt=""
          className="absolute top-5 right-10 w-12 sm:w-14 md:w-12 lg:w-16"
        />
      </picture>

      <div className="absolute inset-0 flex flex-col items-center gap-3 sm:gap-3.5 pb-4 pt-6 sm:pt-7 md:pt-8 px-4 overflow-hidden">
        {/* Фотография преподавателя - круглое изображение с обрезкой лица */}
        <div className="relative w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px] min-[950px]:!w-[110px] min-[950px]:!h-[110px] lg:w-[120px] lg:h-[120px] min-[1160px]:!w-[130px] min-[1160px]:!h-[130px] flex-shrink-0 mt-2 sm:mt-3">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#62432B]/20 shadow-lg">
            <Image
              src={image}
              alt="Преподаватель"
              fill
              className="object-cover object-center"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
        </div>

        {/* Имя */}
        <div className="text-center">
          <span className="text-[#62432B] font-[Inter] text-[18px] sm:text-[20px] md:text-[20px] min-[950px]:!text-[17px] lg:text-[18px] min-[1160px]:!text-[20px] not-italic font-semibold leading-tight">
            {nameLines.map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < nameLines.length - 1 && <br />}
              </span>
            ))}
          </span>
        </div>

        {/* Текст с информацией */}
        <div className="flex flex-col items-start w-full max-w-[260px] sm:max-w-[280px] md:max-w-[280px] min-[950px]:!max-w-[260px] lg:max-w-[270px] min-[1160px]:!max-w-[280px] space-y-1.5 sm:space-y-2.5 text-[#62432B] font-inter text-[8.5px] sm:text-[10px] md:text-[10px] min-[950px]:!text-[8.5px] lg:text-[9px] min-[1160px]:!text-[10px] not-italic leading-relaxed overflow-hidden flex-1 min-h-0 -mt-2 sm:mt-0 ml-3 sm:ml-0">
          <div className="w-full">
            <div className="font-semibold mb-0.5">{t("teachers.educationLabel")}</div>
            <div className="font-normal">{education}</div>
          </div>

          <div className="w-full">
            <div className="font-semibold mb-0.5">{t("teachers.experienceLabel")}</div>
            <div className="font-normal">{experience}</div>
          </div>

          <div className="w-full">
            <div className="font-semibold mb-0.5">{t("teachers.additionalLabel")}</div>
            <div className="font-normal">{additional}</div>
          </div>
        </div>
      </div>

      {/* Кнопка под рамкой */}
      <div className="flex justify-center mt-2 sm:mt-1">
        <BtnSignUp />
      </div>
    </div>
  );
}