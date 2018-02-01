import * as React from 'react'
import * as PropTypes from 'prop-types'
import 'normalize.css'
import { HashRouter as Router } from 'react-router-dom'
import AsyncRoutes from './components/AsyncRoutes'
import { ThemeProvider } from './styled/styledComponents'
import theme from './config/theme'
import { IPageBlock } from './components/PageBlock/type.d'

const TechChild = () => <div>techchild</div>

export const TechSlide = {
  title: 'Technology',
  path: '/tech',
  key: 'technology',
  module: 'Technology',
  index: 1,
}
export const ContactMeSlide = {
  title: 'Contact Me',
  path: '/contract-me',
  key: 'contractMe',
  module: 'ContactMe',
  index: 2,
}

export const FeaturesSlide = {
  title: 'Features',
  path: '/features',
  key: 'features',
  module: 'Features',
  index: 3,
}

export const TeamMembersSlide = {
  title: 'Team Members',
  path: '/team-members',
  key: 'teamMembers',
  module: 'TeamMembers',
  index: 4,
}
export const AdvisorsSlide = {
  title: 'Advisors',
  path: '/advisors',
  key: 'advisors',
  module: 'Advisors',
  index: 5,
}
export const SupportersSlide = {
  title: 'Supporters',
  path: '/supporters',
  key: 'advisors',
  module: 'Supporters',
  index: 5,
}
export const pageBlocks: IPageBlock[] = [
  TechSlide,
  ContactMeSlide,
  FeaturesSlide,
  TeamMembersSlide,
  AdvisorsSlide,
  SupportersSlide,
]

const routes = [
  { path: '/', key: 'Header', module: 'Header' },
  { path: '/', key: 'Homepage', module: 'Homepage', exact: true },
  ...pageBlocks,
  { path: '/faq', key: 'FAQ', module: 'FAQ' },
]

export default () => (
  <ThemeProvider theme={theme}>
    <Router>
      <React.Fragment>{AsyncRoutes(routes)}</React.Fragment>
    </Router>
  </ThemeProvider>
)
