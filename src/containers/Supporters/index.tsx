import * as React from 'react'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'
import { supporters as imgs, } from '../../config/imgMap'

const css = require('../../styles/supporter')

const supporterImgList = [
  {
    img: imgs.supporter1,
    href: 'https://www.cryptape.com/#/about/',
  },
]

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
    const { SupporterCell, } = this
    return (
      <div className={css.supporterList}>
        {supporterImgList.map((imgInfo, i) => {
          const { img, href, } = imgInfo
          return <SupporterCell img={img} href={href} />
        })}
      </div>
    )
  }

  SupporterCell = (props) => {
    const { img, href, } = props
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
        <div className={css.supporterImgBack} />
        {logo}
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
