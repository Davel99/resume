// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from '../locales/en.json';
import translationES from '../locales/es.json';
import translationJA from '../locales/ja.json'

// Configure i18n
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      },
      ja:{
        translation: translationJA
      }
    },
    lng: 'es', // default language
    fallbackLng: 'es', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
