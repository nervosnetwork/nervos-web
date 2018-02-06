import * as i18n from 'i18next'
import * as XHR from 'i18next-xhr-backend'
import * as LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

i18n
  .use(XHR)
  // .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    defaultNS: 'translations',
    keySeparator: false,
    debug: true,
    resources: {
      zh: {
        translations: {
          slogan: `The Common Knowledge Base for The 7.6 Billion People.`,
          description: `NERVOS is the world's first Common Knowledge Base. It defines a suite of scalable and interoperable blockchain protocols to facilitate common knowledge formation and , storage and impact of our society. It's a third generation blockchain project with a more general abstraction that goes beyond the distributed ledgers of value and smart contracts, to allow expressions of real world commercial building blocks such as identity, reputation, endorsement, and stable currency.`,
          download: '下载',
          whitepaper: '白皮书',
          FAQ: '常见问题',
          CN: '中文',
          EN: '英文',
          Technology: '技术',
          Features: '优势',
          'Contact Us': '联系我们',
          Advisors: '顾问',
          'Team Members': '团队',
          Supporters: '支持',
          'Common Knowledge Base': '共识基础',
          'Built-in Identity': '内建身份合约',
          Practical: '实践',
          'In NERVOS, individuals and businesses can control their identities directly on the protocol layer, independent of any applications. Identities are critical for the expression of property right, which is the foundation of commerce.':
            'In NERVOS, individuals and businesses can control their identities directly on the protocol layer, independent of any applications. Identities are critical for the expression of property right, which is the foundation of commerce.',
          'To reach NERVOS’ goal of serving real people and businesses, we have to make practical choices to integrate with today’s financial and commercial infrastructure. We provide protocol layer stable currency for price certainty and KYC & AML solutions for businesses to meet compliance requirements.': `To reach NERVOS’ goal of serving real people and businesses, we have to make practical choices to integrate with today’s financial and commercial infrastructure. We provide protocol layer stable currency for price certainty and KYC & AML solutions for businesses to meet compliance requirements.`,
          'Your Name': '姓名',
          'E-mail': '邮件地址',
          Subscribe: '订阅',
        },
      },
      en: {
        translations: {
          slogan: `The Common Knowledge Base for The 7.6 Billion People.`,
          description: `NERVOS is the world's first Common Knowledge Base. It defines a suite of scalable and interoperable blockchain protocols to facilitate common knowledge formation and , storage and impact of our society. It's a third generation blockchain project with a more general abstraction that goes beyond the distributed ledgers of value and smart contracts, to allow expressions of real world commercial building blocks such as identity, reputation, endorsement, and stable currency.`,
          download: 'Download',
          whitepaper: 'White Paper',
          FAQ: 'FAQ',
          CN: 'CN',
          EN: 'EN',
          Technology: 'Technology',
          Features: 'Features',
          'Contact Us': 'Contact Us',
          Advisors: 'Advisors',
          'Team Members': 'Team Members',
          Supporters: 'Supporters',
          'Common Knowledge Base': 'Common Knowledge Base',
          'Built-in Identity': 'Built-in Identity',
          Practical: 'Practical',
          'In NERVOS, individuals and businesses can control their identities directly on the protocol layer, independent of any applications. Identities are critical for the expression of property right, which is the foundation of commerce.':
            'In NERVOS, individuals and businesses can control their identities directly on the protocol layer, independent of any applications. Identities are critical for the expression of property right, which is the foundation of commerce.',
          'To reach NERVOS’ goal of serving real people and businesses, we have to make practical choices to integrate with today’s financial and commercial infrastructure. We provide protocol layer stable currency for price certainty and KYC & AML solutions for businesses to meet compliance requirements.': `To reach NERVOS’ goal of serving real people and businesses, we have to make practical choices to integrate with today’s financial and commercial infrastructure. We provide protocol layer stable currency for price certainty and KYC & AML solutions for businesses to meet compliance requirements.`,
          'Your Name': 'Your Name',
          'E-mail': 'E-mail',
          Subscribe: 'Subscribe',
        },
      },
    },
    // },
    react: {
      wait: false,
    },
  })

export default i18n
