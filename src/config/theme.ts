import colors, { COLORS } from './colors'
import sizes, { SIZES } from './sizes'

/* eslint-disable no-restricted-globals */
export interface ThemeInterface {
  colors: {
    primary: COLORS
    highlight: COLORS
    background: COLORS
    plain: COLORS
    assist: COLORS
    darkBackgroud: COLORS
    selected: COLORS
  }
  sizes: {
    root: SIZES
    header: {
      height: SIZES
      navs: {
        nav: {
          marginLeft: SIZES
          height: SIZES
          fontSize: SIZES
        }
      }
    }
    screen: {
      blockMaxWidth: SIZES // 1514
      blockWidthPercent: string // use '%'
    }
  }
}
/* eslint-enable no-restricted-globals */

const theme: ThemeInterface = {
  colors,
  sizes,
}

export default theme
