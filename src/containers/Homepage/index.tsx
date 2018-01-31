import * as React from 'react'
import { Header, Logo, Slogan } from '../../styled/Common'
import PageBlock from '../../components/PageBlock'
import { IPageBlock } from '../../components/PageBlock/type.d'
import ColorizedBlock from '../../components/ColorizedBlock'
import {pageBlocks} from '../../App'

const slogan = (
  <Slogan>
    Blockchain<br />
    Commonwealth<br />
    Of the 7.6<br />
    Billion People
  </Slogan>
)

export default (props) => (
  <PageBlock blocks={pageBlocks} {...props}>
    {slogan}
  </PageBlock>
)
