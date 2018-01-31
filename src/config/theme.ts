import colors, { COLORS } from './colors'
import sizes, { SIZES } from './sizes'

export interface ThemeInterface {
  colors: {
    primary: COLORS
    highlight: COLORS
    background: COLORS
    white: COLORS
  }
  sizes: {
    root: string
    headerHeight: string
    centerBlockMaxWidth: string
    centerBlockWidth: string
    logoHOffset: string
    navSpan: string
    dashLineWidth: string
    centerBlockTitleVSpan: string
    navItemHeight: SIZES
    blockTitleHeight: SIZES
    slogan: SIZES
    subscribeBtnFontSize: SIZES
  }
}

const theme: ThemeInterface = {
  colors,
  sizes,
}

export default theme
