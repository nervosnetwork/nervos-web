import * as React from 'react'
import * as PropTypes from 'prop-types'
import 'normalize.css'
import { HashRouter as Router } from 'react-router-dom'
import AsyncRoutes from './components/AsyncRoutes'
import { ThemeProvider } from './styled/styledComponents'
import theme from './config/theme'
import routes from './routes'

export default () => (
  <ThemeProvider theme={theme}>
    <Router>
      <React.Fragment>{AsyncRoutes(routes)}</React.Fragment>
    </Router>
  </ThemeProvider>
)
