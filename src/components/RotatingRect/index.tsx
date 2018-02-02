import * as React from 'react'
import { Rect } from '../../styled/Common'

const degs = [0, 60, 120, 180, 240, 300]

export default props => (
  <React.Fragment>
    <div style={props.style}>
      {degs.map(deg => <Rect deg={deg} key={deg} />)}
    </div>
  </React.Fragment>
)
