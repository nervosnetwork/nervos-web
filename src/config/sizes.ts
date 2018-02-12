export type SIZES = number

export default {
  root: 16,
  input: {
    fontSize: 2,
  },
  header: {
    height: 10, // 160
    paddingTop: 6.25,
    paddingBottom: 0,
    navs: {
      nav: {
        marginLeft: 4.125,
        height: 1.5,
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
      },
    },
  },
  slogan: {
    container: {
      paddingTop: 3,
      paddingBottom: 10.625,
      borderWidth: 0.5,
      borderLength: 32.5,
      paddingRight: 8.5,
    },
    fontSize: 6.67, // 80pt
    lineHeight: 1.2, // 96pt
    paddingBottom: 3.4375,
  },
  homepageDesc: {
    fontSize: 1.6,
    lineHeight: 1.4,
    paddingBottom: 3.4375,
  },
  dashLineWidth: 0.125, // 2
  centerBlockMaxWidth: 94.625, // 1514
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
      fontSize: 3.33, // 40pt
      borderWidth: 1.25, // 20
      paddingLeft: 2,
      lineHeight: 4, // 48pt
    },
    desc: {
      fontSize: 1.375,
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
  rect: {
    width: 78,
    offset: 42,
  },
  members: {
    container: {
      height: 12.5,
    },
    member: {
      marginTop: 3,
      name: {
        fontSize: 4, // 48pt
      },
    },
  },
  screen: {
    title: {
      fontSize: 3.33, // 40pt
      lineHeight: 1.75,
      borderWidth: 0.375,
    },
    subtitle: {
      fontSize: 2.5,
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
