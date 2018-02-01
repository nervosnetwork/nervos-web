import * as React from 'react'
import { Rect} from '../../styled/Common'

const degs = [
  0,
  60,
  120,
  180,
  240,
  300,
]

export default () => (
  <div>
    {degs.map(deg => <Rect deg={deg} />)}
  </div>
)
