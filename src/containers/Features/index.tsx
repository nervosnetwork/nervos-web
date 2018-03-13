import * as React from 'react'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'
import { features as imgs, } from '../../config/imgMap'

const css = require('../../styles/features')

const sectionImgList = [imgs.auto, imgs.re, imgs.pr, ]

export default class extends React.Component {
  state = {
    loaded: false,
  }
  componentDidMount () {}

  t = null as any
  lang = null as any

  Subscribe = () => {
    const { t, } = this
    // const subscribe = t('translations:subscribe')
    const subscribe = t('translations:whitepaper')
    const href = t('translations:whitepaperHref')
    return (
      <div className={css.subscribe}>
        <div className={`${css.line} ${css.left}`} />
        <div className={css.buttonOuter}>
          <a href={href}>
            <div className={`${css.buttonInner} fontBold`}>{subscribe}</div>
          </a>

          <div className={css.diagonal} />
        </div>
        <div className={`${css.line} ${css.right}`} />
      </div>
    )
  }

  Title = (props) => {
    const { Subscribe, t, } = this
    const title = t('title')
    return (
      <div className={css.titleContainer}>
        <div className={`${css.title} fontBold`}>
          <Subscribe />
          <div className={`${css.text}`}>{title}</div>
        </div>
      </div>
    )
  }

  SectionLImg = (props) => {
    const { section, index, } = props
    const { title, text, } = section
    const image = sectionImgList[index]
    let className
    if (index === 0) {
      className = `${css.section} ${css.limg} ${css.first}`
    } else {
      className = `${css.section} ${css.limg}`
    }
    return (
      <section className={className}>
        <div className={css.img}>
          <img src={image} alt="" />
        </div>
        <div className={css.desc}>
          <div className={`${css.title} fontBold`}>{title}</div>
          <div className={css.text}>{text.map((item) => <p>{item}</p>)}</div>
        </div>
      </section>
    )
  }

  SectionRImg = (props) => {
    const { section, index, } = props
    const { title, text, } = section
    const image = sectionImgList[index]
    return (
      <section className={`${css.section} ${css.rimg}`}>
        <div className={css.desc}>
          <div className={`${css.title} fontBold`}>{title}</div>
          <div className={css.text}>{text.map((item) => <p>{item}</p>)}</div>
        </div>
        <div className={css.img}>
          <img src={image} alt="" />
        </div>
      </section>
    )
  }

  SectionList = () => {
    const { SectionRImg, SectionLImg, t, } = this
    const sectionList = t('sectionList', { returnObjects: true, })
    return (
      <div className={css.sectionList}>
        <div className={`${css.verticalLine} ${css.top1}`} />
        <div className={`${css.verticalLine} ${css.top2}`} />
        <div className={css.border} />
        {sectionList.map(
          (section, i) =>
            i % 2 === 0 ? (
              <SectionLImg section={section} index={i} />
            ) : (
              <SectionRImg section={section} index={i} />
            )
        )}
        <div className={`${css.verticalLine} ${css.bottom1}`} />
        <div className={`${css.verticalLine} ${css.bottom2}`} />
      </div>
    )
  }

  render () {
    const { SectionList, Title, } = this
    const { loaded, } = this.state
    return (
      <I18n ns="features">
        {(t, { i18n, }) => {
          this.t = t
          this.lang = i18n
          return (
            <div className={css.main}>
              <div className={css.container}>
                <Title />
                <SectionList />
              </div>
            </div>
          )
        }}
      </I18n>
    )
  }
}
