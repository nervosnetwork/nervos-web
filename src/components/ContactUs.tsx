import * as React from 'react'
import { Common as imgs } from '../config/imgMap'

const css = require('../styles/contactUs.scss')

export default (props) => {
  let { className } = props
  className = className === undefined ? '' : className
  const label = 'Contact Us'
  const img = imgs.EMAIL
  const imgH = imgs.EMAILHOVER
  return (
    <div className={`${css.container} ${className}`}>
      <img className={`${css.unhoverRender} ${css.img}`} alt='' src={`${img}`} />
      <img className={`${css.hoverRender} ${css.img}`} alt='' src={`${imgH}`} />
      <span className={css.label}>{label}</span>
    </div>
  )
}
