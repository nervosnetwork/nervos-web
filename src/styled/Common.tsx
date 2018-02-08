import * as React from 'react'
import styled, { injectGlobal, StyledFunction, keyframes } from './styleUtils'
import { dissolveIn } from './Animation'
import theme from '../config/theme'

/* eslint-disable no-unused-expressions */
injectGlobal`
  html, body {
    background-color: ${theme.colors.background};
    font-size: ${theme.sizes.root};
    @media (max-width: 1500px) {
      font-size: 14px;
    }
    @media (max-width: 1200px) {
      font-size: 12px;
    }
    @media (max-width: 992px) {
      font-size: 10px;
    }
    @media (max-width: 768px) {
    }
    *::selection{
      background-color: ${theme.colors.highlight};
    }
  }
  body{
    padding-bottom: ${theme.sizes.footer.logo.height +
      theme.sizes.footer.paddingTop +
      theme.sizes.footer.paddingBottom} + 'rem'
  }
  header {
    padding-top: ${`${theme.sizes.header.paddingTop}rem`};
    @media (max-width: 1280px) {
      padding-top: 1rem;
    }
    @media (max-width: 768px) {
      padding-top: 0;
    }
  }
  footer {
    position: absolute;
    left:0;
    bottom: 0;
    width: 100%;
    margin-top: ${theme.sizes.footer.marginTop + 'rem'};
    background-color: ${theme.colors.darkBackgroud};
  }
`

/* eslint-enable no-unused-expressions */

// Header
export const Header = styled.div`
  position: relative;
  height: ${props => `${props.theme.sizes.header.height}rem`};
  line-height: ${props => `${props.theme.sizes.header.height}rem`};
  max-width: ${props => `${props.theme.sizes.screen.blockMaxWidth}rem`};
  width: ${props => props.theme.sizes.screen.blockWidthPercent};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: auto;
    width: 100vw;
  }
`

export const Logo = styled.img`
  height: 100%;
  cursor: pointer;
  z-index: 1;
  @media (max-width: 768px) {
    height: 50%;
    transform: scale(0.8);
  }
`
export const Navs = styled.ul`
  height: 100%;
  color: ${props => props.theme.colors.plain};
  list-style: none;
  float: right;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100vw;
    line-height: 1.4;
    flex: 1;
    display: flex;
    justify-content: space-around;
  }
`
export const NavItem = styled.li`
  float: left;
  margin-left: ${props => props.theme.sizes.navSpan + 'rem'};
  font-size: ${props => props.theme.sizes.navItemHeight};
  & a,
  & span {
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    margin-left: 1.125rem;
  }
  @media (max-width: 600px) {
    margin: 0;
    width: 25vw;
    text-align: center;
  }
`
// Screen Div
export const ScreenDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
`

// Center Block
export const CenterBlock = styled.div`
  position: relative;
  display: flex;
  max-width: ${props => props.theme.sizes.centerBlockMaxWidth};
  width: ${props => props.theme.sizes.centerBlockWidth};
  margin: 0 auto;
  margin-top: ${props => props.theme.sizes.pageBlockMarginTop};
`

// Center Block Title Container
export const CenterBlockTitles = styled.div`
  display: inline-block;
  width: ${props => props.theme.sizes.centerBlockTitleWidth};
  font-size: ${props => props.theme.sizes.blockTitleHeight};
`

// Center Block Title
interface ICenterBlockTitle {
  onClick: React.MouseEventHandler<MouseEvent>
}
export const CenterBlockTitle = styled.h5`
  font-size: ${props => props.theme.sizes.blockTitleHeight};
  color: ${props => props.theme.colors.plain};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: ${props => props.theme.sizes.centerBlockTitleVSpan};
  cursor: pointer;
  font-weight: 100;
`

// Center Block Title Index
export const CenterBlockIndex = styled.span`
  font-weight: inherit;
  color: ${props => props.theme.colors.primary};
`

// Center Block Main Content

export const CenterBlockContent = styled.div`
  flex: 1;
`

// Colorized Block
/* eslint-disable no-use-before-define */
interface ColorizedDiv {
  primary?: boolean
  chart?: boolean
  colorBlock?: boolean
  colorBlockHeight?: number
}
const ColorizedDivWithCons: StyledFunction<
  ColorizedDiv & React.HTMLProps<HTMLDivElement>
> =
  styled.div

export const ColorizedDiv = ColorizedDivWithCons`
  position: relative;
  border-left: ${props =>
    `${props.theme.sizes.dashLineWidth}rem dotted ${
      props.primary ? props.theme.colors.primary : props.theme.colors.highlight
    }`};
  padding-left: ${props =>
    props.chart
      ? `${props.theme.sizes.chart.title.paddingLeft +
          props.theme.sizes.colorizedBlock.color.width}rem`
      : `${props.theme.sizes.colorizedBlock.paddingLeft}rem`};
  &:before{
    display:block;
    content: '';
    width: ${props => `${props.theme.sizes.colorizedBlock.color.width}rem`};
    height: ${props =>
      `${props.theme.sizes.colorizedBlock.color.height *
        (props.colorBlockHeight || 1)}rem`};
    position: absolute;
    top: 0;
    left: ${props => `-${props.theme.sizes.dashLineWidth}rem`};
    background-color: ${props =>
      props.primary
        ? props.theme.colors.primary
        : props.theme.colors.highlight};
  }
`
/* eslint-enable no-use-before-define */

export const RippleInput = styled.input`
  font-size: ${props => props.theme.sizes.inputFontSize};
  line-height: 1.6;
  background-color: transparent;
  background-image: ${props =>
    `linear-gradient(to top, ${props.theme.colors.primary}, ${
      props.theme.colors.primary
    }), linear-gradient(to top, ${props.theme.colors.plain}, ${
      props.theme.colors.plain
    })`};
  background-repeat: no-repeat;
  background-size: 0 3px, 100% 3px;
  background-position: center bottom;
  transition: background 0.3s;
  border: none;
  color: ${props => props.theme.colors.plain};
  &:focus {
    background-size: 100% 3px, 100% 3px;
  }
  &:placeholder {
    color: ${props => props.theme.colors.plain};
  }
`

export const HighlightButton = styled.button`
  color: ${props => props.theme.colors.plain};
  background-color: ${props => props.theme.colors.highlight};
  border: none;
  border-radius; 2px;
  font-size: ${props => props.theme.sizes.subscribeBtnFontSize};
  width: ${props => props.theme.sizes.highlightBtnWidth};
  height: ${props => props.theme.sizes.highlightBtnHeight};
  line-height: ${props => props.theme.sizes.highlightBtnHeight};
  cursor: pointer;
`

interface IColorizedTitle {
  primary?: boolean
  h1?: boolean
}

const ColorizedTitleCons: StyledFunction<
  IColorizedTitle & React.HTMLProps<HTMLElement>
> =
  styled.h1

export const ColorizedTitle = ColorizedTitleCons`
  line-height: 0.8;
  font-size: ${props =>
    `${
      props.h1
        ? props.theme.sizes.primaryTitleFontSize
        : props.theme.sizes.secondaryTitleFontSize
    }`};
  color: ${props => props.theme.colors.plain};
  
  border-left-width: ${props => props.theme.sizes.titleColorBlockWidth};
  border-left-style: solid;
  border-left-color: ${props =>
    `${
      props.primary ? props.theme.colors.primary : props.theme.colors.highlight
    }`};
  margin: 0;
  margin-left: ${props => `-${`${props.theme.sizes.dashLineWidth}rem`}`};
  padding-left: ${props => `${props.theme.sizes.titleColorBlockRightSpan}`};
  font-weight: 900;
`
export const SubscribeFormLine = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${props => props.theme.sizes.subscribeFormLineHeight};
  width: ${props => props.theme.sizes.subscribeFormLineWidth};
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const SubscribeButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 120%;
  @media (max-width: 600px) {
    position: relative;
    left: 0;
    bottom: 0;
  }
`

export const HistoryCol = styled.div`
  position: relative;
  display: inline-block;
  width: 20%;
  border-right: ${props =>
    `${`${props.theme.sizes.dashLineWidth}rem`} dotted ${
      props.theme.colors.primary
    }`};
  border-bottom: ${props =>
    `${props.theme.sizes.historyColBorderBottomWidth} solid ${
      props.theme.colors.primary
    }`};
  padding-top: ${props => props.theme.sizes.HistoryColPaddingTop};
  padding-left: ${props => props.theme.sizes.HistoryColPaddingLeft};
  &:after {
    box-sizing: border-box;
    z-index: 2;
    content: '';
    position: absolute;
    display: block;
    width: ${props => props.theme.sizes.historyCircleDiameter};
    height: ${props => props.theme.sizes.historyCircleDiameter};
    border: ${props =>
      `${props.theme.sizes.historyCircleBandWidth} solid ${
        props.theme.colors.primary
      }`};
    border-radius: 50%;
    bottom: -2.5px;
    right: -1px;
    transform: translate(50%, 50%);
    background-color: ${props => props.theme.colors.background};
    box-shadow: ${props =>
      `0 0 0 ${props.theme.sizes.historyCircleBandWidth} ${
        props.theme.colors.background
      }`};
  }
  @media (max-width: 750px) {
    display: block;
    margin-bottom: 100px;
    width: 100%;
  }
`

export const HistoryYearLabel = styled.span`
  position: absolute;
  bottom: 100%;
  right: ${props => `-${`${props.theme.sizes.dashLineWidth}rem`}`};
  padding-bottom: ${props => props.theme.sizes.HistoryYearLabelPaddingBottom};
  color: ${props => props.theme.colors.plain};
`

export const HistoryItem = styled.p`
  margin: 1rem 0;
  position: relative;
  padding: ${props => `0 ${props.theme.sizes.HistoryItemHPadding}`};
  text-align: justify;
  text-align-last: left;
  font-size: 1rem;
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: ${props => props.theme.sizes.historyItemIconDiameter};
    height: ${props => props.theme.sizes.historyItemIconDiameter};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.assist};
    top: 0.5rem;
    left: -5px;
    box-sizing: border-box;
    transform: translateY(-50%);
  }
`

export const Members = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4vh 5%;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const MemberBlock = styled.div`
  // height: ${props => props.theme.sizes.memberBlockHeight};
  display: flex;
  text-align: center;
  flex-direction: column;
  @media (max-width: 992px) {
    flex-direction: row;
  }
  @media (max-width: 750px) {
    flex-direction: column;
  }
  @media (max-width: 750px) {
    height: auto;
    text-align: center;
  }
`
export const MemberAvatar = styled.img`
  width: ${props => props.theme.sizes.memberBlockHeight};
  height: ${props => props.theme.sizes.memberBlockHeight};
  border-radius: 50%;
  @media (max-width: 750px) {
    float: left;
  }
`
export const MemberInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: justify;
  text-align-last: left;
  padding-top: 15px;
  @media (max-width: 992px) {
    padding-left: 3.5rem;
  }
  @media (max-width: 750px) {
    padding-left: 0;
    padding-bottom: 20px;
  }
`
export const MemberName = styled.div`
  flex: 1;
  font-size: ${props => props.theme.sizes.memberNameFontSize};
  font-weight: 100;
  color: ${props => props.theme.colors.plain};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const MemberDesc = styled.div`
  flex: 1;
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const ChartIcon = styled.img`
  width: ${props => `${props.theme.sizes.chart.icon.size}rem`};
  height: ${props => `${props.theme.sizes.chart.icon.size}rem`};
`

export const SlideNavs = styled.div`
  position: fixed;
  top: 50vh;
  transform: translateY(-50%);
  left: ${props => `${props.theme.sizes.slideNav.left}rem`};
  @media (max-width: 768px) {
    left: 15px;
  }
`

interface ISlideNav {
  active?: boolean
}

const SlideNavCons: StyledFunction<
  ISlideNav & React.HTMLProps<HTMLDivElement>
> =
  styled.div

export const SlideNav = SlideNavCons`
  position:relative;
  width: 10px;
  height: 10px;
  background-color: ${props =>
    `${
      props.active ? props.theme.colors.highlight : 'rgba(255, 255, 255, 0.8)'
    }`};
  border-radius: 50%;
  margin: 10px 0;
  cursor: ${props => (props.active ? 'default' : 'pointer')};
  &:after {
    position: absolute;
    display: block;
    content: attr(title);
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    color: #fff;
    padding: 3px 5px;
    white-space: pre;
    opacity: 0;
    transition: opacity 0.4s;
    cursor: ${props => (props.active ? 'default' : 'pointer')};
  }
  &:hover:after{
    opacity: 1
  }
`

interface IRect {
  deg: number
  index?: number
}
const RectCons: StyledFunction<IRect & React.HTMLProps<HTMLDivElement>> =
  styled.div

const fadeIn = keyframes`{
  from {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
`
export const Rect = RectCons`
  position: absolute;
  top:0;
  left:0;
  display: block;
  width: ${props => `${props.theme.sizes.rect.width}px`};
  height: ${props => `${4 * props.theme.sizes.rect.width}px`};
  opacity: 0;
  background-color: ${props => props.theme.colors.highlight};
  transform: ${props => `rotate(${props.deg}deg) `};
  transform-origin: ${props =>
    `center ${100 + +props.theme.sizes.rect.offset}%`};
    animation:${props => `${fadeIn} 0.5s forwards`};
    animation-delay: ${props => `${1 + (props.index || 0) * 0.1}s`}
`
// opacity: ${props => (props.index ? 0 : 1)};
//   animation:${props => (props.index ? `${fadeIn} 0.5s forwards` : 'none')};

interface IWidget {
  transform?: string
  children: React.ReactChild
}

const WidgetsCons: StyledFunction<IWidget> = styled.div

interface IHomepageWidget {
  primary?: boolean
  children: React.ReactChild
}
const HomepageWidgetCons: StyledFunction<IHomepageWidget> = styled.div
export const HomepageWidget = HomepageWidgetCons`
  position: absolute;
  width: ${props => `${4 * props.theme.sizes.rect.width * 2.82}px`};
  height: ${props =>
    `${4 *
      props.theme.sizes.rect.width *
      (+props.theme.sizes.rect.offset + 100) /
      100 *
      Math.sqrt(3) +
      props.theme.sizes.rect.width / 2}px`};
  transform-origin: center center;
  transform: ${props =>
    props.primary
      ? 'rotate(60deg)'
      : `translateX(${4 *
          props.theme.sizes.rect.width *
          (2 * +props.theme.sizes.rect.offset + 100) /
          100}px) rotate(-120deg) `};
  &>div{
    top: ${props => `-${props.theme.sizes.rect.width / 2}px`};
    left: ${props =>
      `${(4 *
        props.theme.sizes.rect.width *
        (+props.theme.sizes.rect.offset + 100) /
        100 *
        Math.sqrt(3) +
        props.theme.sizes.rect.width / 2) /
        2}px`};
  }
`

export const HomepageWidgets = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 100%;
  transform: ${props =>
    `translate(-${props.theme.sizes.navSpan * 11 +
      0.5}rem, -310px) rotate(60deg)`};
  transform-origin: ${props =>
    `${100 *
      (100 + props.theme.sizes.rect.offset) /
      (300 + props.theme.sizes.rect.offset * 4)}% center`};
  width: ${props =>
    `${4 *
      props.theme.sizes.rect.width *
      (3 + +props.theme.sizes.rect.offset / 100 * 4)}px`};
  height: ${props =>
    `${4 *
      +props.theme.sizes.rect.width *
      (+props.theme.sizes.rect.offset + 100) /
      100 *
      Math.sqrt(3) +
      +props.theme.sizes.rect.width / 2}px`};
  @media (max-width: 1440px) {
    transform: ${props =>
      `translate(-${props.theme.sizes.navSpan * 11 +
        0.5}rem, -320px) scale(0.9) rotate(60deg)`};
  }
  @media (max-width: 1024px) {
    transform: ${props =>
      `translate(-${props.theme.sizes.navSpan * 11 +
        0.5}rem, -320px) scale(0.6) rotate(60deg)`};
  }
  @media (max-width: 750px) {
    display: none;
  }
`
// Footer
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-top: ${props => props.theme.sizes.footer.paddingTop + 'rem'};
  padding-bottom: ${props => props.theme.sizes.footer.paddingBottom + 'rem'};
  max-width: ${props => `${props.theme.sizes.screen.blockMaxWidth}rem`};
  width: ${props => props.theme.sizes.screen.blockWidthPercent};
  margin: 0 auto;
`

export const FooterLogo = styled.img`
  height: ${props => props.theme.sizes.footer.logo.height + 'rem'};
`
export const FooterNavs = styled.div`
  padding: ${props => `${props.theme.sizes.footer.logo.height / 4}rem 0`};
  display: flex;
  width: 80%;
`

export const FooterNav = styled.div`
  font-size: ${props => props.theme.sizes.footer.nav.fontSize + 'rem'};
  flex: 1;
  text-align: right;
  & > a,
  & > span {
    position: relative;
    color: ${props => props.theme.colors.plain};
    cursor: pointer;
    &:before {
      position: absolute;
      top: 50%;
      right: 120%;
      transform: translateY(-50%);
      content: '';
      display: block;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.highlight};
    }
  }
`
