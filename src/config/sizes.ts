export type SIZES = number

export default {
  root: 16,
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
  screen: {
    title: {
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
      paddingLeft: 10.5,
      paddingTop: 0,
      fontSize: 1.375,
    },
  },
}
