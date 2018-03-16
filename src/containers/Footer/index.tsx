import * as React from 'react'
import { Link, } from 'react-router-dom'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
// import { Header,, Navs, NavItem, } from '../../styled/Common'
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
    imgHover: imgs.githubHover,
    href: 'https://github.com/NervosFoundation',
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
      <div className={`${css.nav} ${css.left}`}>
        {navList.map((item, i) => {
          const href = navHrefList[i]
          return (
            <a className={css.navItem} href={item.href}>
              {item.label}
            </a>
          )
        })}
      </div>
    )
  }

  // Left = () => {
  //   const { Nav, } = this
  //   return (
  //     <div className={css.left}>
  //       <Nav />
  //     </div>
  //   )
  // }

  Logo = () => {
    const href = 'https://github.com/NervosFoundation'
    return (
      <div className={`${css.logo} ${css.left}`}>
        <a href={href}>
          <img className={css.img} src={imgs.logo} alt="" />
        </a>
        <div className={css.label}>
          <a className={css.link} href={href}>
            Nervos Foundation
          </a>
        </div>
      </div>
    )
  }

  Subscribe = () => {
    const { t, } = this
    const enterMail = t('enterMail')
    const translations = t('translations:subscribe')
    return (
      <div className={`${css.subscribe} ${css.right}`}>
        <div className={css.buttonOuter}>
          <form
            className="sc-fBuWsC eeihxG"
            action="https://nervos.us12.list-manage.com/subscribe/post?u=4c8614ca1116cd07ea946454e&amp;id=bb84a46985"
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
    <div className={`${css.socialiconList} ${css.right}`}>
      {socialiconList.map((item) => (
        <div className={css.socialiconContainer}>
          <a className={css.link} href={item.href}>
            <img className={css.img} src={item.img} alt='' />
            <img className={css.imgHover} src={item.imgHover} alt='' />
          </a>
        </div>
      ))}
    </div>
  )

  // Right = () => {
  //   const { SocialiconList, Subscribe, } = this
  //   return (
  //     <div className={css.right}>
  //       <Subscribe />
  //       <SocialiconList />
  //     </div>
  //   )
  // }

  Top = () => {
    const { Logo, Nav, Subscribe, SocialiconList, } = this
    return (
      <div className={css.top}>
        <Logo />
        <Subscribe />
        <Nav />
        <SocialiconList />
      </div>
    )
  }

  Bottom = () => (
    <div className={css.bottom}>
      <div>
        @ 2018 Nervos is a project of Nervos Foundation. All Rights Reserved
      </div>
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
