export enum SIZES {
  F1 = '0.5rem',
  F2 = '0.75rem',
  F3 = '1rem',
  F4 = '1.125rem',
  F5 = '1.25rem',
  F6 = 1.375,

  F7 = '1.5rem',
  F8 = '1.75rem',
  F9 = '2rem',
  F_MAX = 4.125,
}

export default {
  root: '16px',
  blockTitleHeight: SIZES.F4,
  header: {
    height: 10, // 160
    paddingTop: 6.25,
    paddingBottom: 0,
  },
  slogan: {
    container: {
      // paddingTop: 12.875,
      paddingTop: 3,
      paddingBottom: 14.625,
      borderWidth: 0.5,
      borderLength: 32.5,
      paddingRight: 8.5,
    },
    fontSize: SIZES.F_MAX,
    lineHeight: 1.4,
    paddingBottom: 3.4375,
  },
  homepageDesc: {
    fontSize: 1.6,
    lineHeight: 1.4,
    paddingBottom: 3.4375,
  },
  dashLineWidth: 0.125, //2
  centerBlockTitleVSpan: '3rem', // 48
  navSpan: 4.125, // 66
  navItemHeight: SIZES.F7,
  centerBlockMaxWidth: '94.625rem', // 1514
  centerBlockWidth: '78.8%',
  subscribeBtnFontSize: SIZES.F4,
  primaryTitleFontSize: '3.875rem',
  secondaryTitleFontSize: SIZES.F9,
  subscribeFormLineHeight: '5.4rem',
  subscribeFormLineWidth: '30.18rem',
  highlightBtnWidth: '12.5rem',
  highlightBtnHeight: '4rem',
  historyCircleDiameter: '1.25rem', // 20
  historyCircleBandWidth: '0.3125rem', // 5
  historyColBorderBottomWidth: '0.3125rem', // 5
  historyItemIconDiameter: '0.3125rem', // 5
  pageBlockMarginTop: '7rem', // 112
  centerBlockTitleWidth: '15rem', // 240
  chart: {
    title: {
      fontSize: 2,
      borderWidth: 1.25, // 20
      paddingLeft: 2,
    },
    desc: {
      fontSize: 1.375,
      // paddingTop: 3.125,
      paddingTop: 0,
    },
    icon: {
      marginBottom: 6.25,
      size: 11.5,
    },
    blockHPadding: 9.25,
  },
  slideNav: {
    top: 50,
    left: 6.25,
  },
  HistoryColPaddingTop: '2.5rem',
  HistoryColPaddingLeft: '0.93rem',
  HistoryYearLabelPaddingBottom: '1.75rem',
  HistoryItemHPadding: '0.625rem',
  rect: {
    width: 78,
    offset: 42,
  },
  inputFontSize: '2rem',
  memberBlockHeight: '12.5rem', // 200
  memberBlockDescPaddingLeft: '2.1875rem', // 35
  memberNameFontSize: '2.875rem',
  memberHPadding: '5.84rem',
  memberVPadding: '2.65rem',
  screen: {
    title: {
      fontSize: 2.5,
      lineHeight: 1.75,
      borderWidth: 0.375,
    },
    subtitle: {
      fontSize: 1.5,
    },
    titleContainer: {
      marginTop: 5,
      marginBottom: 10.25,
    },
    marginBottom: 20,
    blockMaxWidth: 94.625, // 1514
    blockWidthPercent: '78.8%',
    desc: {
      paddingLeft: 8.5,
      paddingTop: 0,
      fontSize: SIZES.F6,
    },
  },
  colorizedBlock: {
    color: {
      width: 1.25,
      height: 1,
    },
    paddingLeft: 4.65,
  },
}
