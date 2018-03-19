import * as React from 'react'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'
import { Features as imgs, } from '../../config/imgMap'

const css = require('../../styles/features')

const sectionImgList = [imgs.AUTO, imgs.RE, imgs.PR, ].map((img) => `${img}`)

const Button = (props) => {
  const { t, label, href, } = props
  // const subscribe = t('translations:subscribe')
  return (
    <div className={css.subscribe}>
      <div className={`${css.line} ${css.left}`} />
      <div className={css.buttonOuter}>
        <a href={href} target="_blank">
          <div className={`${css.buttonInner} fontBold`}>{label}</div>
        </a>
        <div className={css.diagonal} />
      </div>
      <div className={`${css.line} ${css.right}`} />
    </div>
  )
}

const Title = (props) => {
  const { t, } = props
  const title = t('title')
  const label = t('translations:whitepaper')
  const href = t('translations:whitepaperHref')
  return (
    <div className={css.titleContainer}>
      <div className={`${css.title} fontBold`}>
        <Button t={t} label={label} href={href} />
        <div className={`${css.text}`}>{title}</div>
      </div>
    </div>
  )
}

const SectionLImg = (props) => {
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

const SectionRImg = (props) => {
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

const SectionList = (props) => {
  const { t, } = props
  const sectionList = t('sectionList', { returnObjects: true, })
  return (
    <div className={css.sectionList}>
      <div className={`${css.verticalLine} ${css.top1}`} />
      <div className={css.border} />
      {sectionList.map(
        (section, i) =>
          i % 2 === 0 ? (
            <SectionLImg section={section} index={i} />
          ) : (
            <SectionRImg section={section} index={i} />
          )
      )}
      <div className={`${css.verticalLine} ${css.bottom2}`} />
    </div>
  )
}

export default class extends React.Component {
  state = {
    loaded: false,
  }
  componentDidMount () {}

  // t = null as any
  // lang = null as any

  render () {
    const { loaded, } = this.state
    return (
      <I18n ns="features">
        {(t, { i18n, }) => (
          // this.t = t
          // this.lang = i18n
          <div className={css.main}>
            <div className={css.container}>
              <Title t={t} />
              <SectionList t={t} lang={i18n} />
            </div>
          </div>
        )}
      </I18n>
    )
  }
}
