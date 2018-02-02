import colors, { COLORS } from './colors'
import sizes, { SIZES } from './sizes'

export interface ThemeInterface {
  colors: {
    primary: COLORS
    highlight: COLORS
    background: COLORS
    plain: COLORS
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
    descFontSize: SIZES
    primaryTitleFontSize: string
    secondaryTitleFontSize: SIZES
    titleColorBlockWidth: string
    titleColorBlockRightSpan: string
    descLeftPadding: string
    descTopPadding: string
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
    chartDescPaddingTop: string
    memberNameFontSize: string
    slideNavTopMargin: string
    slideNavLeftMargin: string
    chartIconMarginBottom: string
    chartIconSize: string
    chartBlockPaddingRight: string
    HistoryColPaddingTop: string
    HistoryColPaddingLeft: string
    HistoryYearLabelPaddingBottom: string
    HistoryItemHPadding: string
    ChartTitleFontSize: string
    rectWidth: string
    rectHeight: string
    rectOffset: string
  }
}

const theme: ThemeInterface = {
  colors,
  sizes,
}

export default theme
