import * as React from 'react'
import { ColorizedDiv } from '../../styled/Common'

interface IColorizedBlock {
  primary?: boolean
  children: React.ReactChild
}

export default ({
  children,
  primary = true,
  colorBlock = true,
  colorBlockHeight = 1,
  chart = false,
}) => (
  <ColorizedDiv
    primary={primary}
    colorBlock={colorBlock}
    colorBlockHeight={colorBlockHeight}
    chart={chart}
  >
    {children}
  </ColorizedDiv>
)
