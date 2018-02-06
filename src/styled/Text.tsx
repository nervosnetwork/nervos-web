import * as React from 'react'
import styled, { injectGlobal, StyledFunction, keyframes } from './styleUtils'
import theme from '../config/theme'

export const Slogan = styled.h1`
  color: ${props => props.theme.colors.plain};
  font-family: Futura;
  font-size: ${props => `${props.theme.sizes.slogan.fontSize}rem`};
  font-weight: 900;
  margin: 0;
  line-height: ${props => props.theme.sizes.slogan.lineHeight};
  padding-bottom: ${props => `${props.theme.sizes.slogan.paddingBottom}rem`};
`

export const Desc = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => `${props.theme.sizes.screen.desc.fontSize}rem`};
  padding-left: ${props => `${props.theme.sizes.screen.desc.paddingLeft}rem`};
  padding-top: ${props => `${props.theme.sizes.screen.desc.paddingTop}rem`};
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
`

export const ScreenTitle = styled.h1`
  display: inline-block;
  position: relative;
  font-size: ${props => `${props.theme.sizes.screen.title.fontSize}rem`};
  line-height: ${props => props.theme.sizes.screen.title.lineHeight};
  color: ${props => props.theme.colors.plain};
  margin: 0;
  font-weight: 900;
  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 55%;
    height: ${props => `${props.theme.sizes.screen.title.borderWidth}rem`};
    background-color: ${props => props.theme.colors.highlight};
  }
`

export const ScreenSubTitle = styled.h1`
  font-size: ${props => `${props.theme.sizes.screen.subtitle.fontSize}rem`};
  color: ${props => props.theme.colors.plain};
  margin: 0;
`
export const ChartTitle = styled.h1`
  font-size: ${props => `${props.theme.sizes.chart.title.fontSize}rem`};
  line-height: 1;
  display: block;
  height: 2em;
  color: ${props => props.theme.colors.plain};
  margin: 0;
  text-transform: uppercase;
  font-weight: 900;
`
export const ChartDesc = styled.div`
  color: ${props => props.theme.colors.plain};
  font-size: ${props => `${props.theme.sizes.screen.desc.fontSize}rem`};
  padding-top: ${props => `${props.theme.sizes.chart.desc.paddingTop}rem`};
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  text-align: justify;
  text-align-last: left;
`
