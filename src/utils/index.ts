const log = (...arg) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('>>>', ...arg)
  }
}
// const pathFile = (name, suffix, dirPath) => `${dirPath + name}.${suffix}`

// const pathCss = (name, suffix, dirPath = '../../styles/') =>
//   `${dirPath + name}.${suffix}`

// const pathImg = (name, suffix = 'png', dirPath = '../../images/') =>
//   `${dirPath}${name}.${suffix}`

// export { log, pathFile, pathCss, pathImg }
export { log, }

export default {}
