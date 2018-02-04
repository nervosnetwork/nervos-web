import * as React from 'react'
import {
  CenterBlock,
  HomepageWidget,
  HomepageWidgets,
} from '../../styled/Common'
import { SlideIn } from '../../styled/Animation'

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
      <SlideIn.vertical slideIn={this.state.loaded} fromTop>
        <HomepageWidgets>
          <div>
            <HomepageWidget primary>
              <RotatingRect />
            </HomepageWidget>
            <HomepageWidget>
              <RotatingRect />
            </HomepageWidget>
          </div>
        </HomepageWidgets>
      </SlideIn.vertical>
    )
  }
}
