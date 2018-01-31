import * as React from 'react'
import * as PropTypes from 'prop-types'
import 'normalize.css'
import { HashRouter as Router } from 'react-router-dom'
import AsyncRoutes from './components/AsyncRoutes'
import { ThemeProvider } from './styled/styledComponents'
import theme from './config/theme'

const routes = [
  { path: '/', key: 'Header', module: 'Header' },
  { path: '/', key: 'Homepage', module: 'Homepage', exact: true },
  { path: '/technology', key: 'technology', module: 'Technology' },
  { path: '/faq', key: 'FAQ', module: 'FAQ' },
]

export default () => (
  <ThemeProvider theme={theme}>
    <Router>
      <React.Fragment>{AsyncRoutes(routes)}</React.Fragment>
    </Router>
  </ThemeProvider>
)
