import * as React from 'react'
import { createPortal } from 'react-dom'
import { Header, Logo, Navs, NavItem } from '../../styled/Common'
import { SlideIn } from '../../styled/Animation'

/* eslint-disable global-require */
const LogoImg = require('../../images/nerveos.svg') as string
/* eslint-enable global-require */

const navs = [
  {
    label: 'WHITE PAPER',
    path: 'white-paper',
  },
  {
    label: 'FAQ',
    path: 'faq',
  },
  {
    label: 'EN',
    path: 'en',
  },
  {
    label: 'CN',
    path: 'cn',
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
              <SlideIn.horizontal slideIn={loaded} index={index}>
                <a href={item.path}>{item.label}</a>
              </SlideIn.horizontal>
            </NavItem>
          ))}
        </Navs>
      </Header>,
      document.getElementById('header') as HTMLElement,
    )
  }
}
