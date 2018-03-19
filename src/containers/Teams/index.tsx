import * as React from 'react'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'
import { Teams as imgs, } from '../../config/imgMap'

const css = require('../../styles/teams')

const peopleImgList = [
  imgs.PEOPLE1,
  imgs.PEOPLE2,
  imgs.PEOPLE3,
  imgs.PEOPLE4,
].map((img) => `${img}`)

export default class extends React.Component {
  state = {
    loaded: false,
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState(() => ({ loaded: true, }))
    }, 0)
  }

  t = null as any
  lang = null as any

  People = (props) => {
    const { people, index, } = props
    const { name, desc, } = people
    const image = peopleImgList[index]
    return (
      <div className={css.people}>
        <div className={css.image}>
          <img src={image} alt="" />
        </div>
        <div className={css.desc}>
          <div className={css.name}>{name}</div>
          <div className={css.text}>{desc.map(string => <p>{string}</p>)}</div>
        </div>
      </div>
    )
  }

  PeopleList = (props) => {
    const { People, t, } = this
    const peopleList = t('peopleList', { returnObjects: true, })
    return (
      <div>
        {peopleList.map((people, i) => <People people={people} index={i} />)}
      </div>
    )
  }

  render () {
    const { props, PeopleList, } = this
    const { loaded, } = this.state
    return (
      <I18n ns="teams">
        {(t, { i18n, }) => {
          this.t = t
          this.lang = i18n
          const title = t('title')
          return (
            <div className={css.main}>
              <div className={css.container}>
                <div className={`${css.title} fontBold`}>{title}</div>
                <PeopleList />
              </div>
            </div>
          )
        }}
      </I18n>
    )
  }
}
