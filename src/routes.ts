export interface IPage {
  title?: string
  key: string
  path: string
  module: string
  index?: number
  navable?: boolean
  exact?: boolean
}

/* eslint-disable no-use-before-define */
export interface RouterProps {
  // history: any
  match: any
  // location: any
  routes: IPage[]
}
/* eslint-enable no-use-before-define */

const routes: IPage[] = [
  // { path: '/', key: 'Header', module: 'Header', exact: true },
  { path: '/', key: 'Slogan', module: 'Slogan', },
  { path: '/', key: 'Features', module: 'Features', },
  // { path: '/', key: 'Teams', module: 'Teams', },
  { path: '/', key: 'Supporters', module: 'Supporters', },
  { path: '/', key: 'Footer', module: 'Footer', },
]

export default routes
