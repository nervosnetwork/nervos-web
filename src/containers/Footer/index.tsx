import * as React from 'react'
import { createPortal } from 'react-dom'
import {
  Footer,
  FooterLogo as Logo,
  FooterNavs as Navs,
  FooterNav as Nav,
} from '../../styled/Common'
import { I18n } from 'react-i18next'
/* eslint-disable global-require */
const LogoImg = require('../../images/logoIcon.svg') as string
/* eslint-enable global-require */
const navs = [
  {
    label: 'whitepaper',
    path: '/white-paper',
  },
  {
    label: 'FAQ',
    path: '/faq',
  },
  {
    label: 'EN',
    path: 'en',
  },
  {
    label: 'CN',
    path: 'zh',
  },
]

/* eslint-disable no-restricted-globals */
interface IFooterProps {
  // history: History
  history: any
  location: Location
}
interface IFooterState {
  loaded: boolean
}
/* eslint-enable no-restricted-globals */

export default class extends React.Component<IFooterProps, IFooterState> {
  state = {
    loaded: false,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({ loaded: true }))
    }, 0)
  }
  render() {
    const { props } = this
    const { loaded } = this.state
    return createPortal(
      <I18n>
        {(t, { i18n }) => (
          <Footer>
            <Logo
              src={LogoImg}
              alt="NervOS"
              onClick={() =>
                props.location.pathname !== '/' && props.history.push('/')
              }
            />
            <Navs>
              {navs.map((item, index) => (
                <Nav key={item.path}>
                  {item.path.startsWith('/') ? (
                    <a href={item.path}>{t(item.label)}</a>
                  ) : (
                    <span onClick={() => i18n.changeLanguage(item.path)}>
                      {t(item.label)}
                    </span>
                  )}
                </Nav>
              ))}
            </Navs>
          </Footer>
        )}
      </I18n>,
      document.getElementById('footer') as HTMLElement,
    )
  }
}
