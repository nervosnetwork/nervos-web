import * as React from 'react'
import { I18n } from 'react-i18next'
import { Slogan, HomepageDesc } from '../../styled/Text'
import { RouterProps } from '../../routes'
import { SloganContainer } from '../../styled/Layout'
import HomepageWidgets from '../../components/HomepageWidgets'
import { Download } from '../../styled/Action'
import ScreenBlock from '../../components/ScreenBlock'
import { SlideIn } from '../../styled/Animation'

interface ISloganProps {
  slogan: string
  description: string
  download: string
  whitepaper: string
  loaded: boolean
}

const HomeSlogan: React.SFC<ISloganProps> = props => (
  <I18n ns="translations">
    {(t, { i18n }) => (
      <React.Fragment>
        <SloganContainer>
          <Slogan>{t(props.slogan)}</Slogan>
          <SlideIn.horizontal index={0} slideIn={props.loaded}>
            <HomepageDesc>{t(props.description)}</HomepageDesc>
          </SlideIn.horizontal>
          <SlideIn.horizontal index={2} slideIn={props.loaded}>
            <Download>
              {t(props.download)} {t(props.whitepaper)}
            </Download>
          </SlideIn.horizontal>
        </SloganContainer>
      </React.Fragment>
    )}
  </I18n>
)

const ScreenBlocked = ScreenBlock({
  slogan: 'slogan',
  description: 'description',
  download: 'download',
  whitepaper: 'whitepaper',
})(HomeSlogan)

export default (props: RouterProps) => <ScreenBlocked {...props} />
