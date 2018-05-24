import * as React from 'react'
import { createPortal } from 'react-dom'
import { I18n } from 'react-i18next'

const styles = require('../../styles/warning')

export default class extends React.Component {
  state = {
    warn: true,
  }

  hideWarn = () => {
    this.setState((state) => ({ warn: false }))
  }
  render () {
    const { warn } = this.state
    return (
      <I18n ns="global">
        {(t, { i18n }) => (
          <div
            className={styles.warning}
            style={{
              display: warn ? 'flex' : 'none',
            }}
          >
            {t('warning')}
            <span onClick={this.hideWarn} className={styles.confirm}>
              {t('confirm')}
            </span>
          </div>
        )}
      </I18n>
    )
  }
}
