import * as React from 'react'
import styled, { injectGlobal, StyledFunction, keyframes } from './styleUtils'
import { dissolveIn } from './Animation'
import theme from '../config/theme'
/* eslint-disable global-require */
const sendIcon = require('../images/send') as string
/* eslint-enable global-require */

const rectRatio = 3.2
const logoRatio = 139 / 158

/* eslint-disable no-unused-expressions */
injectGlobal`
  html, body {
    background-color: ${theme.colors.background};
    font-size: ${`${theme.sizes.root}px`};
    @media (max-width: 1440px) {
      font-size: ${`${theme.sizes.root - 2}px`};
    }
    @media (max-width: 1280px) {
      font-size: 12px;
    }
    @media (max-width: 992px) {
      font-size: 10px;
    }
    @media (max-width: 768px) {
    }
    *::selection{
      background-color: ${theme.colors.selected};
    }
  }
  body{
    position: relative;
    padding-bottom: ${`${theme.sizes.footer.logo.height +
      theme.sizes.footer.paddingTop +
      theme.sizes.footer.paddingBottom +
      theme.sizes.footer.marginTop}rem`}
  }
  header {
    /* padding-top: ${`${theme.sizes.header.paddingTop}rem`}; */
    /* @media (max-width: 1280px) {
      padding-top: 1rem;
    } */
    padding-top: 10vh;
    @media (max-width: 768px) {
      padding-top: 0;
    }
  }
  footer {
    position: absolute;
    left:0;
    bottom: 0;
    width: 100%;
    margin-top: ${`${theme.sizes.footer.marginTop}rem`};
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
  @media (max-width: 1874px) {
    max-width: none;
    padding: 0 8%;
  }
  @media (max-width: 1440px) {
    max-width: none;
    padding: 0 8%;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
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
  margin-left: ${props => `${props.theme.sizes.header.navs.nav.marginLeft}rem`};
  font-size: ${props => `${props.theme.sizes.header.navs.nav.height}rem`};
  & a,
  & span {
    font-family: 'Mplus-1p Medium', 'SourceHanSans Medium', 'PingFang-SC Light',
      'Microsoft YaHei';
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    font-size: ${props => `${props.theme.sizes.header.navs.nav.fontSize}rem`};
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
      /* text-shadow: 0 0 3px currentColor; */
      &:after {
        transform: scaleX(1);
      }
    }
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
  color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.highlight};
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
    left: 0;
    background-color: currentColor;
  }
  &:after{
    content: '';
    display: block;
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    width: ${props => `${props.theme.sizes.dashLineWidth}rem`};
    background-image: ${props =>
    `linear-gradient(to bottom, currentColor, currentColor 85%, transparent 85%, transparent 100%)`};
    background-size: ${props => `${props.theme.sizes.dashLineWidth}rem 6px`};
  }
`
/* eslint-enable no-use-before-define */

export const RippleInput = styled.input`
  font-size: ${props => `${props.theme.sizes.input.fontSize}rem`};
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
  width: 100%;
  @media (max-width: 768px) {
    padding-right: 3.3rem;
  }
  &:focus {
    background-size: 100% 3px, 100% 3px;
  }
  &:placeholder {
    color: ${props => props.theme.colors.plain};
  }
`

export const SubscribeButton = styled.button`
  color: ${props => props.theme.colors.plain};
  background-color: ${props => props.theme.colors.highlight};
  font-size: ${props =>
    `${props.theme.sizes.subscribe.form.button.fontSize}rem`};
  text-transform: uppercase;
  width: ${props => `${props.theme.sizes.subscribe.form.button.width}rem`};
  height: ${props => `${props.theme.sizes.subscribe.form.button.height}rem`};
  line-height: ${props =>
    `${props.theme.sizes.subscribe.form.button.height}rem`};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  @media (max-width: 768px) {
    color: transparent;
    width: 100%;
    background: ${`url(${sendIcon}) no-repeat`};
    background-size: contain;
  }
`

interface ISubscribeFormLine {
  inline?: boolean
  first?: boolean
}

const SubscribeFormLineCons: StyledFunction<ISubscribeFormLine> = styled.div

export const SubscribeFormLine = SubscribeFormLineCons`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${props =>
    !props.inline && props.first
      ? 'auto'
      : `${props.theme.sizes.subscribe.form.lineHeight}rem`};
  width: ${props => `${props.theme.sizes.subscribe.form.lineWidth}rem`};
  @media (max-width: 768px) {
    width: 100%;
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
    `${`${props.theme.sizes.history.col.borderBottomWidth}rem`} solid ${
      props.theme.colors.primary
    }`};
  padding-top: ${props => `${props.theme.sizes.history.col.paddingTop}rem`};
  padding-left: ${props => `${props.theme.sizes.history.col.paddingLeft}rem`};
  &:after {
    box-sizing: border-box;
    z-index: 2;
    content: '';
    position: absolute;
    display: block;
    width: ${props => `${props.theme.sizes.history.borderCircle.diameter}rem`};
    height: ${props => `${props.theme.sizes.history.borderCircle.diameter}rem`};
    border: ${props =>
    `${`${props.theme.sizes.history.borderCircle.bandWidth}rem`} solid ${
      props.theme.colors.primary
    }`};
    border-radius: 50%;
    bottom: -2.5px;
    right: -1px;
    transform: translate(50%, 50%);
    background-color: ${props => props.theme.colors.background};
    box-shadow: ${props =>
    `0 0 0 ${`${props.theme.sizes.history.borderCircle.bandWidth}rem`} ${
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
  font-size: ${props => `${props.theme.sizes.history.yearLabel.fontSize}rem`};
  padding-bottom: ${props =>
    `${props.theme.sizes.history.yearLabel.paddingBottom}rem`};
  color: ${props => props.theme.colors.primary};
`

export const HistoryItem = styled.p`
  margin: ${props => `${props.theme.sizes.history.item.marginBottom}rem 0`};
  position: relative;
  padding: ${props => `0 ${`${props.theme.sizes.history.item.HPadding}rem`}`};
  text-align: justify;
  text-align-last: left;
  font-size: 1rem;
  color: ${props => props.theme.colors.plain};
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: ${props => `${props.theme.sizes.history.index.diameter}rem`};
    height: ${props => `${props.theme.sizes.history.index.diameter}rem`};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.assist};
    top: 0.5rem;
    left: -5px;
    box-sizing: border-box;
    transform: translateY(-50%);
  }
`

export const Members = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  /* width: 100%; */

  margin-right: ${props =>
    `-${props.theme.sizes.members.member.marginRight}rem`};
  & > div:nth-child(n + 4) {
    margin-top: ${props => `${props.theme.sizes.members.member.marginTop}rem`};
  }
  @media (max-width: 1560px) {
    & > div:nth-child(n + 3) {
      margin-top: ${props =>
    `${props.theme.sizes.members.member.marginTop}rem`};
    }
  }
  @media (max-width: 1000px) {
    & > div:nth-child(n + 2) {
      margin-top: ${props =>
    `${props.theme.sizes.members.member.marginTop}rem`};
    }
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`
export const Member = styled.div`
  display: inline-block;
  width: 33.3%;
  min-width: 300px;
  padding-right: ${props =>
    `${props.theme.sizes.members.member.marginRight}rem`};
  @media (max-width: 1560px) {
    width: 50%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    min-width: auto;
    padding-right: 0;
    text-align: center;
  }
`
export const MemberAvatar = styled.img`
  width: ${props => `${props.theme.sizes.members.container.height}rem`};
  height: ${props => `${props.theme.sizes.members.container.height}rem`};
  margin-bottom: ${props =>
    `${props.theme.sizes.members.member.avatar.marginBottom}rem`};
  border-radius: 50%;
`
export const MemberName = styled.div`
  font-size: ${props => `${props.theme.sizes.members.member.name.fontSize}rem`};
  font-family: 'Mplus-1p Medium', 'SourceHanSans Medium', 'PingFang-SC Light',
    'Microsoft YaHei';
  /* font-weight: 900; */
  color: ${props => props.theme.colors.plain};
  line-height: 2;
`
export const MemberDesc = styled.div`
  color: ${props => props.theme.colors.primary};
  /* font-weight: 100; */
  font-size: ${props => `${props.theme.sizes.members.member.desc.fontSize}rem`};
  text-align: justify;
  text-align-last: left;

  @media (max-width: 768px) {
    text-align: center;
    text-align-last: center;
  }
  @media (max-width: 414px) {
    text-align: justify;
    text-align-last: left;
  }
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
  height: ${props => `${rectRatio * props.theme.sizes.rect.width}px`};
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
  width: ${props =>
    `${rectRatio *
      props.theme.sizes.rect.width *
      2 *
      (1 + +props.theme.sizes.rect.offset / 100)}px`};
  height: ${props =>
    `${Math.sqrt(3) *
      rectRatio *
      props.theme.sizes.rect.width *
      (1 + +props.theme.sizes.rect.offset / 100) +
      props.theme.sizes.rect.width / 2}px`};
  transform-origin: center center;
  transform: ${props =>
    props.primary
      ? 'rotate(60deg)'
      : `translateX(${rectRatio *
          props.theme.sizes.rect.width *
          (2 * +props.theme.sizes.rect.offset + 100) /
          100}px) rotate(0deg) `};
  &>div{
    top: ${props => `-${props.theme.sizes.rect.width / (2 * Math.sqrt(2))}px`};
    left: ${props =>
    `${rectRatio *
        props.theme.sizes.rect.width *
        (1 + +props.theme.sizes.rect.offset / 100) -
        props.theme.sizes.rect.width / 2}px`};
  }
`

export const HomepageWidgets = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 100%;
  transform: ${props =>
    `translate(-${props.theme.sizes.header.navs.nav.marginLeft * 9 +
      0.5}rem, -264px) rotate(60deg)`};
  transform-origin: ${props =>
    `${100 *
      (100 + props.theme.sizes.rect.offset) /
      (300 + props.theme.sizes.rect.offset * 4)}% center`};
  width: ${props =>
    `${rectRatio *
      props.theme.sizes.rect.width *
      (3 + +props.theme.sizes.rect.offset / 100 * 4)}px`};
  height: ${props =>
    `${rectRatio *
      +props.theme.sizes.rect.width *
      (+props.theme.sizes.rect.offset + 100) /
      100 *
      Math.sqrt(3) +
      +props.theme.sizes.rect.width / 2}px`};
  @media (max-width: 1440px) {
    transform: ${props =>
    `translate(-${props.theme.sizes.header.navs.nav.marginLeft * 10.8 +
        0.5}rem, -274px) scale(0.9) rotate(60deg)`};
  }
  @media (max-width: 1280px) {
    transform: ${props =>
    `translate(-${props.theme.sizes.header.navs.nav.marginLeft * 11.8 +
        0.5}rem, -289px) scale(0.6) rotate(60deg)`};
  }
  @media (max-width: 992px) {
    transform: ${props =>
    `translate(-${props.theme.sizes.header.navs.nav.marginLeft * 9 +
        0.5}rem, -291px) scale(0.5) rotate(60deg)`};
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
  padding-top: ${props => `${props.theme.sizes.footer.paddingTop}rem`};
  padding-bottom: ${props => `${props.theme.sizes.footer.paddingBottom}rem`};
  max-width: ${props => `${props.theme.sizes.screen.blockMaxWidth}rem`};
  width: ${props => props.theme.sizes.screen.blockWidthPercent};
  margin: 0 auto;
  @media (max-width: 1874px) {
    max-width: none;
    padding-left: 8%;
    padding-right: 8%;
  }
`

export const FooterLogo = styled.img`
  height: ${props => `${props.theme.sizes.footer.logo.height}rem`};
  @media (max-width: 768px) {
    display: none;
  }
`
export const FooterNavs = styled.div`
  padding: ${props => `${props.theme.sizes.footer.logo.height / 4}rem 0`};
  padding-left: ${props =>
    `${props.theme.sizes.screen.desc.paddingLeft -
    props.theme.sizes.footer.logo.height * logoRatio
    }rem`};
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    padding: 15px;
  }
`

export const FooterNav = styled.div`
  font-size: ${props => `${props.theme.sizes.footer.navs.nav.fontSize}rem`};
  flex: 1;
  /* text-align: right; */
  text-align: left;
  & a,
  & span {
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
  @media (max-width: 768px) {
    text-align: center;
    & a,
    & span {
      &:before {
        display: none;
      }
    }
  }
`
