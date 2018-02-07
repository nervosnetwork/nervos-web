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
      props.theme.sizes.screen.desc.paddingTop}rem`};
  @media (max-width: 1280px) {
    padding-top: ${props =>
    `${props.theme.sizes.header.height +
        props.theme.sizes.screen.desc.paddingTop / 2}rem`};
  }
  @media (max-width: 768px) {
    padding-top: ${props =>
    `${props.theme.sizes.header.height +
        props.theme.sizes.screen.desc.paddingTop}rem`};
  }
`

export const SloganContainer = styled.div`
  position: relative;
  padding-left: ${props => `${props.theme.sizes.screen.desc.paddingLeft}rem`};
  padding-right: ${props =>
    `${props.theme.sizes.slogan.container.paddingRight}rem`};
  padding-top: ${props =>
    `${props.theme.sizes.slogan.container.paddingTop -
      props.theme.sizes.screen.desc.paddingTop}rem`};
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
  @media (max-width: 1920px) {
    padding-top: ${props =>
    `${(props.theme.sizes.slogan.container.paddingTop -
        props.theme.sizes.screen.desc.paddingTop) *
        0.14}rem`};
  }
  @media (max-width: 768px) {
    padding: 0;
    &:after {
      display: none;
    }
  }
  @media (max-width: 750px) {
    text-align: center;
  }
`

export const ScreenTitleContainer = styled.div`
  margin-top: ${props =>
    `${props.theme.sizes.screen.titleContainer.marginTop}rem`};
  margin-bottom: ${props =>
    `${props.theme.sizes.screen.titleContainer.marginBottom}rem`};
  @media (max-width: 1920px) {
    margin-top: ${props =>
    `${props.theme.sizes.screen.titleContainer.marginTop / 2}rem`};
    margin-bottom: ${props =>
    `${props.theme.sizes.screen.titleContainer.marginBottom / 2}rem`};
  }
`

export const ChartsContainer = styled.div`
  display: block;
  margin-left: ${props =>
    `${props.theme.sizes.screen.desc.paddingLeft -
      props.theme.sizes.chart.blockHPadding / 2}rem`};
  margin-right: ${props =>
    `${props.theme.sizes.screen.desc.paddingLeft -
      props.theme.sizes.chart.blockHPadding / 2}rem`};
  @media (max-width: 750px) {
    margin: 0;
  }
`

interface IChartBlock {
  index: number
}

const ChartBlockCons: StyledFunction<IChartBlock> = styled.div
export const ChartBlock = ChartBlockCons`
  display: grid;
  margin-bottom: 30px;
  grid-template-columns: 20% auto 20%;
  grid-template-rows: repeat(2 1fr);
  grid-column-gap: 3vw;
  & > img {
    grid-column: ${props => (props.index % 2 ? '2/4' : '1/3')};
    grid-row: 1/3;
    justify-self: ${props => (props.index % 2 ? 'right' : 'left')}
  }
  &>h1{
    grid-column: ${props => (props.index % 2 ? '1/3' : '2/4')};
    grid-row: 1/2;
  }
  & > div {
    grid-column: ${props => (props.index % 2 ? '1/3' : '2/4')};
    grid-row: 2/3;
    justify-self: ${props => (props.index % 2 ? 'left' : 'right')}
  }
  @media (max-width: 750px) {
    display: block;
    text-align: center;
    margin-bottom: 25px;
  }
`
// display: inline-block;
// width: 33%;
// padding: ${props => `0 ${props.theme.sizes.chart.blockHPadding / 2}rem`};
