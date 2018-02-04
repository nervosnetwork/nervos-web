import * as React from 'react'
import { Rect } from '../../styled/Common'

const degs = [0, 60, 120, 180, 240, 300]

export default props => (
  <React.Fragment>
    {degs.map(deg => <Rect deg={deg + 30} key={deg} />)}
  </React.Fragment>
)
