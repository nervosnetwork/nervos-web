import colors, { COLORS } from './colors'
import sizes, { SIZES } from './sizes'

export interface ThemeInterface {
  colors: {
    primary: COLORS
    highlight: COLORS
    background: COLORS
    plain: COLORS
    assist: COLORS
  }
  sizes: {
    root: string
    header: {
      height: number
      paddingTop: number
      paddingBottom: number
    }
    slogan: {
      container: {
        paddingTop: number
        paddingBottom: number
        borderWidth: number
        borderLength: number
        paddingRight: number
      }
      fontSize: SIZES
      lineHeight: number
      paddingBottom: number
    }
    homepageDesc: {
      fontSize: number
      lineHeight: number
      paddingBottom: number
    }
    centerBlockMaxWidth: string
    centerBlockWidth: string
    navSpan: number
    dashLineWidth: number
    centerBlockTitleVSpan: string
    navItemHeight: SIZES
    blockTitleHeight: SIZES
    subscribeBtnFontSize: SIZES
    // descFontSize: SIZES
    primaryTitleFontSize: string
    secondaryTitleFontSize: SIZES
    subscribeFormLineHeight: string
    subscribeFormLineWidth: string
    highlightBtnWidth: string
    highlightBtnHeight: string
    historyCircleDiameter: string
    historyCircleBandWidth: string
    historyColBorderBottomWidth: string
    historyItemIconDiameter: string
    memberBlockHeight: string
    memberBlockDescPaddingLeft: string
    pageBlockMarginTop: string
    centerBlockTitleWidth: string
    memberNameFontSize: string
    slideNav: {
      top: number
      left: number
    }
    HistoryColPaddingTop: string
    HistoryColPaddingLeft: string
    HistoryYearLabelPaddingBottom: string
    HistoryItemHPadding: string
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
    inputFontSize: string
    memberHPadding: string
    memberVPadding: string
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
      blockWidthPercent: string
      desc: {
        paddingLeft: number
        paddingTop: number
        fontSize: SIZES
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
