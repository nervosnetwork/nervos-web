import * as React from 'react'
import { ColorizedDiv } from '../../styled/Common'

interface IColorizedBlock {
  primary?: boolean
  children: React.ReactChild
}

export default ({ children, primary = true }) => (
  <ColorizedDiv primary={primary}>{children}</ColorizedDiv>
)
