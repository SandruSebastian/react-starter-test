import { initReactI18next } from 'react-i18next';
import i18nModelsInstance from 'one.models/lib/i18n';
import i18nInstanceUI from 'one.ui/lib/ui/i18n';
import LanguageDetector from 'i18next-browser-languagedetector';

import ADD_TO_HOME_SCREEN_EN from './translations/en/addToHomeScreen.json';
import ADD_TO_HOME_SCREEN_DE from './translations/de/addToHomeScreen.json';

const resources = {
  en: {
    addToHomeScreen: ADD_TO_HOME_SCREEN_EN,
  },
  de: {
    addToHomeScreen: ADD_TO_HOME_SCREEN_DE,
  },
};

i18nModelsInstance
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'de',
    whitelist: ['de', 'en'],
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(console.error);

/**
 * Changes the current language with the given language as parameter
 *
 * @param lng - the wanted language
 */
export async function changeLanguage(lng: string): Promise<void> {
  await i18nInstanceUI.changeLanguage(lng);
  await i18nModelsInstance.changeLanguage(lng);
}

export default i18nModelsInstance;
