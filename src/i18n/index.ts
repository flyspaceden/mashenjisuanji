import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, zh } from './resources'

const defaultLang = (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'zh'

i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: zh },
    en: { translation: en },
  },
  lng: defaultLang,
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
})

export const setLanguage = (lang: 'zh' | 'en') => {
  i18n.changeLanguage(lang)
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lang', lang)
  }
}

export default i18n
