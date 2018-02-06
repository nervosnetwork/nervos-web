import * as React from 'react'
import styled, { injectGlobal, StyledFunction, keyframes } from './styleUtils'
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
  header {
    padding-top: ${`${theme.sizes.header.paddingTop}rem`}
  }
`

/* eslint-enable no-unused-expressions */

// Header
export const Header = styled.div`
  height: ${props => `${props.theme.sizes.header.height}rem`};
  line-height: ${props => `${props.theme.sizes.header.height}rem`};
  max-width: ${props => `${props.theme.sizes.screen.blockMaxWidth}rem`};
  width: ${props => props.theme.sizes.screen.blockWidthPercent};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    max-width: auto;
    width: 100vw;
  }
`

export const Logo = styled.img`
  height: 100%;
  cursor: pointer;
  @media (max-width: 600px) {
    margin-left: 50%;
    transform: translateX(-50%);
  }
`
export const Navs = styled.ul`
  height: 100%;
  color: ${props => props.theme.colors.plain};
  list-style: none;
  float: right;
  @media (max-width: 600px) {
    width: 100vw;
    line-height: 1.4;
  }
`
export const NavItem = styled.li`
  float: left;
  margin-left: ${props => props.theme.sizes.navSpan};
  font-size: ${props => props.theme.sizes.navItemHeight};
  & > a,
  & > span {
    cursor: pointer;
  }
  @media (max-width: 750px) {
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
  margin-left: ${props => `${props.theme.sizes.dashLineWidth}rem`};
  padding-left: ${props => `${props.theme.sizes.screen.desc.paddingLeft}`};
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
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(1fr, 2); */
  grid-gap: 4vh 5%;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const MemberBlock = styled.div`
  /* width: 50%; */
  height: ${props => props.theme.sizes.memberBlockHeight};
  display: flex;
  flex-wrap: wrap;
`
export const MemberAvatar = styled.img`
  width: ${props => props.theme.sizes.memberBlockHeight};
  height: ${props => props.theme.sizes.memberBlockHeight};
  border-radius: 50%;
`
export const MemberInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 3.6rem;
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
// margin-bottom: ${props => `${props.theme.sizes.chart.icon.marginBottom}rem`};
// margin-left: ${props => `${props.theme.sizes.dashLineWidth}rem`};
// padding-left: ${props =>
//   `${props.theme.sizes.chart.title.paddingLeft +
//     props.theme.sizes.colorizedBlock.color.width}rem`};

export const SlideNavs = styled.div`
  position: fixed;
  top: 50vh;
  transform: translateY(-50%);
  left: ${props => `${props.theme.sizes.slideNav.left}rem`};
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
  z-index: -1;
  top: 0;
  left: 0;
  transform: translate(39vw, -210px) rotate(60deg);
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
`
