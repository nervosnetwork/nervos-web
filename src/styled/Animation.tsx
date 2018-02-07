import * as React from 'react'
import styled, { StyledFunction, keyframes } from './styleUtils'
import theme from '../config/theme'

// const Animation

// fade in

interface IFadeInDiv {
  fadeIn: boolean
  index?: number
}
const FadeInDivCons: StyledFunction<
  IFadeInDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const FadeInDiv = FadeInDivCons`
  opacity: ${props => `${props.fadeIn ? 1 : 0}`};
  transition: opacity 0.8s;
  transition-delay: ${props => `${(props.index || 0) * 0.05}s`};
  height: 100%;
`

// slide in
interface IVerticalSlideInDiv {
  slideIn: boolean
  fromTop?: boolean
  index?: number
}
const VerticalSlideInDivCons: StyledFunction<
  IVerticalSlideInDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const VerticalSlideInDiv = VerticalSlideInDivCons`
  transform: ${props =>
    `translateY(${
      props.slideIn ? '0' : `${props.fromTop ? '-100vh' : '100vh'}`
    })`};
  opacity: ${props => `${props.slideIn ? 1 : 0}`};
  transition: transform 1.2s, opacity 0.8s;
  transition-delay: ${props => `${(props.index || 0) * 0.05}s`};
  height: 100%;
  // display: inherit;
`
interface IHorizontalSlideInDiv {
  slideIn: boolean
  fromLeft?: boolean
  index?: number
}
const HorizontalSlideInDivCons: StyledFunction<
  IHorizontalSlideInDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const HorizontalSlideInDiv = HorizontalSlideInDivCons`
  transform: ${props =>
    `translateX(${
      props.slideIn ? '0' : `${props.fromLeft ? '-100vh' : '100vh'}`
    })`};
  opacity: ${props => `${props.slideIn ? 1 : 0}`};
  transition: transform 1.2s, opacity 0.8s;
  transition-delay: ${props => `${(props.index || 0) * 0.05}s`};
  height: 100%;
  // display: inherit;
`

// fade out
interface IVerticalSlideOutDiv {
  slideOut: boolean
  index?: number
}
const VerticalSlideOutDivCons: StyledFunction<
  IVerticalSlideOutDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const VerticalSlideOutDiv = VerticalSlideOutDivCons`
  transform: ${props => `translateY(${props.slideOut ? '100vh' : '0'})`};
  opacity: ${props => `${props.slideOut ? 1 : 1}`};
  transition: transform 1.2s, opacity 0.8s;
  transition-delay: ${props => `${(props.index || 0) * 0.05}s`};
  height: 100%;
  display: inherit;
`
interface IHorizontalSlideOutDiv {
  slideOut: boolean
  index?: number
}
const HorizontalSlideOutDivCons: StyledFunction<
  IHorizontalSlideOutDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const HorizontalSlideOutDiv = HorizontalSlideOutDivCons`
  transform: ${props => `translateY(${props.slideOut ? '100vh' : '0'})`};
  opacity: ${props => `${props.slideOut ? 1 : 1}`};
  transition: transform 1.2s, opacity 0.8s;
  transition-delay: ${props => `${(props.index || 0) * 0.05}s`};
  height: 100%;
  display: inherit;
`

export const dissolveIn = keyframes`
  from {
    filter: blur(100px);
    letter-spacing: 4px;
  }
  to {
    filter: blur(0px);
    letter-spacing:3px;
  }
`

interface IDissolveInDiv {
  duration?: number
  delay?: number
}

const DissolveInDivCons: StyledFunction<IDissolveInDiv> = styled.div

export const DissolveInDiv = DissolveInDivCons`
  height: 100%;
  filter: blur(100px);
  letter-spacing: 4px;
  animation: ${props =>
    `${dissolveIn} ${props.duration || 2}s ease-in ${(props.delay || 0) *
      0.2}s forwards`}
`

export const SlideIn = {
  vertical: VerticalSlideInDiv,
  horizontal: HorizontalSlideInDiv,
}
export const SlideOut = {
  vertical: VerticalSlideOutDiv,
  horizontal: HorizontalSlideOutDiv,
}

export const Fade = {
  in: FadeInDiv,
}

export const Dissolve = {
  in: DissolveInDiv,
}
