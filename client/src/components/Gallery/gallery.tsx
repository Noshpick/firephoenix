"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Line from "../Line/line";
import Linemobile from "../Line/Linemobile";
import { useI18n } from "@/i18n/I18nProvider";
import { galleryData } from "@/data/gallery";

export default function GallerySlider({
  title,
}: {
  title?: string;
}) {
  const { t } = useI18n();

  const items = galleryData;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    mode: "snap",
    slides: { perView: 5, spacing: 16, origin: "center" },
    renderMode: "precision",
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 8, origin: "center" },
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 2, spacing: 12, origin: "center" },
      },
    },
    created(s) {
      const d = s.track.details;
      const centerIdx = Math.round(d.rel);

      s.slides.forEach((el, idx) => {
        const img = el.querySelector<HTMLImageElement>("img");
        if (!img) return;
        img.style.transition = "height 300ms, transform 300ms";
        if (idx === centerIdx) {
          img.style.height = "260px";
          img.style.transform = "scale(1.05)";
        } else {
          img.style.height = "240px";
          img.style.transform = "scale(1)";
        }
      });
    },
    detailsChanged(s) {
      const d = s.track.details;
      const centerIdx = Math.round(d.rel);

      s.slides.forEach((el, idx) => {
        const img = el.querySelector<HTMLImageElement>("img");
        if (!img) return;
        if (idx === centerIdx) {
          img.style.height = "260px";
          img.style.transform = "scale(1.05)";
        } else {
          img.style.height = "240px";
          img.style.transform = "scale(1)";
        }
      });
    },
  });

  const heading = title ?? t("gallery.title");

  return (
    <section id="news" className="w-full py-10 mt-[180px]">
      <Line />
      <Linemobile />
      <div className="w-full">
        <header className="flex items-center justify-center mb-6">
          <h2 className="text-[#604127] text-center font-['Inter'] text-[40px] not-italic font-semibold leading-normal">
            {heading}
          </h2>
        </header>

        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-visible mt-[120px]">
          <div className="flex flex-row w-full justify-between absolute pointer-events-none z-30">
            <picture className="absolute bottom-[0.1px]">
              <img
                src="/cloudgalleft.svg"
                alt={t("gallery.clouds.leftAlt")}
              />
            </picture>
            <picture className="absolute right-0 top-40">
              <img
                src="/cloudgalright.svg"
                alt={t("gallery.clouds.rightAlt")}
              />
            </picture>
          </div>

          <div ref={sliderRef} className="keen-slider w-full overflow-visible">
            {items.map((it) => (
              <div
                key={it.id}
                className="keen-slider__slide flex-shrink-0"
                style={{ flexBasis: "20%" }}
              >
                <div className="relative overflow-visible h-[260px] w-full">
                  <img
                    src={it.image}
                    alt={t(`gallery.items.${it.id}.alt`)}
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[240px] object-cover rounded-lg transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-25 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label={t("gallery.prev")}
            onClick={() => instanceRef.current?.prev()}
            className="h-12 w-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center cursor-pointer"
          >
            <picture>
              <img src="/left.svg" alt="" />
            </picture>
          </button>
          <button
            type="button"
            aria-label={t("gallery.next")}
            onClick={() => instanceRef.current?.next()}
            className="h-12 w-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center cursor-pointer"
          >
            <picture>
              <img src="/right.svg" alt="" />
            </picture>
          </button>
        </div>
      </div>
    </section>
  );
}