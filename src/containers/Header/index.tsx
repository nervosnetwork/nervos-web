import * as React from 'react'
import { Header, Logo, Navs, NavItem } from '../../styled/Common'

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

export default () => (
  <Header>
    <Logo src={LogoImg} alt="NervOS" />
    <Navs>
      {navs.map(item => (
        <NavItem key={item.path}>
          <a href={item.path}>{item.label}</a>
        </NavItem>
      ))}
    </Navs>
  </Header>
)
