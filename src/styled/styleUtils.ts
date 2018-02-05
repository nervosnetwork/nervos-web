import * as styledComponents from 'styled-components'
import { StyledFunction } from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

import { ThemeInterface } from '../config/theme'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = (styledComponents as ThemedStyledComponentsModule<
  any
>) as ThemedStyledComponentsModule<ThemeInterface>

const sizes = {
  giant: 1920,
  desktop: 1500,
  screen: 1200,
  tablet: 992,
  phone: 768,
}

// const media = Object.keys(sizes).reduce((accumulator, label) => {
//   const emSize = sizes[label] / 16
//   accumulator[label] = (...args) => css`
//     @media (max-width: ${emSize}em) {
//       ${css(...args)};
//     }
//   `
//   return accumulator
// }, {})

export { css, injectGlobal, keyframes, ThemeProvider, StyledFunction }
export default styled
