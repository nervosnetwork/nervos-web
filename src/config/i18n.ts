import * as i18n from 'i18next'
import * as XHR from 'i18next-xhr-backend'
import * as LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'
import zh from './locale/zh-CN'
import en from './locale/en'

i18n
  .use(XHR)
  // .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    defaultNS: 'translations',
    keySeparator: false,
    resources: {
      zh,
      en,
    },
    react: {
      wait: false,
    },
  })

export default i18n
