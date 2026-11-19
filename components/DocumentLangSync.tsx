'use client';

import { useEffect } from 'react';

interface DocumentLangSyncProps {
  lang: string;
}

export default function DocumentLangSync({ lang }: DocumentLangSyncProps) {
  useEffect(() => {
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return null;
}
