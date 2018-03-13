import * as React from 'react'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'
import { supporters as imgs, } from '../../config/imgMap'

const css = require('../../styles/supporter')

const supporterImgList = [imgs.supporter1, ]

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
        <div className={css.vLine} />
        <div className={`${css.title} fontBold`}>{title}</div>
      </div>
    )
  }

  SupporterList = (props) => {
    const { SupporterCell, } = this
    return (
      <div className={css.supporterList}>
        {supporterImgList.map((img, i) => <SupporterCell img={img} />)}
      </div>
    )
  }

  SupporterCell = (props) => {
    const { img, } = props
    return (
      <div className={css.supporterCell}>
        <div className={css.supporterImgBack} />
        <div className={css.supporterImg}>
          <img src={img} alt="" />
        </div>
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
