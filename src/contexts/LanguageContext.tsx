
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type SupportedLanguage = 'ar' | 'en' | 'es';

type Translations = {
  [key: string]: {
    [key in SupportedLanguage]: string;
  };
};

// Initial translation data
const translations: Translations = {
  // Common UI elements
  'nav.home': {
    ar: 'الرئيسية',
    en: 'Home',
    es: 'Inicio'
  },
  'nav.professors': {
    ar: 'المدرسين',
    en: 'Professors',
    es: 'Profesores'
  },
  'nav.languages': {
    ar: 'اللغات',
    en: 'Languages',
    es: 'Idiomas'
  },
  'nav.register': {
    ar: 'التسجيل',
    en: 'Register',
    es: 'Registro'
  },
  'nav.contact': {
    ar: 'اتصل بنا',
    en: 'Contact Us',
    es: 'Contacto'
  },
  'button.register': {
    ar: 'سجل الآن',
    en: 'Register Now',
    es: 'Regístrate Ahora'
  },
  'button.submit': {
    ar: 'إرسال',
    en: 'Submit',
    es: 'Enviar'
  },
  'button.cancel': {
    ar: 'إلغاء',
    en: 'Cancel',
    es: 'Cancelar'
  },
  'languages.title': {
    ar: 'اللغات المتوفرة',
    en: 'Available Languages',
    es: 'Idiomas Disponibles'
  },
  'languages.registerCourse': {
    ar: 'سجل في إحدى دوراتنا',
    en: 'Register for a course',
    es: 'Regístrate en un curso'
  },
  'language.select': {
    ar: 'اختر اللغة',
    en: 'Select Language',
    es: 'Seleccionar Idioma'
  }
};

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguage>('ar');

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || key;
  };

  // Direction based on language
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
