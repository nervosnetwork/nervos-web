export interface IPageBlock {
  title: string
  children: any
  marginBottom: string
}
export interface PageBlockProps {
  blocks: IPageBlock[]
  index?: number
  children: React.ReactChild
  marginBottom?: string
}

export interface PageBlockState {
  loaded: boolean
}
