import * as React from 'react'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'
import { Features as imgs, } from '../../config/imgMap'

const css = require('../../styles/features')

const sectionImgList = [imgs.AUTO, imgs.RE, imgs.PR, ].map((img) => `${img}`)

const Button = (props) => {
  const { t, label, href, className, } = props
  return (
    <div className={css.buttonOuter}>
      <a href={href}>
        <div className={`${css.buttonInner} fontBold`}>{label}</div>
      </a>
      <div className={css.diagonal} />
    </div>
  )
}

const Whitepaper = (props) => {
  const { t, } = props
  const info = {
    zh: {
      label: '白皮书',
      href: `/#/pdf/${process.env.WP_ADDR}-zh`,
      className: css.zh,
      t,
    },
    en: {
      label: 'Whitepaper',
      href: `/#/pdf/${process.env.WP_ADDR}`,
      className: css.en,
      t,
    },
  }
  return (
    <div className={`${css.whitepaper}`}>
      <div className={`${css.line} ${css.left}`} />
      <Button {...info.en} />
      <Button {...info.zh} />
      <div className={`${css.line} ${css.right}`} />
    </div>
  )
}

const Title = (props) => {
  const { t, } = props
  const title = t('title')
  return (
    <div className={css.titleContainer}>
      <div className={`${css.title} fontBold`}>
        <Whitepaper {...props} />
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
          ),
      )}
      <div className={`${css.verticalLine} ${css.bottom2}`} />
    </div>
  )
}

export default (props) => (
  <I18n ns="features">
    {(t, { i18n, }) => (
      <div className={css.main}>
        <div className={css.container}>
          <Title t={t} />
          <SectionList t={t} lang={i18n} />
        </div>
      </div>
    )}
  </I18n>
)

// export default class extends React.Component {

//   render () {
//     return (

//     )
//   }
// }
