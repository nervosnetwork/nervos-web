import * as React from 'react'
import { createPortal, } from 'react-dom'
import { log, } from '../../utils'
import Font from '../../components/Font'

const lucida = require('../../styles/fonts/HelveticaNeue Medium.ttf')
const myrida = require('../../styles/fonts/MyriadPro-Bold.otf')

export default class extends React.Component {
  render () {
    return createPortal([
      <Font
        fontSrc={lucida}
        fontName="lucdia"
      />,
      <Font
        fontSrc={myrida}
        fontName="myrida"
      />,
    ], document.head)
  }
}
