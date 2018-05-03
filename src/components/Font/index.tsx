import * as React from 'react'
// import { createPortal, } from 'react-dom'
// import { log, } from '../../utils'

export default class extends React.Component<any, any> {
  state = {
    fontName: '',
    fontSrc: '',
  }

  componentDidMount () {
    const { addFontWindowLoad } = this
    window.addEventListener('load', addFontWindowLoad)
  }

  t = null as any
  lang = null as any

  addFontWindowLoad = () => {
    const { fontSrc, fontName } = this.props
    this.setState({
      fontSrc,
      fontName,
    })
  }

  addFontFontLoad = () => {
    const { fontName } = this.props
    this.setState({
      fontName,
    })
  }

  render () {
    const { fontName, fontSrc } = this.state
    return (
      <style style={{ fontFamily: this.props.fontName }}>
        {`
        @font-face {
          font-family: '${fontName}';
          src: url('${fontSrc}');
        }
        `}
      </style>
    )
  }
}
