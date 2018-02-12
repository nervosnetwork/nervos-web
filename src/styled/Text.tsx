import * as React from 'react'
import styled, { injectGlobal, StyledFunction, keyframes } from './styleUtils'
import theme from '../config/theme'

export const Slogan = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-family: Futura;
  font-size: ${props => `${props.theme.sizes.slogan.fontSize}rem`};
  font-weight: 900;
  margin: 0;
  line-height: ${props => props.theme.sizes.slogan.lineHeight};
  padding-bottom: ${props => `${props.theme.sizes.slogan.paddingBottom}rem`};
  mix-blend-mode: color-dodge;
  @media (max-width: 1280px) {
    font-size: ${props => `${+props.theme.sizes.slogan.fontSize * 3 / 4}rem`};
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const HomepageDesc = styled.div`
  font-size: ${props => `${props.theme.sizes.homepageDesc.fontSize}rem`};
  color: ${props => props.theme.colors.plain};
  line-height: ${props => props.theme.sizes.homepageDesc.lineHeight};
  padding-bottom: ${props =>
    `${props.theme.sizes.homepageDesc.paddingBottom}rem`};
  text-align: justify;
  text-align-last: left;
  font-weight: 100;
`

export const Desc = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => `${props.theme.sizes.screen.desc.fontSize}rem`};
  padding-left: ${props => `${props.theme.sizes.screen.desc.paddingLeft}rem`};
  padding-top: ${props => `${props.theme.sizes.screen.desc.paddingTop}rem`};
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`

const titleColorExpand = keyframes`
  from {
    transform: scale3d(0,1,1);
  }
  to {
    transform: scale3d(1,1,1);
  }
`

export const ScreenTitle = styled.h1`
  display: inline-block;
  position: relative;
  font-size: ${props => `${props.theme.sizes.screen.title.fontSize}rem`};
  text-transform: uppercase;
  line-height: ${props => props.theme.sizes.screen.title.lineHeight};
  color: ${props => props.theme.colors.plain};
  margin: 0;
  font-weight: 900;
  margin-top: 10rem;
  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 55%;
    height: ${props => `${props.theme.sizes.screen.title.borderWidth}rem`};
    background-color: ${props => props.theme.colors.highlight};
    transform: scale3d(0, 1, 1);
    animation: ${titleColorExpand} 1s ease-out 1s forwards;
    transform-origin: left top;
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`

export const ScreenSubTitle = styled.h1`
  font-size: ${props => `${props.theme.sizes.screen.subtitle.fontSize}rem`};
  text-transform: uppercase;
  color: ${props => props.theme.colors.plain};
  margin: 0;
  font-weight: 500;
`
export const TechnologyTitle = styled.h1`
  font-size: ${props => `${props.theme.sizes.chart.title.fontSize}rem`};
  line-height: ${props => `${props.theme.sizes.chart.title.lineHeight}rem`};
  display: block;
  color: ${props => props.theme.colors.plain};
  margin: 0;
  margin-bottom: ${props => `${props.theme.sizes.chart.title.fontSize / 2}rem`};
  text-transform: uppercase;
  font-weight: 900;
  @media (max-width: 768px) {
    padding: 1em 0;
  }
`
export const ChartDesc = styled.p`
  color: ${props => props.theme.colors.plain};
  font-size: ${props => `${props.theme.sizes.screen.desc.fontSize}rem`};
  padding-top: ${props => `${props.theme.sizes.chart.desc.paddingTop}rem`};
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  text-align: justify;
  text-align-last: left;
  mix-blend-mode: exclusion;
  margin: 0;
`
