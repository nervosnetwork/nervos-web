import * as React from 'react'
import { I18n } from 'react-i18next'
import { ScreenDiv, ScreenTitleContainer } from '../../styled/Layout'
import { ScreenTitle, ScreenSubTitle } from '../../styled/Text'
import { ScreenBlockProps, ScreenBlockState } from './type'
import Navigator from '../Navigator'
import { SlideIn } from '../../styled/Animation'

export default originalProps => Comp =>
  class Screened extends React.Component<ScreenBlockProps, ScreenBlockState> {
    state = {
      loaded: false,
      navs: this.props.routes.filter(route => route.navable),
    }
    componentDidMount () {
      setTimeout(() => {
        this.setState(() => ({
          loaded: true,
        }))
      }, 0)
    }
    navTo = url => {
      this.props.history.push(url)
    }
    handleNavClick = url => e => {
      if (this.props.location.pathname === url) return

      this.setState({
        loaded: false,
      })
      setTimeout(() => {
        this.navTo(url)
      }, 400)
    }
    render (): JSX.Element {
      const { loaded } = this.state
      const { props } = this
      const { screenInfo } = originalProps
      return (
        <I18n ns="translations">
          {(t, { i18n }) => (
            <SlideIn.vertical slideIn={loaded}>
              <ScreenDiv>
                <Navigator
                  slideIn={loaded}
                  currentPath={props.location.pathname}
                  onNav={this.handleNavClick}
                  navs={this.state.navs}
                />
                {screenInfo && (
                  <ScreenTitleContainer>
                    <ScreenTitle>{t(screenInfo.title)}</ScreenTitle>
                    <ScreenSubTitle>{t(screenInfo.subtitle)}</ScreenSubTitle>
                  </ScreenTitleContainer>
                )}

                <Comp {...originalProps} loaded={loaded} />
              </ScreenDiv>
            </SlideIn.vertical>
          )}
        </I18n>
      )
    }
  }
