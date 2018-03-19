import * as React from 'react'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'
import { Supporters as imgs, } from '../../config/imgMap'

const css = require('../../styles/supporter')

const supporterImgList = [imgs.SUPPORTER1, ].map((img) => `${img}`)

export default class extends React.Component {
  state = {
    loaded: false,
  }
  componentDidMount () {}

  t = null as any
  lang = null as any

  Title = (props) => {
    const { t, } = this
    const title = t('title')
    return (
      <div className={css.titleContainer}>
        {/* <div className={css.vLine} /> */}
        <div className={`${css.title} fontBold`}>{title}</div>
      </div>
    )
  }

  SupporterList = (props) => {
    const { SupporterCell, t, } = this
    return (
      <div className={css.supporterList}>
        {t('supporterList', { returnObjects: true, }).map((prop, i) => {
          const img = supporterImgList[i]
          return <SupporterCell {...prop} img={img} />
        })}
      </div>
    )
  }

  SupporterCell = (props) => {
    const { img, href, desc, name, } = props
    let logo
    if (href) {
      logo = (
        <a className={css.supporterImg} href={href} target="_blank">
          <img src={img} alt="" />
        </a>
      )
    } else {
      logo = (
        <div className={css.supporterImg}>
          <img src={img} alt="" />
        </div>
      )
    }
    return (
      <div className={css.supporterCell}>
        <div className={css.supporterImgBack}>
          <div className={css.backTop} />
          {/* <div className={css.backBottom} /> */}
          {logo}
        </div>

        <div className={css.name}>{name}</div>
        {/* <div className={css.desc}>{desc}</div> */}
      </div>
    )
  }

  render () {
    const { Title, SupporterList, } = this
    const { loaded, } = this.state
    return (
      <I18n ns="supporters">
        {(t, { i18n, }) => {
          this.t = t
          this.lang = i18n
          return (
            <div className={css.main}>
              <div className={css.container}>
                <Title />
                <SupporterList />
              </div>
            </div>
          )
        }}
      </I18n>
    )
  }
}
