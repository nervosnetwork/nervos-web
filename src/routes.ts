import { IPageBlock } from './components/PageBlock/type.d'

export const TechSlide = {
  title: 'Technology',
  path: '/tech',
  key: 'technology',
  module: 'Technology',
}
export const ContactUsSlide = {
  title: 'Contact Us',
  path: '/contract-us',
  key: 'contractUs',
  module: 'ContactUs',
}

export const FeaturesSlide = {
  title: 'Features',
  path: '/features',
  key: 'features',
  module: 'Features',
}

export const TeamMembersSlide = {
  title: 'Team Members',
  path: '/team-members',
  key: 'teamMembers',
  module: 'TeamMembers',
}
export const AdvisorsSlide = {
  title: 'Advisors',
  path: '/advisors',
  key: 'advisors',
  module: 'Advisors',
}
export const SupportersSlide = {
  title: 'Supporters',
  path: '/supporters',
  key: 'supporters',
  module: 'Supporters',
}
export const homepageBlocks: IPageBlock[] = [
  TechSlide,
  ContactUsSlide,
  FeaturesSlide,
  TeamMembersSlide,
  AdvisorsSlide,
  SupportersSlide,
]

const routes = [
  { path: '/', key: 'Header', module: 'Header' },
  { path: '/', key: 'Homepage', module: 'Homepage', exact: true },
  ...homepageBlocks,
  { path: '/faq', key: 'FAQ', module: 'FAQ' },
]

export default routes
