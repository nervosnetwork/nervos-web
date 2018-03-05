import * as React from 'react'
import { createPortal } from 'react-dom'
import { I18n } from 'react-i18next'
import { Header, Logo, Navs, NavItem } from '../../styled/Common'

/* eslint-disable global-require */
const LogoImg = require('../../images/nerveos.svg') as string
/* eslint-enable global-require */

const navs = [
  {
    label: 'whitepaper',
    path: '/white-paper',
  },
]

/* eslint-disable no-restricted-globals */
interface HeaderProps {
  // history: History
  history: any
  location: Location
}
interface HeaderState {
  loaded: boolean
}
/* eslint-enable no-restricted-globals */

export default class extends React.Component<HeaderProps, HeaderState> {
  state = {
    loaded: false,
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState(() => ({ loaded: true }))
    }, 0)
  }
  render () {
    const { props } = this
    const { loaded } = this.state
    return createPortal(
      <I18n>
        {(t, { i18n }) => (
          <Header>
            <Logo
              src={LogoImg}
              alt="NervOS"
              onClick={() =>
                props.location.pathname !== '/' && props.history.push('/')
              }
            />
            <Navs>
              {navs.map((item, index) => (
                <NavItem key={item.path}>
                  {item.path.startsWith('/') ? (
                    <a href={item.path}>{t(item.label)}</a>
                  ) : (
                    <span onClick={() => i18n.changeLanguage(item.path)}>
                      {t(item.label)}
                    </span>
                  )}
                </NavItem>
              ))}
            </Navs>
          </Header>
        )}
      </I18n>,
      document.getElementById('header') as HTMLElement,
    )
  }
}
