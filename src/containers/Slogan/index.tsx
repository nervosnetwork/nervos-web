import * as React from 'react'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'

import { Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'
import { Slogan as imgs, } from '../../config/imgMap'

const css = require('../../styles/slogan')

const localeList = [
  {
    label: 'english',
    path: 'en',
  },
  {
    label: '中文',
    path: 'zh',
  },
]
const localePathList = ['en', 'zh', ]
// const sloganWord = 'The Common Knowledge Base of the 7.6 Billion People.'
const sloganWordTimeout = 1500

export default class extends React.Component {
  state = {
    loaded: false,
    sloganWord: '',
    sloganWordLoaded: false,
    actionLittleImgCss: '',
    actionBigImgCss: '',
  }

  componentDidMount () {
    const { autoRenderSloganWord, lang, } = this
    setTimeout(() => {
      this.setState(() => ({ loaded: true, }))
    }, 0)
    window.onload = autoRenderSloganWord
    if (lang.language.startsWith('zh')) {
      // lang.changeLanguage('zh')
      lang.changeLanguage('en')
    } else {
      lang.changeLanguage('en')
    }
  }

  t = null as any
  lang = {
    language: '',
  } as any

  Locale = (props) => {
    const { t, lang, } = this
    return (
      <div className={css.locale}>
        {localeList.map((item) => {
          const { path, label, } = item
          return (
            <div
              className={lang.language === path ? css.active : ''}
              data-localeitem={path}
              onClick={() => lang.changeLanguage(path)}
            >
              {label}
            </div>
          )
        })}
      </div>
    )
  }

  Header = (props) => {
    const { t, lang, Locale, } = this
    const href = t('translations:whitepaperHref')
    return (
      <div className={css.header}>
        <div className={css.image}>
          <img src={`${imgs.LOGO}`} alt="logo" />
        </div>
        {/* <Locale /> */}
      </div>
    )
  }

  autoRenderSloganWord = () => {
    const { t, } = this

    const promise = new Promise((resolve, reject) => {
      const word = t('word').split('')
      const len = word.length
      const onetime = sloganWordTimeout / len
      word.forEach((char, i) => {
        setTimeout(() => {
          this.setState({
            sloganWord: this.state.sloganWord + char,
          })
        }, i * onetime)
      })
      // const endTime = (t('word').length + 1) * sloganWordTimeout
      this.setState({
        actionBigImgCss: css.actionBefore,
      })
      setTimeout(() => {
        this.setState({
          actionLittleImgCss: css.actionBefore,
        })
        setTimeout(() => {
          this.setState({
            actionLittleImgCss: `${css.actionBefore} ${css.action}`,
          })
        }, 100)
      }, 1200)
      setTimeout(() => {
        resolve()
      }, sloganWordTimeout)
    })

    promise.then(() => {
      this.setState({
        sloganWordLoaded: true,
      })
    })
  }

  SloganWord = () => {
    const { t, } = this
    const { sloganWordLoaded, } = this.state
    return (
      <div className={`${css.sloganWord} fontBold`}>
        <img src={`${imgs.QUO}`} alt="quotation mark" />
        <span className={sloganWordLoaded ? css.hidden : ''}>
          {this.state.sloganWord}
        </span>
        <span className={sloganWordLoaded ? '' : css.hidden}>{t('word')}</span>
      </div>
    )
  }

  Description = (props) => {
    const { SloganWord, } = this
    const { t, lang, } = this
    return (
      <div className={css.description}>
        <SloganWord />
        {t('desc', { returnObjects: true, }).map((desc, i) => (
          <div className={css.text}>{desc}</div>
        ))}
      </div>
    )
  }

  SloganImg = (props) => {
    const { actionBigImgCss, actionLittleImgCss, } = this.state
    return (
      <div className={css.sloganImg}>
        <img
          className={`${css.n1} ${css.little} ${actionLittleImgCss}`}
          src={`${imgs.ACTION1}`}
          alt=""
        />
        <img
          className={`${css.n2} ${css.little} ${actionLittleImgCss}`}
          src={`${imgs.ACTION2}`}
          alt=""
        />
        <img
          className={`${css.n3} ${css.little} ${actionLittleImgCss}`}
          src={`${imgs.ACTION3}`}
          alt=""
        />
        <img
          className={`${css.n4} ${css.little} ${actionLittleImgCss}`}
          src={`${imgs.ACTION4}`}
          alt=""
        />
        <img
          className={`${css.n5} ${css.little} ${actionLittleImgCss}`}
          src={`${imgs.ACTION5}`}
          alt=""
        />
        <img
          className={`${css.n6} ${css.little} ${actionLittleImgCss}`}
          src={`${imgs.ACTION6}`}
          alt=""
        />
        <img
          className={`${css.n7} ${css.little} ${actionLittleImgCss}`}
          src={`${imgs.ACTION7}`}
          alt=""
        />
        <img
          className={`${css.big} ${actionBigImgCss}`}
          src={`${imgs.SLOGAN}`}
          alt=""
        />
      </div>
    )
  }

  Subscribe = (props) => {
    const { t, lang, } = this
    const subscribe = t('translations:subscribe')
    return (
      <div className={css.subscribe}>
        <div className={`${css.line} ${css.left}`} />
        <div className={css.buttonOuter}>
          <div className={css.buttonInner}>{subscribe}</div>
          <div className={css.diagonal} />
        </div>
        <div className={`${css.line} ${css.right}`} />
      </div>
    )
  }

  render () {
    const { props, Header, Description, SloganImg, Subscribe, } = this
    const { loaded, } = this.state
    return (
      <I18n ns="slogan">
        {(t, { i18n, }) => {
          this.t = t
          this.lang = i18n
          return (
            <div
              className={css.slogan}
              style={{ backgroundImage: `url(${imgs.BG}`, }}
            >
              <Header />
              <SloganImg />
              <Description />
            </div>
          )
        }}
      </I18n>
    )
  }
}
