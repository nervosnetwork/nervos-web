import * as React from 'react'
import { homepageBlocks as blocks } from '../../routes'
import TeamBlock from '../../components/TeamBlock'

const members = [
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    avatar: 'https://www.cryptape.com/images/headerBlockImg_698f6.png',
    name: 'Cryptape',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
]

export default TeamBlock({
  blocks,
  displayName: 'Advisors',
  members,
})
