import * as React from 'react'
import * as PropTypes from 'prop-types'
import 'normalize.css'
import { HashRouter as Router } from 'react-router-dom'
import AsyncRoutes from './components/AsyncRoutes'
import { ThemeProvider } from './styled/styleUtils'
import theme from './config/theme'
import routes from './routes'

export default () => (
  <ThemeProvider theme={theme}>
    <Router>
      <React.Fragment>{AsyncRoutes(routes)}</React.Fragment>
    </Router>
  </ThemeProvider>
)

// import { scrollObservable } from './utils/observables'
// import { getScrollTop } from './utils/getDomAttr'

// export default class extends React.Component {
//   state = {
//     scrollTop: 0,
//   }
//   componentDidMount() {
//     scrollObservable.subscribe(() =>
//       this.setState({ scrollTop: getScrollTop() }),
//     )
//   }
//   static childContextTypes: PropTypes.ProviderContext = {
//     scrollTop: PropTypes.string,
//   }
//   getChildContext() {
//     return {
//       scrollTop: this.state.scrollTop,
//     }
//   }
//   render() {
//     return (
//       <ThemeProvider theme={theme}>
//         <Router>
//           <React.Fragment>{AsyncRoutes(routes)}</React.Fragment>
//         </Router>
//       </ThemeProvider>
//     )
//   }
// }
