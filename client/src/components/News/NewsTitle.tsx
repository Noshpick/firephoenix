'use client';

import Image from "next/image"
import { useI18n } from "@/i18n/I18nProvider";

export default function NewsTitle() {
    const { t } = useI18n();
    return(
        <div className="relative mt-[100px] flex items-center justify-center w-full min-h-[200px] px-4">
            {/* Левое облако - вплотную к левой границе */}
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-0">
                <Image src={`/sky_1_news.svg`} alt={'sky'} width={300} height={200} className="object-contain"/>
            </div>

            {/* Заголовок по центру */}
            <span className="relative z-10 font-crimson font-semibold text-[50px] leading-[100%] tracking-normal text-center text-[#604127]">{t("news.title")}</span>

            {/* Правое облако - вплотную к правой границе */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-0">
                <Image src={`/sky_2_news.svg`} alt={'sky'} width={300} height={200} className="object-contain"/>
            </div>
        </div>
    );
}