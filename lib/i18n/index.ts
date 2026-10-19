import { Locale, Dictionary } from './types';
import { vi } from './dictionaries/vi';
import { en } from './dictionaries/en';
import { zh } from './dictionaries/zh';

export const locales: readonly Locale[] = ['vi', 'en', 'zh'] as const;
export const defaultLocale: Locale = 'vi';

export const languageNames: Record<Locale, string> = {
  vi: 'Tiếng Việt',
  en: 'English',
  zh: '简体中文',
};

const dictionaries: Record<Locale, Dictionary> = {
  vi,
  en,
  zh,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export * from './types';
