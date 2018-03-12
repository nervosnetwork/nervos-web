import * as React from 'react'
import styled, { injectGlobal, StyledFunction, keyframes, } from './styleUtils'
import theme from '../config/theme'

/* eslint-disable no-unused-expressions */
injectGlobal`
  html, body {
    background-color: ${theme.colors.background};
    font-size: ${`${theme.sizes.root}px`};
    *::selection{
      background-color: ${theme.colors.selected};
    }
  }
  body{
    position: relative;
  }
  header {
  }
  footer {
  }
`

/* eslint-enable no-unused-expressions */

// Header
export const Header = styled.div`
  position: relative;
  height: ${(props) => `${props.theme.sizes.header.height}rem`};
  line-height: ${(props) => `${props.theme.sizes.header.height}rem`};
  max-width: ${(props) => `${props.theme.sizes.screen.blockMaxWidth}rem`};
  width: ${(props) => props.theme.sizes.screen.blockWidthPercent};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 100%;
  cursor: pointer;
  z-index: 1;
`
export const Navs = styled.ul`
  height: 100%;
  color: ${(props) => props.theme.colors.plain};
  list-style: none;
  float: right;
  z-index: 1;
`
export const NavItem = styled.li`
  float: left;
  margin-left: ${(props) =>
    `${props.theme.sizes.header.navs.nav.marginLeft}rem`};
  font-size: ${(props) => `${props.theme.sizes.header.navs.nav.height}rem`};
  & a,
  & span {
    font-family: 'Mplus-1p Medium', 'SourceHanSans Medium', 'PingFang-SC Light',
      'Microsoft YaHei';
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    font-size: ${(props) => `${props.theme.sizes.header.navs.nav.fontSize}rem`};
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 120%;
      left: -10%;
      width: 120%;
      height: 3px;
      background: currentColor;
      transform-origin: center center;
      transform: scaleX(0);
      transition: transform 0.3s ease-out;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }
`
