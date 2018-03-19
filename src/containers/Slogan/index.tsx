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

const Locale = (props) => {
  const { t, lang, } = props
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

const Header = (props) => {
  const { t, lang, } = props
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

const SloganWord = (props) => {
  const { t, } = props
  const { sloganWordLoaded, sloganWord, } = props.state
  return (
    <div className={`${css.sloganWord} fontBold`}>
      <img src={`${imgs.QUO}`} alt="quotation mark" />
      <span className={sloganWordLoaded ? css.hidden : ''}>{sloganWord}</span>
      <span className={sloganWordLoaded ? '' : css.hidden}>{t('word')}</span>
    </div>
  )
}

const Description = (props) => {
  const { t, lang, } = props
  return (
    <div className={css.description}>
      <SloganWord {...props} />
      {t('desc', { returnObjects: true, }).map((desc, i) => (
        <div className={css.text} key={desc}>
          {desc}
        </div>
      ))}
    </div>
  )
}

const littleImgList = [
  {
    className: `${css.n1}`,
    src: `${imgs.ACTION1}`,
  },
  {
    className: `${css.n2}`,
    src: `${imgs.ACTION2}`,
  },
  {
    className: `${css.n3}`,
    src: `${imgs.ACTION3}`,
  },
  {
    className: `${css.n4}`,
    src: `${imgs.ACTION4}`,
  },
  {
    className: `${css.n5}`,
    src: `${imgs.ACTION5}`,
  },
  {
    className: `${css.n6}`,
    src: `${imgs.ACTION6}`,
  },
  {
    className: `${css.n7}`,
    src: `${imgs.ACTION7}`,
  },
]

const SloganImg = (props) => {
  const { addLoadedImgNum, } = props
  // const { actionBigImgCss, actionLittleImgCss, } = this.state
  const { actionBigImgCss, actionLittleImgCss, } = props.state

  const littleImgs = littleImgList.map((imgProps) => {
    const prop = {
      className: `${imgProps.className} ${css.little} ${actionLittleImgCss}`,
      src: `${imgProps.src}`,
    }
    return <img {...prop} alt="" />
  })
  return (
    <div className={css.sloganImg}>
      {littleImgs}
      <img
        className={`${css.big} ${actionBigImgCss}`}
        src={`${imgs.SLOGAN}`}
        alt=""
      />
    </div>
  )
}

// const Subscribe = (props) => {
//   const { t, lang, } = props
//   const subscribe = t('translations:subscribe')
//   return (
//     <div className={css.subscribe}>
//       <div className={`${css.line} ${css.left}`} />
//       <div className={css.buttonOuter}>
//         <div className={css.buttonInner}>{subscribe}</div>
//         <div className={css.diagonal} />
//       </div>
//       <div className={`${css.line} ${css.right}`} />
//     </div>
//   )
// }

export default class extends React.Component {
  state = {
    loaded: false,
    sloganWord: '',
    sloganWordLoaded: false,
    actionLittleImgCss: '',
    actionBigImgCss: '',
    imgNum: 0,
    imgSrcList: ['', '', '', '', '', '', '', ],
  }

  componentWillMount () {
    const {imgSrcList, } = this.state
  }

  componentDidMount () {
    const { autoRenderSloganWord, lang, } = this
    setTimeout(() => {
      this.setState(() => ({ loaded: true, }))
    }, 0)
    window.onload = autoRenderSloganWord
    // autoRenderSloganWord()
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

  addLoadedImgNum = () => {
    let { imgNum, } = this.state
    imgNum++
    this.setState({
      imgNum,
    })
  }

  render () {
    const { props, addLoadedImgNum, state, } = this
    const {
      loaded,
      actionBigImgCss,
      actionLittleImgCss,
      sloganWordLoaded,
      sloganWord,
    } = this.state
    // const state = this.state
    return (
      <I18n ns="slogan">
        {(t, { i18n, }) => {
          const prop = {
            t,
            lang: i18n,
            state,
          }
          this.t = t
          this.lang = i18n
          return (
            <div
              className={css.slogan}
              style={{ backgroundImage: `url(${imgs.BG}`, }}
            >
              <Header {...prop} />
              <SloganImg {...prop} addLoadedImgNum={addLoadedImgNum} />
              <Description {...prop} />
            </div>
          )
        }}
      </I18n>
    )
  }
}
