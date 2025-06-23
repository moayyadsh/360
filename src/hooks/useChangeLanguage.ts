import { useState, useCallback, useEffect } from 'react';
import i18n from 'i18next';
import { setLanguageDirection } from '../utils/document/setLanguageDirection';
import { LocalStorageEnum } from '../enums/LocalStorage';
import en from '../../../assets/language/en.svg';
import ar from '../../../assets/language/ar.svg';
import { LocalStorageManager } from '../utils/class/LocalStorageManager';
const validLanguages = ['en', 'ar'];

export const useChangeLanguage = () => {
  const getInitialLanguage = () => {
    const storedLanguage = LocalStorageManager.getItem(
      LocalStorageEnum.LANGUAGE_KEY,
    ) as string;
    return validLanguages.includes(storedLanguage) ? storedLanguage : 'en';
  };

  const [currentLanguage, setCurrentLanguage] =
    useState<string>(getInitialLanguage());

  const changeLanguage = useCallback((newLanguage: string) => {
    if (validLanguages.includes(newLanguage)) {
      setCurrentLanguage(newLanguage);
    } else {
      console.error(`Invalid language code: ${newLanguage}`);
    }
  }, []);

  useEffect(() => {
    const applyLanguage = async () => {
      try {
        await i18n.changeLanguage(currentLanguage);
        setLanguageDirection(currentLanguage);
        LocalStorageManager.setItem(
          LocalStorageEnum.LANGUAGE_KEY,
          currentLanguage,
        );
      } catch (error) {
        console.error('Error changing language:', error);
      }
    };

    applyLanguage();
  }, [currentLanguage]);

  return { currentLanguage, changeLanguage };
};

export const languageOptions = [
  { code: 'ar', icon: ar, label: 'Arabic' },
  { code: 'en', icon: en, label: 'English' },
];
