export type SIZES = number

export default {
  root: 16,
  input: {
    fontSize: 2,
  },
  // letterSpacing: 0.3125,
  letterSpacing: 0.08,
  header: {
    height: 10, // 160
    paddingTop: 6.25,
    paddingBottom: 0,
    navs: {
      nav: {
        marginLeft: 4.125,
        height: 1.5,
        fontSize: 1.5,
      },
    },
  },
  footer: {
    paddingTop: 5.25,
    paddingBottom: 5.25,
    marginTop: 6,
    logo: {
      height: 9.875,
    },
    navs: {
      nav: {
        fontSize: 1.125,
        // fontSize: 2.5,
      },
    },
  },
  slogan: {
    container: {
      paddingTop: 3.5,
      // paddingBottom: 10.625,
      paddingBottom: 6,
      borderWidth: 0.5,
      borderLength: 32.5,
      // paddingRight: 8.5,
      paddingRight: 24,
    },
    // fontSize: 6.67, // 80pt
    fontSize: 5,
    lineHeight: 1.2, // 96pt
    // paddingBottom: 3.4375,
    paddingBottom: 3.4,
  },
  homepageDesc: {
    fontSize: 1.6,
    lineHeight: 1.25,
    paddingBottom: 4.3375,
  },
  dashLineWidth: 0.125, // 2
  subscribe: {
    form: {
      lineHeight: 5.4,
      lineWidth: 30.18,
      button: {
        fontSize: 1.125,
        width: 12.5,
        height: 4,
      },
    },
  },
  history: {
    yearLabel: {
      fontSize: 1.5,
      paddingBottom: 1.75,
    },
    borderCircle: {
      diameter: 1.25,
      bandWidth: 0.3125,
    },
    col: {
      borderBottomWidth: 0.3125,
      paddingTop: 2.5,
      paddingLeft: 0.93,
    },
    item: {
      HPadding: 0.625,
      marginBottom: 1.5625,
    },
    index: {
      diameter: 0.3125,
    },
  },
  chart: {
    title: {
      // fontSize: 3.33, // 40pt
      fontSize: 2.5,
      borderWidth: 1.25, // 20
      paddingLeft: 1.25,
      paddingBottom: 4.8,
      // lineHeight: 4, // 48pt
      lineHeight: 2.5,
    },
    desc: {
      // fontSize: 1.375,
      fontSize: 1,
      paddingTop: 0,
    },
    icon: {
      marginBottom: 6.25,
      size: 11.5,
    },
    // blockHPadding: 9.25,
    blockHPadding: 0,
  },
  slideNav: {
    top: 50,
    left: 6.25,
  },
  rect: {
    width: 85,
    offset: 40,
  },
  members: {
    container: {
      height: 12.5,
    },
    member: {
      marginTop: 5,
      marginRight: 6,
      avatar: {
        // marginBottom: 2,
        marginBottom: 0,
      },
      name: {
        // fontSize: 4, // 48pt
        fontSize: 3, // 48px
      },
      desc: {
        fontSize: 1.5,
      },
    },
  },
  screen: {
    title: {
      // fontSize: 3.33, // 40pt
      // fontSize: 2.5,
      fontSize: 3,
      lineHeight: 2,
      borderWidth: 0.875,
      marginTop: 15,
    },
    subtitle: {
      fontSize: 1.875,
    },
    titleContainer: {
      marginTop: 5,
      marginBottom: 10.25,
    },
    marginBottom: 20,
    blockMaxWidth: 101, // 1616
    blockWidthPercent: '100%',
    desc: {
      // paddingLeft: 8.5,
      paddingLeft: 10.5,
      paddingTop: 0,
      fontSize: 1.375,
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
