import * as React from 'react'
import { ScreenDiv, ScreenTitleContainer } from '../../styled/Layout'
import { ScreenTitle, ScreenSubTitle } from '../../styled/Text'
import { ScreenBlockProps, ScreenBlockState } from './type'

export default originalProps => Comp =>
  class Screened extends React.Component<ScreenBlockProps, ScreenBlockState> {
    state = {
      loaded: false,
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
    // handleNavClick = url => e => {
    //   if (this.props.location.pathname === url) return

    //   this.setState({
    //     loaded: false,
    //   })
    //   setTimeout(() => {
    //     this.navTo(url)
    //   }, 400)
    // }
    render (): JSX.Element {
      const { loaded } = this.state
      const { props } = this
      const { screenInfo } = originalProps
      return (
        <ScreenDiv>
          {screenInfo && (
            <ScreenTitleContainer>
              <ScreenTitle>{screenInfo.title}</ScreenTitle>
              <ScreenSubTitle>{screenInfo.subtitle}</ScreenSubTitle>
            </ScreenTitleContainer>
          )}

          <Comp {...originalProps} loaded={loaded} />
        </ScreenDiv>
      )
    }
  }
