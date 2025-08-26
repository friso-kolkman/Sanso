
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  textColor?: 'white' | 'black';
}

const LanguageSwitcher = ({ textColor = 'white' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  const textColorClass = textColor === 'white' 
    ? 'text-white/80 hover:text-white' 
    : 'text-black/80 hover:text-black';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={`flex items-center space-x-1 ${textColorClass}`}
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'nl' ? 'EN' : 'NL'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
