import * as React from 'react'
import PDF from 'react-pdf-infinite'

const styles = require('../../styles/pdfpreviewer')

const Download = require('../../images/download_btn.svg')
const loadingImg = require('../../images/loading.gif')

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
      loading={
        <div className={styles.loading}>
          <img src={loadingImg} alt="loading" />
        </div>
      }
      scale={3}
      style={{
        textAlign: 'center',
      }}
    />
  </div>
)
