import * as React from 'react'
import styled, { StyledFunction, keyframes } from './styleUtils'
import theme from '../config/theme'

/* eslint-disable global-require */
const downloadIcon = require('../images/download.svg') as string
/* eslint-enable global-require */

export const Download = styled.a`
  position: relative;
  color: ${props => props.theme.colors.plain};
  font-size: 1rem;
  cursor: pointer;
  padding: 5px 15px;
  color: ${props => props.theme.colors.plain};
  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => `5px 5px 0 0px ${props.theme.colors.highlight}`};
  transition: all 0.3s;
  &:hover {
    box-shadow: ${props => `3px 3px 0 0px ${props.theme.colors.highlight}`};
  }
  /* &:after {
    display: block;
    position: absolute;
    top: 0;
    left: 120%;
    content: ${`url(${downloadIcon})`};
  } */
`

export const remain = false
