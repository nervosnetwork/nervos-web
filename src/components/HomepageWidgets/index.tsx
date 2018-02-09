import * as React from 'react'
import { HomepageWidget, HomepageWidgets } from '../../styled/Common'
import { SlideIn } from '../../styled/Animation'

import RotatingRect from '../RotatingRect'

export default class extends React.Component {
  state = {
    loaded: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      })
    }, 0)
  }
  componentWillUnmount() {
    this.setState({
      loaded: false,
    })
  }
  render() {
    return (
      <HomepageWidgets>
        <HomepageWidget primary>
          <RotatingRect />
        </HomepageWidget>
        <HomepageWidget>
          <RotatingRect />
        </HomepageWidget>
      </HomepageWidgets>
    )
  }
}
