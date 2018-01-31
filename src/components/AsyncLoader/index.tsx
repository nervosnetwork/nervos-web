import * as React from 'react'

interface Props {
  load: any
  children: (Comp: any) => React.ReactNode
}

interface State {
  mod: any
}

export default class AsyncLoader extends React.Component<Props, State> {
  state = {
    mod: null,
  }
  componentDidMount () {
    this.load(this.props)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }
  load (props) {
    this.setState({
      mod: null,
    })
    props.load(mod => {
      this.setState({
        mod: mod.default ? mod.default : mod,
      })
    })
  }
  render () {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}
