import * as React from 'react'
import styled, { injectGlobal, StyledFunction, keyframes } from './styleUtils'
import theme from '../config/theme'

export const ScreenDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: ${props => `${props.theme.sizes.screen.blockMaxWidth}rem`};
  width: ${props => props.theme.sizes.screen.blockWidthPercent};
  margin: 0 auto;
  padding-top: ${props =>
    `${props.theme.sizes.header.height +
    props.theme.sizes.header.paddingTop +
    props.theme.sizes.screen.desc.paddingTop
    }rem`};
`

export const SloganContainer = styled.div`
  position: relative;
  padding-left: ${props => `${props.theme.sizes.screen.desc.paddingLeft}rem`};
  padding-top: ${props =>
    `${props.theme.sizes.slogan.container.paddingTop -
    props.theme.sizes.screen.desc.paddingTop
    }rem`};
  padding-bottom: ${props =>
    `${props.theme.sizes.slogan.container.paddingBottom}rem`};
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 100%;
    left: ${props => `${props.theme.sizes.screen.desc.paddingLeft}rem`};
    height: ${props => `${props.theme.sizes.slogan.container.borderWidth}rem`};
    width: ${props => `${props.theme.sizes.slogan.container.borderLength}rem`};
    background-color: ${props => props.theme.colors.plain};
  }
`

export const ScreenTitleContainer = styled.div`
  margin-top: ${props =>
    `${props.theme.sizes.screen.titleContainer.marginTop}rem`};
  margin-bottom: ${props =>
    `${props.theme.sizes.screen.titleContainer.marginBottom}rem`};
`

export const ChartsContainer = styled.div`
  display: block;
  margin-left: ${props =>
    `${props.theme.sizes.screen.desc.paddingLeft -
    props.theme.sizes.chart.blockHPadding / 2
    }rem`};
  margin-right: ${props =>
    `${props.theme.sizes.screen.desc.paddingLeft -
    props.theme.sizes.chart.blockHPadding / 2
    }rem`};
`
export const ChartBlock = styled.div`
  display: inline-block;
  /* overflow: hidden; */
  width: 33%;
  padding: ${props => `0 ${props.theme.sizes.chart.blockHPadding / 2}rem`}
  /* padding: ${props => `0 ${+props.theme.sizes.chart.blockHPadding / 3}rem`};
  &:first-child {
    padding: ${props =>
    `0 ${2 * +props.theme.sizes.chart.blockHPadding / 3}rem 0 0`};
  }
  &:last-child {
    padding: ${props =>
    `0 0 0 ${2 * +props.theme.sizes.chart.blockHPadding / 3}rem`};
  } */
`
