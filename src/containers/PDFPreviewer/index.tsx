import * as React from 'react'
import PDF from 'react-pdf-js-infinite'

const styles = require('../../styles/pdfpreviewer')

const pdf = 'nervos-ckb-7757f8.pdf'
const Download = require('../../images/download_btn.svg')

export default (props) => (
  <div className={styles.container}>
    <a
      className={styles.downloadBtn}
      href={`${process.env.STATIC_SERVER + props.match.params.version}.pdf`}
      download
      target="_blank"
    >
      <img src={Download} alt="Download" />
    </a>
    <PDF
      file={`${process.env.STATIC_SERVER + props.match.params.version}.pdf`}
      scale={3}
      style={{
        textAlign: 'center',
      }}
    />
  </div>
)
