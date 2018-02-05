import * as React from 'react'
import { homepageBlocks as blocks } from '../../routes'
import TeamBlock from '../../components/TeamBlock'

const members = [
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape1',
    key: 'Cryptape1',
    desc: 'Chinese actors, directors, screenwriters.',
  },
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape2',
    key: 'Cryptape2',
    desc: 'Chinese actors, directors, screenwriters.',
  },
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape3',
    key: 'Cryptape3',
    desc: 'Chinese actors, directors, screenwriters.',
  },
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape4',
    key: 'Cryptape4',
    desc: 'Chinese actors, directors, screenwriters.',
  },
]

export default TeamBlock({
  blocks,
  displayName: 'Advisors',
  members,
})
