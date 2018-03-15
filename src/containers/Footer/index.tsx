import * as React from 'react'
import { Link, } from 'react-router-dom'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'
import { footer as imgs, } from '../../config/imgMap'

const css = require('../../styles/footer')

const socialiconList = [
  // {
  //   img: imgs.socialicon_01,
  //   href: 'social',
  // },
  // {
  //   img: imgs.socialicon_02,
  //   href: 'social',
  // },
  // {
  //   img: imgs.socialicon_03,
  //   href: 'social',
  // },
  // {
  //   img: imgs.socialicon_04,
  //   href: 'social',
  // },
  // {
  //   img: imgs.socialicon_05,
  //   href: 'social',
  // },
  // {
  //   img: imgs.socialicon_06,
  //   href: 'social',
  // },
  {
    img: imgs.github,
    href: 'social',
  },
]

const navHrefList = ['/', '/', '/', ]

export default class extends React.Component {
  // state = {
  //   loaded: false,
  // }
  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState(() => ({ loaded: true, }))
  //   }, 0)
  // }

  t = null as any
  lang = null as any

  Nav = () => {
    const { t, } = this
    const navList = t('navList', { returnObjects: true, })
    return (
      <div className={css.nav}>
        {navList.map((item, i) => {
          const href = navHrefList[i]
          return (
            <Link className={css.navItem} to={item.href}>
              {item.label}
            </Link>
          )
        })}
      </div>
    )
  }

  Left = () => {
    const { Nav, } = this
    return (
      <div className={css.left}>
        <div className={css.image}>
          <img src={imgs.logo} alt="" />
        </div>
        <Nav />
      </div>
    )
  }

  Subscribe = () => {
    const { t, } = this
    const enterMail = t('enterMail')
    const translations = t('translations:subscribe')
    return (
      <div className={css.subscribe}>
        <div className={css.buttonOuter}>
          <form
            className="sc-fBuWsC eeihxG"
            action="https://ezcook.us17.list-manage.com/subscribe/post?u=6b6750d23d175a99aa207330c&amp;id=405f6d7e8b"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <div className={css.buttonInner}>
              <input type="text" placeholder={enterMail} name="EMAIL" />
              <button className={css.label} type="submit">
                {translations}
              </button>
            </div>
          </form>
          <div className={css.diagonal} />
        </div>
      </div>
    )
  }

  SocialiconList = () => (
    <div className={css.socialiconList}>
      {socialiconList.map((item) => (
        <div className={css.socialiconContainer}>
          <a href={item.href}>
            <object className={css.object} data={item.img} type="image/svg+xml" aria-label="" />
            {/* <img className={css.object} src={item.img}  /> */}
          </a>
        </div>
      ))}
    </div>
  )

  Right = () => {
    const { SocialiconList, Subscribe, } = this
    return (
      <div className={css.right}>
        <Subscribe />
        <SocialiconList />
      </div>
    )
  }

  Top = () => {
    const { props, Left, Right, } = this
    return (
      <div className={css.top}>
        {Left()}
        {Right()}
      </div>
    )
  }

  Bottom = () => (
    <div className={css.bottom}>
      <div>@ 2018 Nervos All Rights Reserved</div>
    </div>
  )

  render () {
    const { props, Top, Bottom, } = this

    return createPortal(
      <I18n ns="footer">
        {(t, { i18n, }) => {
          this.t = t
          this.lang = i18n
          return (
            <div className={css.main}>
              <div className={css.container}>
                <Top />
                <Bottom />
              </div>
            </div>
          )
        }}
      </I18n>,
      document.getElementById('footer') as HTMLElement
    )
  }
}
