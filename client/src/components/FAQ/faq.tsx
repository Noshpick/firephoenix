"use client";

import { useState } from "react";
import Line from "../Line/line";
import Linemobile from "../Line/Linemobile";
import { useI18n } from "@/i18n/I18nProvider";

const FAQ_ITEMS = [
  { id: "1", qKey: "faq.items.1.q", aKey: "faq.items.1.a" },
  { id: "2", qKey: "faq.items.2.q", aKey: "faq.items.2.a" },
  { id: "3", qKey: "faq.items.3.q", aKey: "faq.items.3.a" },
  { id: "4", qKey: "faq.items.4.q", aKey: "faq.items.4.a" },
  { id: "5", qKey: "faq.items.5.q", aKey: "faq.items.5.a" },
  { id: "6", qKey: "faq.items.6.q", aKey: "faq.items.6.a" },
] as const;

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { t } = useI18n();

  return (
    <section className="flex flex-col items-center mt-[180px]">
      <Line />
      <Linemobile />

      <h2 className="text-[#604127] text-center font-[Inter] text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] lgxl:text-[42px] xl:text-[52px] 2xl:text-[58px] 3xl:text-[64px] font-semibold mt-[36px] sm:mt-[48px] md:mt-[64px] lg:mt-[80px] xl:mt-[92px]">
        {t("faq.title")}
      </h2>

      <div className="relative grid w-full place-items-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 lgxl:mt-14 xl:mt-16 max-[639px]:px-[10vw]">
        <img
          src="/Subtract.svg"
          alt=""
          className="row-start-1 col-start-1 max-w-[908px] w-[94%] sm:w-[92%] md:w-[90%] h-full object-contain self-start z-[10] pointer-events-none hidden sm:block"
        />
        <img
          src="/Subtract-1.svg"
          alt=""
          className="row-start-1 col-start-1 max-w-[846px] w-[88%] sm:w-[86%] md:w-[84%] h-full object-contain self-start z-[20] pointer-events-none hidden sm:block"
        />
        <img
          src="/faqmob.svg"
          alt=""
          className="row-start-1 col-start-1 w-[330px] h-full object-contain self-start z-[15] pointer-events-none block sm:hidden"
        />

        <div className="row-start-1 col-start-1 mt-5 sm:mt-10 z-[30] w-full flex flex-col items-center">
          <div
            className="w-[90%] sm:w-[80%] sm:mx-auto md:w-[80%] max-w-[1000px] 
                        space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4 xl:space-y-5
                        max-[1000px]:w-[95%] max-[1000px]:space-y-0"
          >
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id}>
                  <button
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex justify-between items-center py-3 px-3 sm:py-1 sm:px-4 md:py-2 md:px-5 lg:py-2 lg:px-6 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-left cursor-pointer rounded-[12px] bg-transparent mx-auto w-[90%] min-[450px]:!w-[80%] min-[510px]:!w-[70%] min-[580px]:!w-[60%] sm:!w-[80%] md:w-[100%]"
                  >
                    {t(item.qKey)}
                    <picture>
                      <img
                        src="/strelka.svg"
                        alt=""
                        className={`h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </picture>
                  </button>

                  <div
                    className={`overflow-hidden rounded-[12px] shadow transition-[max-height,padding] duration-300 ease-in-out bg-transparent ${
                      isOpen
                        ? "max-h-[500px] py-2 sm:py-1 md:py-2 lg:py-2 px-3 sm:px-4 md:px-5 lg:px-6 mx-auto w-[90%] min-[450px]:!w-[80%] min-[510px]:!w-[70%] min-[580px]:!w-[60%] sm:!w-[80%] md:w-[100%]"
                        : "max-h-0 py-0 px-3 sm:px-4 md:px-5 lg:px-6 mx-auto w-[90%] min-[450px]:!w-[80%] min-[510px]:!w-[70%] min-[580px]:!w-[60%] sm:!w-[80%] md:w-[85%] lg:w-[100%]"
                    }`}
                  >
                    <p className="text-[11px] sm:text-[11px] md:text-[13px] lg:text-[15px] leading-relaxed">
                      {t(item.aKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-4 sm:h-6 md:h-8 lg:h-10 xl:h-12" />
        </div>

        <div className="flex flex-row w-full justify-between bottom-0 translate-y-1/1 absolute pointer-events-none z-30">
          <picture>
            <img src="/veerleft.svg" alt="" />
          </picture>
          <picture>
            <img src="/veerright.svg" alt="" />
          </picture>
        </div>
      </div>
    </section>
  );
}