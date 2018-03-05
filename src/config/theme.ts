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
      paddingTop: SIZES
      paddingBottom: SIZES
      navs: {
        nav: {
          marginLeft: SIZES
          height: SIZES
          fontSize: SIZES
        }
      }
    }
    screen: {
      title: {
        fontSize: SIZES
        lineHeight: SIZES
        borderWidth: SIZES
        marginTop: SIZES
      }
      subtitle: {
        fontSize: SIZES
      }
      titleContainer: {
        marginTop: SIZES
        marginBottom: SIZES
      }
      marginBottom: SIZES
      blockMaxWidth: SIZES // 1514
      blockWidthPercent: string // use '%'
      desc: {
        paddingLeft: SIZES
        paddingTop: SIZES
        fontSize: SIZES
      }
    }
  }
}
/* eslint-enable no-restricted-globals */

const theme: ThemeInterface = {
  colors,
  sizes,
}

export default theme
