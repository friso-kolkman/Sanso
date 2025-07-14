
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'nl' ? 'EN' : 'NL'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
