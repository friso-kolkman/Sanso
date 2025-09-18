import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const usePageData = <T>(
  data: { en: T; nl: T },
  fallbackKey: 'en' | 'nl' = 'en'
): T => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    return data[language] || data[fallbackKey];
  }, [data, language, fallbackKey]);
};
