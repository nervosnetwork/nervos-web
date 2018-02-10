import * as React from 'react'
// import * as PropTypes from 'prop-types'
import { I18n } from 'react-i18next'
import { ScreenDiv, ScreenTitleContainer } from '../../styled/Layout'
import { ScreenTitle, ScreenSubTitle } from '../../styled/Text'
import { ScreenBlockProps, ScreenBlockState } from './type'
import Navigator from '../Navigator'
import { SlideIn, Dissolve } from '../../styled/Animation'
import { scrollObservable } from '../../utils/observables'

const styles = require('../../styles/common.scss')

export default originalProps => Comp =>
  class Screened extends React.Component<ScreenBlockProps, ScreenBlockState> {
    static hideLoading () {
      const loading = document.getElementById('loading') as HTMLElement
      if (loading) {
        loading.classList.add(styles.fadeOut)
      }
    }
    displayName = 'screened'
    state = {
      loaded: false,
    }
    componentDidMount () {
      Screened.hideLoading()
      this.checkVisibility()
      scrollObservable.subscribe(this.checkVisibility)
    }
    checkVisibility = () => {
      if (
        this.container &&
        this.container.getBoundingClientRect().top < 0.9 * window.innerHeight
        // && this.container.getBoundingClientRect().bottom > 0
      ) {
        this.setState({ loaded: true })
      } else {
        /**
         *  Hiden block when outside of screen
         */
        // this.setState({ loaded: false })
      }
    }
    public container: HTMLElement | null
    render (): JSX.Element {
      const { loaded } = this.state
      const { props } = this
      const { screenInfo } = originalProps
      return (
        <div ref={el => (this.container = el)}>
          <I18n ns="translations">
            {(t, { i18n }) => (
              <SlideIn.horizontal slideIn={loaded}>
                <ScreenDiv>
                  {screenInfo && (
                    <ScreenTitleContainer>
                      <ScreenTitle>{t(screenInfo.title)}</ScreenTitle>
                      <ScreenSubTitle>{t(screenInfo.subtitle)}</ScreenSubTitle>
                    </ScreenTitleContainer>
                  )}
                  <Comp {...originalProps} loaded={loaded} />
                </ScreenDiv>
              </SlideIn.horizontal>
            )}
          </I18n>
        </div>
      )
    }
  }
