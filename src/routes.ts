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
  { path: '/', key: 'Warning', module: 'Warning', exact: true },
  // { path: '/', key: 'Header', module: 'Header', exact: true },
  { path: '/', key: 'Slogan', module: 'Slogan', exact: true },
  { path: '/', key: 'Features', module: 'Features', exact: true },
  // { path: '/', key: 'Teams', module: 'Teams',, exact: true },
  { path: '/', key: 'Supporters', module: 'Supporters', exact: true },
  { path: '/', key: 'Footer', module: 'Footer', exact: true },
  { path: '/', key: 'Font', module: 'Font', exact: true },
  { path: '/pdf/:version', key: 'PDF', module: 'PDFPreviewer' },
]

export default routes
