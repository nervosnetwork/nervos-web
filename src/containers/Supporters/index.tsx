import * as React from 'react'
import PageBlock from '../../components/PageBlock'
import ColorizedBlock from '../../components/ColorizedBlock'
import { homepageBlocks as blocks } from '../../routes'
import TeamBlock from '../../components/TeamBlock'

const members = [
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape1',
    key: 'Cryptape1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape2',
    key: 'Cryptape2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape3',
    key: 'Cryptape3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape4',
    key: 'Cryptape4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
]

export default TeamBlock({
  blocks,
  displayName: 'Supporters',
  members,
})
