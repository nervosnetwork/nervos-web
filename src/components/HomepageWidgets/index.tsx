import * as React from 'react'
import {
  CenterBlock,
  HomepageWidget,
  HomepageWidgets,
} from '../../styled/Common'
import { FadeIn } from '../../styled/Animation'

import RotatingRect from '../RotatingRect'

export default class extends React.Component {
  state = {
    loaded: false,
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        loaded: true,
      })
    }, 0)
  }
  componentWillUnmount () {
    this.setState({
      loaded: false,
    })
  }
  render () {
    return (
      <FadeIn.vertical fadeIn={this.state.loaded} fromTop>
        <CenterBlock>
          <HomepageWidgets>
            <div>
              <HomepageWidget primary>
                <RotatingRect
                  style={{
                    transform: 'rotate(30deg)',
                  }}
                />
              </HomepageWidget>
              <HomepageWidget>
                <RotatingRect
                  style={{
                    transform: 'rotate(30deg)',
                  }}
                />
              </HomepageWidget>
            </div>
          </HomepageWidgets>
        </CenterBlock>
      </FadeIn.vertical>
    )
  }
}
