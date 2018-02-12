import * as React from 'react'
import styled, { StyledFunction, keyframes } from './styleUtils'
import theme from '../config/theme'

/* eslint-disable global-require */
const downloadIcon = require('../images/download.svg') as string
/* eslint-enable global-require */

const jump = keyframes`
  from, to {
    transform: scale(1, 1) translateY(0);
  }
  20%, 80% {
    transform: scale(0.8, 1.2) translateY(-20%);
  }
  30%, 70% {
    transform: scale(0.85, 1.15) translateY(-30%);
  }

  50% {
    transform: scale(0.9, 1.1) translateY(-40%);
  }

`
export const Download = styled.a`
  position: relative;
  color: ${props => props.theme.colors.plain};
  font-size: 1rem;
  cursor: pointer;
  color: ${props => props.theme.colors.plain};
  transition: all 0.3s;
  font-weight: 100;
  &:after {
    display: block;
    position: absolute;
    top: 0;
    left: 105%;
    content: ${`url(${downloadIcon})`};
    transform-origin: center bottom;
  }
  &:hover:after {
    animation: ${jump} 1s infinite;
  }
`

export default {
  Download,
}
