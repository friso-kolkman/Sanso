import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const usePageData = <T>(
  data: Record<string, T>,
  fallbackKey: string = 'en'
): T => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    return data[language] || data[fallbackKey];
  }, [data, language, fallbackKey]);
};
