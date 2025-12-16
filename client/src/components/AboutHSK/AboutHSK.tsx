'use client';

import { useI18n } from '@/i18n/I18nProvider';
import Line from '../Line/line';
import Linemobile from '../Line/Linemobile';

export const AboutHSK = () => {
  const { t, locale } = useI18n();
  const isEnglish = locale === 'en';

  const desktopSrc = isEnglish ? '/abouthsk_en.svg' : '/abouthsk.svg';
  const mobileSrc = isEnglish ? '/mobabouthsk_en.svg' : '/mobabouthsk.svg';

  return (
    <section id='abouthsk' className="mt-80 md:mt-0 w-full font-inter">
        <Line/>
        <Linemobile />
      <div className="mx-auto max-w-[1400px] px-10 sm:px-20 md:px-20 lg:px-30 py-10 md:py-16">
        <h2 className="text-[40px] text-center mb-10 md:mb-14 text-[#5B3A1E] font-semibold">
          {t('aboutHSK.title')}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-center md:justify-start">
            <picture>
              <source media="(max-width: 767px)" srcSet={mobileSrc} />
              <img
                src={desktopSrc}
                alt="HSK"
                className="w-full h-auto max-w-[520px]"
              />
            </picture>
          </div>

          <div className="order-1 md:order-2 max-w-[570px] md:w-1/2 text-center md:text-center flex flex-col items-center justify-center mx-auto">
            <h3 className="text-[24px] lg:text-[32px] font-semibold text-center text-[#5B3A1E] mb-4">
              {t('aboutHSK.subtitle')}
            </h3>

            <p className="text-[20px] lg:text-[30px] leading-snug text-center text-[#5B3A1E]">
              {t('aboutHSK.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHSK;