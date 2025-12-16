"use client";

import CardTeacher from "../Cards/CardTeacher/CardTeacher";
import Line from "../Line/line";
import Linemobile from "../Line/Linemobile";
import { useI18n } from "@/i18n/I18nProvider";

interface Teacher {
  name: string;
  image: string;
  education: string;
  experience: string;
  additional: string;
}

interface TeachersDict {
  list?: Teacher[];
}

export default function Teachers() {
  const { t, dict } = useI18n();
  const teachers = ((dict.teachers as TeachersDict)?.list || []) as Teacher[];

  return (
    <div className="flex flex-col items-center w-full h-auto relative mt-[80px] px-4 sm:px-5 md:px-12">
      <Line />
      <Linemobile />

      <div className="w-full flex justify-center">
        <span className="text-[#604127] text-center font-[Inter] text-[40px] not-italic font-semibold leading-normal w-full block max-[950px]:text-center">
          {t("teachers.title")}
        </span>
      </div>

      <div className="flex flex-row max-[950px]:flex-col items-center justify-center gap-6 mt-[40px] z-10">
        {teachers.map((teacher: Teacher, index: number) => (
          <CardTeacher 
            key={index}
            name={teacher.name}
            image={teacher.image}
            education={teacher.education}
            experience={teacher.experience}
            additional={teacher.additional}
          />
        ))}
      </div>

      <div className="flex absolute pointer-events-none right-0 top-[80%] z-1 max-[767px]:hidden">
        <picture className="w-80">
          <img src="/cloudteach.svg" alt={t("teachers.cloudAlt")} />
        </picture>
      </div>
    </div>
  );
}