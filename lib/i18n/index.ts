import { Locale, Dictionary } from './types';

export const locales: readonly Locale[] = ['vi', 'en', 'zh'] as const;
export const defaultLocale: Locale = 'vi';

export const languageNames: Record<Locale, string> = {
  vi: 'Tiếng Việt',
  en: 'English',
  zh: '简体中文',
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  vi: () => import('./dictionaries/vi').then((m) => m.vi),
  en: () => import('./dictionaries/en').then((m) => m.en),
  zh: () => import('./dictionaries/zh').then((m) => m.zh),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loadDictionary = dictionaries[locale] || dictionaries[defaultLocale];
  return loadDictionary();
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export * from './types';
export * from './content';
