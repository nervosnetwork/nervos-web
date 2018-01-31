import * as React from 'react'
import styled, { injectGlobal, StyledFunction } from './styledComponents'
import theme from '../config/theme'

/* eslint-disable no-unused-expressions */
injectGlobal`
  html, body {
    background-color: ${theme.colors.background};
    font-size: ${theme.sizes.root};
    min-height: 100vh;
    overflow: auto;
  }
`
/* eslint-enable no-unused-expressions */

// Header
export const Header = styled.header`
  height: ${props => props.theme.sizes.headerHeight};
  line-height: ${props => props.theme.sizes.headerHeight};
  max-width: ${props => props.theme.sizes.centerBlockMaxWidth};
  width: ${props => props.theme.sizes.centerBlockWidth};
  margin: 0 auto;
`

export const Logo = styled.img`
  height: 100%;
  margin-left: ${props =>
    `${-props.theme.sizes.headerHeight.slice(0, -3) / 2}rem`};
  transform: ${props => `translateX(${props.theme.sizes.logoHOffset})`};
`
export const Navs = styled.ul`
  height: 100%;
  color: ${props => props.theme.colors.white};
  list-style: none;
  float: right;
  margin-right: ${props =>
    `${-props.theme.sizes.headerHeight.slice(0, -3) / 2}rem`};
  transform: ${props => `translateX(${props.theme.sizes.logoHOffset})`};
`
export const NavItem = styled.li`
  float: left;
  margin-left: ${props => props.theme.sizes.navSpan};
  font-size: ${props => props.theme.sizes.navItemHeight};
`
// Screen Div
export const ScreenDiv = styled.div`
  display: flex;
  /* max-width: ${props => props.theme.sizes.centerBlockMaxWidth};
  width: ${props => props.theme.sizes.centerBlockWidth}; */
  /* margin: 0 auto; */
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
`

// Center Block
export const CenterBlock = styled.div`
  display: flex;
  max-width: ${props => props.theme.sizes.centerBlockMaxWidth};
  width: ${props => props.theme.sizes.centerBlockWidth};
  margin: 0 auto;
`

// Center Block Title Container
export const CenterBlockTitles = styled.div`
  display: inline-block;
  width: 357px;
  font-size: ${props => props.theme.sizes.blockTitleHeight};
`

// Center Block Title
interface ICenterBlockTitle {
  onClick: React.MouseEventHandler<MouseEvent>
}
export const CenterBlockTitle = styled.h5`
  font-size: ${props => props.theme.sizes.blockTitleHeight};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: ${props => props.theme.sizes.centerBlockTitleVSpan};
  cursor: pointer;
`

// Center Block Title Index
export const CenterBlockIndex = styled.span`
  color: ${props => props.theme.colors.primary};
`

// Center Block Main Content

export const CenterBlockContent = styled.div`
  flex: 1;
`

// Slogan

export const Slogan = styled.h1`
  color: ${props => props.theme.colors.white};
  font-family: Futura;
  font-size: ${props => props.theme.sizes.slogan};
  font-weight: 100;
  margin: 0;
  /* margin-top: -1.125rem; */
  margin-top: ${props => `-${props.theme.sizes.blockTitleHeight}`};
`

// Colorized Title
/* eslint-disable no-use-before-define */
interface ColorizedH1 {
  primary?: boolean
}
const ColorizedH1WithCons: StyledFunction<
  ColorizedDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const ColorizedH1 = ColorizedH1WithCons`
  border-left: ${props => `${props.theme.sizes.dashLineWidth} dotted ${
    props.primary ? props.theme.colors.primary : props.theme.colors.highlight
  }
  `};
`
/* eslint-enable no-use-before-define */

// Colorized Block
/* eslint-disable no-use-before-define */
interface ColorizedDiv {
  primary?: boolean
}
const ColorizedDivWithCons: StyledFunction<
  ColorizedDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const ColorizedDiv = ColorizedDivWithCons`
  border-left: ${props => `${props.theme.sizes.dashLineWidth} dotted ${
    props.primary ? props.theme.colors.primary : props.theme.colors.highlight
  }
  `};
`
/* eslint-enable no-use-before-define */

export const RippleInput = styled.input`
  background-color: transparent;
  background-image: ${props => `linear-gradient(to top, ${props.theme.colors.white}, ${props.theme.colors.white}), linear-gradient(to top, ${props.theme.colors.primary}, ${props.theme.colors.primary})`};
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 2px;
  background-position: center bottom;
  transition: background 0.3s;
  border: none;
  color: ${props => props.theme.colors.white};
  &:focus{
    background-size: 100% 2px, 100% 2px;
  }
  &:placeholder {
    color: ${props => props.theme.colors.white};
  }
`

export const HighlightButton = styled.button`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.highlight};
  border: none;
  border-radius; 2px;
  padding: 10px 25px;
  font-size: ${props => props.theme.sizes.subscribeBtnFontSize};
`
