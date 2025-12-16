'use client';

import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";
import { ru } from "./locales/ru";
import { en } from "./locales/en";

// доступные языки
type Locale = "ru" | "en";

// рекурсивный словарь: строки, массивы, вложенные объекты
type Messages = {
  [key: string]: string | Messages | unknown;
};

type I18nContextValue = {
  locale: Locale;
  dict: Messages;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const dictionaries: Record<Locale, Messages> = {
  ru: ru as Messages,
  en: en as Messages,
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[locale] ?? dictionaries.ru;

    const t = (key: string): string => {
      const parts = key.split(".");
      let current: string | Messages | unknown = dict;

      for (const part of parts) {
        if (typeof current === "string" || current == null) break;
        if (typeof current === "object" && current !== null && part in current) {
          current = (current as Messages)[part];
        } else {
          break;
        }
      }

      return typeof current === "string" ? current : key;
    };

    return {
      locale,
      dict,
      setLocale,
      t,
    };
  }, [locale]);

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return ctx;
}