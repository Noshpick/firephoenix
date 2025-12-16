"use client";

import CardVisit from "./Cards/CardVisit/CardVisit";
import { useI18n } from "@/i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <section
      id="contactlink"
      className="flex flex-col items-center justify-start w-full min-h-[900px] bg-[#8C0000] mt-[154px] relative overflow-hidden"
    >
      <span className="text-white font-[Inter] text-[32px] sm:text-[36px] md:text-[36px] lg:text-[40px] xl:text-[40px] font-semibold mt-[150px] mb-40 z-10">
        {t("footer.title")}
      </span>

      <CardVisit />

      <div className="flex flex-row mt-30 gap-[60px] z-10 mb-0 pb-0">
        <a
          href="https://vk.com/firephoenix_vl?from=groups"
          target="_blank"
          rel="noreferrer"
          aria-label={t("footer.socials.instagramLabel")}
          className="cursor-pointer"
        >
          <picture>
            <img
              className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[80px]"
              src="/vk.svg"
              alt={t("footer.socials.instagramLabel")}
            />
          </picture>
        </a>

        <a
          href="https://t.me/firephoenixvl"
          target="_blank"
          rel="noreferrer"
          aria-label={t("footer.socials.telegramLabel")}
          className="cursor-pointer"
        >
          <picture>
            <img
              className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[80px]"
              src="/telega.svg"
              alt={t("footer.socials.telegramLabel")}
            />
          </picture>
        </a>

        <a
          href="https://wa.me/message/6FCEGPULBFXAP1"
          target="_blank"
          rel="noreferrer"
          aria-label={t("footer.socials.whatsappLabel")}
          className="cursor-pointer"
        >
          <picture>
            <img
              className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[80px]"
              src="/whats.svg"
              alt={t("footer.socials.whatsappLabel")}
            />
          </picture>
        </a>
      </div>

      <picture className="flex left-0 absolute bottom-0 z-0">
        <img
          className="w-[400px] h-auto"
          src="/goldphoenix.svg"
          alt={t("footer.goldPhoenixAlt")}
        />
      </picture>

      <picture className="left-0 absolute bottom-0">
        <img
          src="/cloudfooterleft.svg"
          alt={t("footer.cloudLeftAlt")}
          className="w-full h-auto"
        />
      </picture>

      <picture className="right-0 absolute top-190">
        <img
          src="/cloudfooterright.svg"
          alt={t("footer.cloudRightAlt")}
        />
      </picture>
    </section>
  );
}