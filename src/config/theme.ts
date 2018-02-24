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
    letterSpacing: SIZES
    centerBlockMaxWidth: SIZES
    input: {
      fontSize: SIZES
    }
    header: {
      height: SIZES
      paddingTop: SIZES
      paddingBottom: SIZES
      navs: {
        nav: {
          marginLeft: SIZES
          height: SIZES
        }
      }
    }
    screen: {
      title: {
        fontSize: SIZES
        lineHeight: SIZES
        borderWidth: SIZES
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
    footer: {
      paddingTop: SIZES
      paddingBottom: SIZES
      marginTop: SIZES
      logo: {
        height: SIZES
      }
      navs: {
        nav: {
          fontSize: SIZES
        }
      }
    }
    colorizedBlock: {
      color: {
        width: SIZES
        height: SIZES
      }
      paddingLeft: SIZES
    }
    slogan: {
      container: {
        paddingTop: SIZES
        paddingBottom: SIZES
        borderWidth: SIZES
        borderLength: SIZES
        paddingRight: SIZES
      }
      fontSize: SIZES
      lineHeight: SIZES
      paddingBottom: SIZES
    }
    homepageDesc: {
      fontSize: SIZES
      lineHeight: SIZES
      paddingBottom: SIZES
    }
    dashLineWidth: SIZES
    subscribe: {
      form: {
        lineHeight: SIZES
        lineWidth: SIZES
        button: {
          fontSize: SIZES
          width: SIZES
          height: SIZES
        }
      }
    }
    members: {
      container: {
        height: SIZES
      }
      member: {
        marginTop: SIZES
        name: {
          fontSize: SIZES
        }
      }
    }
    slideNav: {
      top: SIZES
      left: SIZES
    }
    history: {
      yearLabel: {
        fontSize: SIZES
        paddingBottom: SIZES
      }
      borderCircle: {
        diameter: SIZES
        bandWidth: SIZES
      }
      col: {
        borderBottomWidth: SIZES
        paddingTop: SIZES
        paddingLeft: SIZES
      }
      item: {
        HPadding: SIZES
        marginBottom: SIZES
      }
      index: {
        diameter: SIZES
      }
    }
    chart: {
      title: {
        fontSize: SIZES
        borderWidth: SIZES // 20
        paddingLeft: SIZES
        lineHeight: SIZES
      }
      desc: {
        fontSize: SIZES
        paddingTop: SIZES
      }
      icon: {
        marginBottom: SIZES
        size: SIZES
      }
      blockHPadding: SIZES
    }
    rect: {
      width: SIZES
      offset: SIZES
    }
  }
}
/* eslint-enable no-restricted-globals */

const theme: ThemeInterface = {
  colors,
  sizes,
}

export default theme
