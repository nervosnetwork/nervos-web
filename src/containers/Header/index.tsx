import * as React from 'react'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'

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
      this.setState(() => ({ loaded: true, }))
    }, 0)
  }

  render () {
    const { props, } = this
    const { loaded, } = this.state
    return createPortal(
      (
        <Header>
          <Logo
            src={LogoImg}
            alt="Nervos"
            onClick={() =>
              props.location.pathname !== '/' && props.history.push('/')
            }
          />
          <Navs />
        </Header>
      ),
      document.getElementById('header') as HTMLElement,
    )
  }
}
