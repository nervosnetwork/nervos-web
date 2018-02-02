import * as React from 'react'
import { Slogan } from '../../styled/Common'
import PageBlock from '../../components/PageBlock'
import { homepageBlocks as blocks } from '../../routes'
import HomepageWidgets from '../../components/HomepageWidgets'

const slogan = (
  <Slogan>
    Blockchain<br />
    Commonwealth<br />
    Of the 7.6<br />
    Billion People
  </Slogan>
)

export default props => (
  <React.Fragment>
    <HomepageWidgets />
    <PageBlock blocks={blocks} displayName="homepage" {...props}>
      {slogan}
    </PageBlock>
  </React.Fragment>
)
