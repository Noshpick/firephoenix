"use client";

import { useI18n } from "@/i18n/I18nProvider";

export default function About() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="w-full h-[900px] sm:h-[1000px] md:h-[850px] lg:h-[900px] bg-[#8C0000] mt-[108px] flex flex-col relative overflow-visible"
    >
      <div className="w-full h-auto pt-[3%] pr-[10vw] pb-0 pl-[10vw] mt-[60px] flex flex-col md:flex-row justify-between items-start">
        <div className="w-[40vw] max-w-[508px] h-auto flex flex-col justify-start items-start mt-[30px] md:mt-[60px] lg:mt-[80px]">
          <p className="text-white font-inter text-[20px] sm:text-[20px] md:text-[30px] lg:text-[40px] not-italic font-bold leading-tight md:leading-[24px]">
            {t("about.sectionTitle")}
          </p>
          <p className="text-white font-inter text-[12px] sm:text-[14px] mt-[10px] md:mt-[42px] lg:text-[20px] not-italic font-medium leading-normal">
            {t("about.sharedText")}
          </p>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <div className="w-[40vw] max-w-[666px] h-auto flex justify-center items-start relative z-[6] md:z-[4] mt-[5vw]  2xl:mt-[1vw]">
            <picture>
              <img
                src="/mission.svg"
                alt=""
                className="w-[80vw] sm:w-[70vw] md:w-full h-auto min-w-[150px] max-w-[666px]"
              />
            </picture>
            <p
              className="text-[#502E12] font-inter text-[18px] min-[540px]:text-[22px] sm:!text-[26px] md:!text-[30px] lg:!text-[40px] not-italic font-bold leading-tight absolute z-[5] 
                            mt-[7vw] min-[450px]:mt-[10vw] min-[540px]:mt-[13vw] sm:!mt-[8vw] md:!mt-[3vw] lg:!mt-[4vw]"
            >
              {t("about.missionTitle")}
            </p>
            <p
              className="text-[#805B3C] font-inter text-[15px] min-[540px]:text-[16px] sm:!text-[18px] md:!text-[15px] lg:!text-[19px] not-italic font-medium leading-relaxed text-center absolute z-[5] w-[270px] sm:w-[300px] md:max-w-[290px] lg:min-w-[380px] 
                            mt-[12vw] min-[450px]:mt-[15vw] min-[540px]:mt-[18vw] sm:!mt-[15vw] md:!mt-[8vw] lg:!mt-[10vw]"
            >
              {t("about.sharedText")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end absolute z-[0] mt-[2vw]">
        <picture className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto">
          <img src="/goldlogo.svg" alt="" />
        </picture>
      </div>

      <div className="line hidden md:block flex justify-center mt-[50px] md:mt-[140px] lg:mt-[50px] 2xl:mt-[30px] justify-center">
        <img src="/line.svg" alt="" className="mx-auto" />
      </div>

      <img src="/linemob.svg" alt="" className="block md:hidden w-full mx-auto" />

      <div className="w-[80vw] h-auto flex justify-center items-center flex-col ml-[10vw] mt-[15px]">
        <p className="text-white font-inter text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] not-italic font-bold leading-tight md:leading-[24px]">
          {t("about.whoWeAreTitle")}
        </p>
        <p className="text-white text-center font-inter text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] not-italic font-medium leading-normal mt-[30px]">
          {t("about.sharedText")}
        </p>
      </div>

      <picture className="absolute left-0 bottom-[-50px] pointer-events-none z-10 w-[18vw] max-w-[220px] hidden md:block">
        <img
          src="/cloudaboutL.svg"
          alt={t("about.cloudLeftAlt")}
          className="w-full h-auto"
        />
      </picture>

      <picture className="absolute right-0 top-0 transform -translate-y-3/4 pointer-events-none z-10 w-[20vw] max-w-[260px] hidden md:block">
        <img
          src="/cloudaboutR.svg"
          alt={t("about.cloudRightAlt")}
          className="w-full h-auto"
        />
      </picture>

      <div className="absolute top-0 left-0 w-full h-auto md:hidden -translate-y-3/4">
        <img src="/cloudaboutmobT.svg" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-auto md:hidden translate-y-1/2">
        <img src="/cloudaboutmobL.svg" alt="" className="w-full h-auto" />
      </div>
    </section>
  );
}