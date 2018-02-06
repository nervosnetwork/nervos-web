import * as React from 'react'
import { Slogan } from '../../styled/Text'
import { RouterProps } from '../../routes'
import { SloganContainer } from '../../styled/Layout'
import HomepageWidgets from '../../components/HomepageWidgets'
import { Download } from '../../styled/Action'
import ScreenBlock from '../../components/ScreenBlock'

interface ISloganProps {
  slogan: string
  download: string
  loaded: boolean
}

const HomeSlogan: React.SFC<ISloganProps> = props => (
  <React.Fragment>
    <HomepageWidgets />
    <SloganContainer>
      <Slogan>{props.slogan}</Slogan> <Download>{props.download}</Download>
    </SloganContainer>
  </React.Fragment>
)

const ScreenBlocked = ScreenBlock({
  slogan: 'The Common Knowledge Base for The 7.6 Billion People.',
  download: 'Download Whitepaper',
})(HomeSlogan)

export default (props: RouterProps) => <ScreenBlocked {...props} />
