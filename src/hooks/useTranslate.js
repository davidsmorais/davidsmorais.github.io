import { useState, useCallback } from 'react'

import translationEn from "Content/locales/en/translation.json";
import translationEs from "Content/locales/es/translation.json";
import translationPt from "Content/locales/pt/translation.json";
import translationIta from "Content/locales/it/translation.json";

const content = {
  en: translationEn,
  es: translationEs,
  pt: translationPt,
  it: translationIta,
}
const DEFAULT_LANGUAGE =
  (typeof window !== 'undefined' && localStorage?.getItem('lang')) ||
  navigator?.language?.split('-')[0]

const useTranslate = (mainKey) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)
  const languages = Object.keys(content)

  const updatePageLanguage = useCallback(
    (lang) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('lang', lang)
      }
      setLanguage(lang)
      window.location.reload()
    },
    [setLanguage],
  )
  const translate = useCallback(
    (key) => {
      if (!key) {
        return '';
      }
      const notFoundString = `Key not found: ${mainKey ? `${mainKey}.${key}` : key}`
      if (mainKey) {
        return content?.[language]?.[mainKey]?.[key] ?? notFoundString
      } else {
        return content?.[language]?.[key] ?? key;
      }
    },
    [language, setLanguage],
  )
  return {
    t: translate,
    setLanguage: updatePageLanguage,
    language,
    languages,
  }
}

export default useTranslate
