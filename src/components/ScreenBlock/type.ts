import { RouterProps, IPage } from '../../routes'

export interface IScreenBlock {
  title?: string
  key: string
  path: string
  module: string
  index?: number
  navable?: boolean
  exact?: boolean
}
export interface ScreenBlockProps extends RouterProps {}
export interface ScreenBlockState {
  loaded: boolean
}
