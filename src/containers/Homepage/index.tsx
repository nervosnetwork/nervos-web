import * as React from 'react'
import { Slogan } from '../../styled/Common'
import PageBlock from '../../components/PageBlock'
import { homepageBlocks as blocks } from '../../routes'

const slogan = (
  <Slogan>
    Blockchain<br />
    Commonwealth<br />
    Of the 7.6<br />
    Billion People
  </Slogan>
)

export default props => (
  <PageBlock blocks={blocks} displayName="homepage" {...props}>
    {slogan}
  </PageBlock>
)
