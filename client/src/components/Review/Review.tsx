'use client'

import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import CardReview from '../Cards/CardReview/CardReview'
import Line from '../Line/line'
import Linemobile from '../Line/Linemobile'
import { useI18n } from '@/i18n/I18nProvider'
import { reviewData } from '@/data/review'

export default function Review() {
  const { t } = useI18n()

  const items = reviewData

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    mode: 'snap',
    slides: { perView: 'auto', spacing: 24, origin: 'center' },
    renderMode: 'precision',
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 'auto', spacing: 16, origin: 'center' },
      },
      '(min-width: 769px) and (max-width: 1024px)': {
        slides: { perView: 'auto', spacing: 20, origin: 'center' },
      },
    },
  })

  return (
    <section className="w-full mt-[180px]">
      <Line />
      <Linemobile />

      <div className="mx-auto w-full">
        <header className="flex items-center justify-center mb-2">
          <h2 className="text-[40px] font-semibold text-[#604127] text-center">
            {t('review.title')}
          </h2>
        </header>

      <div className="relative w-full overflow-x-hidden">
        <div ref={sliderRef} className="keen-slider py-8 overflow-visible">
          {items.map((it) => (
            <div
              key={it.id}
              className="keen-slider__slide w-full max-w-[800px] shrink-0 h-full flex mt-10 overflow-visible"
            >
              <div className="w-full h-full">
                <CardReview reviewId={it.reviewId} imageSrc={it.imageSrc} />
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label={t('review.prev')}
            onClick={() => instanceRef.current?.prev()}
            className="h-12 w-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center cursor-pointer"
          >
            <img src="/left.svg" alt="" />
          </button>
          <button
            type="button"
            aria-label={t('review.next')}
            onClick={() => instanceRef.current?.next()}
            className="h-12 w-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center cursor-pointer"
          >
            <img src="/right.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}