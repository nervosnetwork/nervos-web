import colors, { COLORS } from './colors'
import sizes from './sizes'

export interface ThemeInterface {
  colors: {
    primary: COLORS
    highlight: COLORS
    background: COLORS
    plain: COLORS
    assist: COLORS
    darkBackgroud: COLORS
  }
  sizes: {
    root: number
    header: {
      height: number
      paddingTop: number
      paddingBottom: number
    }
    footer: {
      paddingTop: number
      paddingBottom: number
      marginTop: number
      logo: {
        height: number
      }
      nav: {
        fontSize: number
      }
    }
    slogan: {
      container: {
        paddingTop: number
        paddingBottom: number
        borderWidth: number
        borderLength: number
        paddingRight: number
      }
      fontSize: number
      lineHeight: number
      paddingBottom: number
    }
    homepageDesc: {
      fontSize: number
      lineHeight: number
      paddingBottom: number
    }
    centerBlockMaxWidth: number
    centerBlockWidth: string // use '%'
    navSpan: number
    dashLineWidth: number
    centerBlockTitleVSpan: number
    navItemHeight: number
    blockTitleHeight: number
    subscribeBtnFontSize: number
    secondaryTitleFontSize: number
    subscribeFormLineHeight: number
    subscribeFormLineWidth: number
    highlightBtnWidth: number
    highlightBtnHeight: number
    memberBlockHeight: number
    pageBlockMarginTop: number
    centerBlockTitleWidth: number
    memberNameFontSize: number
    slideNav: {
      top: number
      left: number
    }
    historyCircleDiameter: number
    historyCircleBandWidth: number
    historyColBorderBottomWidth: number
    historyItemIconDiameter: number
    HistoryColPaddingTop: number
    HistoryColPaddingLeft: number
    HistoryYearLabelPaddingBottom: number
    HistoryItemHPadding: number
    HistoryItemMarginBottom: number
    chart: {
      title: {
        fontSize: number
        borderWidth: number // 20
        paddingLeft: number
      }
      desc: {
        fontSize: number
        paddingTop: number
      }
      icon: {
        marginBottom: number
        size: number
      }
      blockHPadding: number
    }
    rect: {
      width: number
      offset: number
    }
    inputFontSize: number
    screen: {
      title: {
        fontSize: number
        lineHeight: number
        borderWidth: number
      }
      subtitle: {
        fontSize: number
      }
      titleContainer: {
        marginTop: number
        marginBottom: number
      }
      marginBottom: number
      blockMaxWidth: number // 1514
      blockWidthPercent: string // use '%'
      desc: {
        paddingLeft: number
        paddingTop: number
        fontSize: number
      }
    }

    colorizedBlock: {
      color: {
        width: number
        height: number
      }
      paddingLeft: number
    }
  }
}

const theme: ThemeInterface = {
  colors,
  sizes,
}

export default theme
