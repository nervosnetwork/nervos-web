import * as React from 'react'
import styled, { StyledFunction, keyframes } from './styledComponents'
import theme from '../config/theme'

// const Animation

// fade in
interface IVerticalFadeInDiv {
  fadeIn: boolean
  fromTop?: boolean
  index?: number
}
const VerticalFadeInDivCons: StyledFunction<
  IVerticalFadeInDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const VerticalFadeInDiv = VerticalFadeInDivCons`
  transform: ${props =>
    `translateY(${
      props.fadeIn ? '0' : `${props.fromTop ? '-100vh' : '100vh'}`
    })`};
  opacity: ${props => `${props.fadeIn ? 1 : 0}`};
  transition: transform 1.2s, opacity 0.8s;
  transition-delay: ${props => `${(props.index || 0) * 0.05}s`};
  height: 100%;
  display: inherit;
`
interface IHorizontalFadeInDiv {
  fadeIn: boolean
  fromLeft?: boolean
  index?: number
}
const HorizontalFadeInDivCons: StyledFunction<
  IHorizontalFadeInDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const HorizontalFadeInDiv = HorizontalFadeInDivCons`
  transform: ${props =>
    `translateX(${
      props.fadeIn ? '0' : `${props.fromLeft ? '-100vh' : '100vh'}`
    })`};
  opacity: ${props => `${props.fadeIn ? 1 : 0}`};
  transition: transform 1.2s, opacity 0.8s;
  transition-delay: ${props => `${(props.index || 0) * 0.05}s`};
  height: 100%;
  display: inherit;
`

// fade out
interface IVerticalFadeOutDiv {
  fadeOut: boolean
  index?: number
}
const VerticalFadeOutDivCons: StyledFunction<
  IVerticalFadeOutDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const VerticalFadeOutDiv = VerticalFadeOutDivCons`
  transform: ${props => `translateY(${props.fadeOut ? '100vh' : '0'})`};
  opacity: ${props => `${props.fadeOut ? 1 : 1}`};
  transition: transform 1.2s, opacity 0.8s;
  transition-delay: ${props => `${(props.index || 0) * 0.05}s`};
  height: 100%;
  display: inherit;
`
interface IHorizontalFadeOutDiv {
  fadeOut: boolean
  index?: number
}
const HorizontalFadeOutDivCons: StyledFunction<
  IHorizontalFadeOutDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const HorizontalFadeOutDiv = HorizontalFadeOutDivCons`
  transform: ${props => `translateY(${props.fadeOut ? '100vh' : '0'})`};
  opacity: ${props => `${props.fadeOut ? 1 : 1}`};
  transition: transform 1.2s, opacity 0.8s;
  transition-delay: ${props => `${(props.index || 0) * 0.05}s`};
  height: 100%;
  display: inherit;
`

export const FadeIn = {
  vertical: VerticalFadeInDiv,
  horizontal: HorizontalFadeInDiv,
}
export const FadeOut = {
  vertical: VerticalFadeOutDiv,
  horizontal: HorizontalFadeOutDiv,
}
