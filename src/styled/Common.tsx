import * as React from 'react'
import styled, {
  injectGlobal,
  StyledFunction,
  keyframes,
} from './styledComponents'
import theme from '../config/theme'

/* eslint-disable no-unused-expressions */
injectGlobal`
  html, body {
    background-color: ${theme.colors.background};
    *::selection{
      background-color: ${theme.colors.highlight};
    }
  }
`
/* eslint-enable no-unused-expressions */

// Header
export const Header = styled.div`
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
  cursor: pointer;
`
export const Navs = styled.ul`
  height: 100%;
  color: ${props => props.theme.colors.plain};
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

// Slogan

export const Slogan = styled.h1`
  color: ${props => props.theme.colors.plain};
  font-family: Futura;
  font-size: ${props => props.theme.sizes.slogan};
  font-weight: 900;
  margin: 0;
  margin-top: ${props => `-${props.theme.sizes.blockTitleHeight}`};
  margin-left: ${props => props.theme.sizes.dashLineWidth};
  padding-left: ${props => `${props.theme.sizes.descPaddingLeft}`};
`

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
  font-size: ${props => props.theme.sizes.inputFontSize};
  line-height: 1.6;
  background-color: transparent;
  background-image: ${props =>
    `linear-gradient(to top, ${props.theme.colors.plain}, ${
      props.theme.colors.plain
    }), linear-gradient(to top, ${props.theme.colors.primary}, ${
      props.theme.colors.primary
    })`};
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 2px;
  background-position: center bottom;
  transition: background 0.3s;
  border: none;
  color: ${props => props.theme.colors.plain};
  &:focus {
    background-size: 100% 2px, 100% 2px;
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

export const Desc = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.sizes.descFontSize};
  padding-left: ${props => props.theme.sizes.descPaddingLeft};
  padding-top: ${props => props.theme.sizes.descPaddingTop};
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
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
  margin-left: ${props => `-${props.theme.sizes.dashLineWidth}`};
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
`

export const SubscribeButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 120%;
`

export const HistoryCol = styled.div`
  position: relative;
  display: inline-block;
  width: 20%;
  border-right: ${props =>
    `${props.theme.sizes.dashLineWidth} dotted ${props.theme.colors.primary}`};
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
`

export const HistoryYearLabel = styled.span`
  position: absolute;
  bottom: 100%;
  right: ${props => `-${props.theme.sizes.dashLineWidth}`};
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
    background-color: ${props => props.theme.colors.highlight};
    top: 0.5rem;
    left: -5px;
    box-sizing: border-box;
    transform: translateY(-50%);
  }
`
export const MemberBlock = styled.div`
  position: relative;
  width: 50%;
  display: inline-block;
  padding-left: ${props => props.theme.sizes.memberBlockHeight};
  height: ${props => props.theme.sizes.memberBlockHeight};
  /* &:first-of-type {
    padding-right: ${props => props.theme.sizes.memberHPadding};
    padding-bottom: ${props => props.theme.sizes.memberVPadding};
  }
  &:nth-of-type(2) {
    padding-left: ${props => props.theme.sizes.memberHPadding};
    padding-bottom: ${props => props.theme.sizes.memberVPadding};
  }
  &:nth-of-type(3) {
    padding-top: ${props => props.theme.sizes.memberHPadding};
    padding-right: ${props => props.theme.sizes.memberHPadding};
  }
  &:last-of-type {
    padding-top: ${props => props.theme.sizes.memberHPadding};
    padding-left: ${props => props.theme.sizes.memberHPadding};
  } */
`
export const MemberBlockAvatar = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.theme.sizes.memberBlockHeight};
  height: ${props => props.theme.sizes.memberBlockHeight};
  border-radius: 50%;
`
export const MemberBlockName = styled.div`
  font-size: ${props => props.theme.sizes.memberNameFontSize};
  color: ${props => props.theme.colors.plain};
  position: absolute;
  top: 50%;
  margin-top: -1em;
  left: ${props => props.theme.sizes.memberBlockHeight};
  padding-left: ${props => props.theme.sizes.memberBlockDescPaddingLeft};
  font-weight: 100;
`
export const MemberBlockDesc = styled.div`
  position: absolute;
  bottom: 0;
  left: ${props => props.theme.sizes.memberBlockHeight};
  color: ${props => props.theme.colors.primary};
  padding-left: ${props => props.theme.sizes.memberBlockDescPaddingLeft};
  font-size: 20px;
`
export const ChartBlock = styled.div`
  display: inline-block;
  /* overflow: hidden; */
  width: 33%;
  padding: ${props =>
    `0 ${+props.theme.sizes.chartBlockHPadding.slice(0, -3) / 3}rem`};
  &:first-child {
    padding: ${props =>
    `0 ${2 * +props.theme.sizes.chartBlockHPadding.slice(0, -3) / 3}rem 0 0`};
  }
  &:last-child {
    padding: ${props =>
    `0 0 0 ${2 * +props.theme.sizes.chartBlockHPadding.slice(0, -3) / 3}rem`};
  }
`

interface IChartTitle {
  primary?: boolean
}

const ChartTitleCons: StyledFunction<
  IChartTitle & React.HTMLProps<HTMLElement>
  > =
  styled.h1
export const ChartTitle = ChartTitleCons`
  font-size: ${props => props.theme.sizes.ChartTitleFontSize};
  line-height: 1;
  display:block;
  height: 2em;
  color: ${props => props.theme.colors.plain};
  border-left-width: ${props => props.theme.sizes.titleColorBlockWidth};
  border-left-style: solid;
  border-left-color: ${props =>
    `${
      props.primary ? props.theme.colors.primary : props.theme.colors.highlight
    }`};
  margin: 0;
  margin-left: ${props => `-${props.theme.sizes.dashLineWidth}`};
  padding-left: ${props => `${props.theme.sizes.titleColorBlockRightSpan}`};
  text-transform: uppercase;
  font-weight: 900;
`
export const ChartDesc = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.sizes.descFontSize};
  padding-left: ${props => props.theme.sizes.descPaddingLeft};
  padding-top: ${props => props.theme.sizes.chartDescPaddingTop};
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  text-align: justify;
  text-align-last: left;
`

export const ChartIcon = styled.img`
  width: ${props => props.theme.sizes.chartIconSize};
  height: ${props => props.theme.sizes.chartIconSize};
  margin-bottom: ${props => props.theme.sizes.chartIconMarginBottom};
  margin-left: ${props => props.theme.sizes.dashLineWidth};
  padding-left: ${props => `${props.theme.sizes.descPaddingLeft}`};
`

export const SlideNavs = styled.div`
  position: fixed;
  top: ${props => props.theme.sizes.slideNavTopMargin};
  left: ${props => props.theme.sizes.slideNavLeftMargin};
`

interface ISlideNav {
  active?: boolean
}

const SlideNavCons: StyledFunction<
  ISlideNav & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const SlideNav = SlideNavCons`
  width: 10px;
  height: 10px;
  background-color: ${props =>
    `${
      props.active ? props.theme.colors.highlight : 'rgba(255, 255, 255, 0.8)'
    }`};
  border-radius: 50%;
  margin: 10px 0;
  cursor: ${props => (props.active ? 'default' : 'pointer')};

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
  80%{
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
  width: ${props => `${props.theme.sizes.rectWidth}px`};
  height: ${props => `${4 * props.theme.sizes.rectWidth}px`};
  opacity: ${props => (props.index ? 0 : 1)};
  background-color: ${props => props.theme.colors.highlight};
  transform: ${props => `rotate(${props.deg}deg) `};
  transform-origin: ${props =>
    `center ${100 + +props.theme.sizes.rectOffset}%`};
    animation:${props => (props.index ? `${fadeIn} 0.1s forwards` : 'none')};
    animation-delay: ${props => `${1 + (props.index || 0) * 0.1}s`}
`

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
  width: ${props => `${4 * props.theme.sizes.rectWidth * 2.82}px`};
  height: ${props =>
    `${4 *
      props.theme.sizes.rectWidth *
      (+props.theme.sizes.rectOffset + 100) /
      100 *
      Math.sqrt(3) +
      props.theme.sizes.rectWidth / 2}px`};
  transform-origin: center center;
  transform: ${props =>
    props.primary
      ? 'rotate(60deg)'
      : `translateX(${4 *
          props.theme.sizes.rectWidth *
          (2 * +props.theme.sizes.rectOffset + 100) /
          100}px) rotate(-120deg) `};
  &>div{
    top: ${props => `-${props.theme.sizes.rectWidth / 2}px`};
    left: ${props =>
    `${(4 *
        props.theme.sizes.rectWidth *
        (+props.theme.sizes.rectOffset + 100) /
        100 *
        Math.sqrt(3) +
        props.theme.sizes.rectWidth / 2) /
        2}px`};
  }
`

export const HomepageWidgets = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(48vw, -335px);
  & > div {
    transform: rotate(60deg);
    width: ${props =>
    `${4 *
        +props.theme.sizes.rectWidth *
        (3 + +props.theme.sizes.rectOffset / 100 * 4)}px`};
    height: ${props =>
    `${4 *
        +props.theme.sizes.rectWidth *
        (+props.theme.sizes.rectOffset + 100) /
        100 *
        Math.sqrt(3) +
        +props.theme.sizes.rectWidth / 2}px`};
  }
  @media (max-width: 1500px) {
    transform: translate(34.8vw, -362px);
    & > div {
      transform: rotate(60deg) scale(0.8);
    }
  }
  @media (max-width: 1200px) {
    transform: translate(22.1vw, -366px);
    & > div {
      transform: rotate(60deg) scale(0.7);
    }
  }
  @media (max-width: 1000px) {
    transform: translate(7.8vw, -390px);
    & > div {
      transform: rotate(60deg) scale(0.6);
    }
  }
`
