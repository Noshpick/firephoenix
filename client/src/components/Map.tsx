'use client'

import { useEffect, useRef } from 'react'

export default function Map() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // на всякий случай очищаем контейнер перед вставкой
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.async = true
    script.src =
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac86c6f731b9992b93401a02ea87ef3c4c6bbf5ea36fab2bfe0b1a95d5c417e52&width=100%25&height=400&lang=ru_RU&scroll=true'

    container.appendChild(script)

    // при размонтировании компонента просто чистим контейнер
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ height: 400 }}
    />
  )
}