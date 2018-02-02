import * as React from 'react'
import styled, { StyledFunction } from './styledComponents'
import theme from '../config/theme'

interface IFaceInDiv {
  fadeIn: boolean
}
const FadeInDivCons: StyledFunction<
  IFaceInDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const FadeInDiv = FadeInDivCons`
  transform: ${props => `translateY(${props.fadeIn ? '0' : '100vh'})`};
  opacity: ${props => `${props.fadeIn ? 1 : 0}`};
  transition: transform 1.2s, opacity 0.8s;
`
interface IFaceOutDiv {
  fadeOut: boolean
  index?: number
}
const FadeOutDivCons: StyledFunction<
  IFaceOutDiv & React.HTMLProps<HTMLDivElement>
  > =
  styled.div

export const FadeOutDiv = FadeOutDivCons`
  transform: ${props => `translateY(${props.fadeOut ? '100vh' : '0'})`};
  opacity: ${props => `${props.fadeOut ? 1 : 1}`};
  transition: transform 1.2s, opacity 0.8s;
  transition-delay: ${props => `${(props.index || 0) * 0.05}s`};
`

export const remainding = false
