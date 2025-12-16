"use client";

import { useState } from "react";
import { useEffect, useRef } from "react";

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed right-4 bottom-4 z-[9999] flex flex-col items-center scale-90 max-[480px]:scale-75"
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`
      mb-[-90] flex flex-col items-center
      transition-all duration-300 ease-in-out origin-bottom
      ${open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-3 pointer-events-none"}
    `}
        style={{ transformOrigin: "bottom center" }}
      >
        <div className="bg-[#A50000] rounded-full px-5 py-7 flex flex-col items-center gap-6 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
          <a
            href="https://vk.com/firephoenix_vl?from=groups"
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 max-[480px]:w-12 max-[480px]:h-12 rounded-full bg-white flex items-center justify-center"
          >
            <img src="/vk.svg" alt="VK" className="w-8 h-8" />
          </a>

          <a
            href="https://t.me/firephoenixvl"
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 max-[480px]:w-12 max-[480px]:h-12 rounded-full bg-white flex items-center justify-center"
          >
            <img src="/telega.svg" alt="Telegram" className="w-8 h-8" />
          </a>

          <a
            href="https://wa.me/message/6FCEGPULBFXAP1"
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 max-[480px]:w-12 max-[480px]:h-12 rounded-full bg-white flex items-center justify-center"
          >
            <img src="/whats.svg" alt="WhatsApp" className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Кнопка (overlay поверх всего) */}
      <button
        onClick={() => setOpen(!open)}
        className="w-20 h-20 max-[480px]:w-16 max-[480px]:h-16 rounded-full flex items-center justify-center cursor-pointer shadow-xl"
      >
        <img
          src="/overlay.svg"
          alt="toggle"
          className="w-full h-full pointer-events-none"
        />
      </button>
    </div>
  );
}