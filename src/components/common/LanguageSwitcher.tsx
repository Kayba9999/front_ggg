
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage, SupportedLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languageOptions: { code: SupportedLanguage, name: string, flag: string }[] = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  return (
    <div className="flex gap-2">
      {languageOptions.map((option) => (
        <Button
          key={option.code}
          variant={language === option.code ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage(option.code)}
          className="flex items-center gap-2"
        >
          <span>{option.flag}</span>
          <span className="hidden md:inline">{option.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
