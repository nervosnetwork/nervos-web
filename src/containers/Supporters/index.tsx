import * as React from 'react'
import PageBlock from '../../components/PageBlock'
import ColorizedBlock from '../../components/ColorizedBlock'
import { SupportersSlide } from '../../App'
import TeamBlock from '../../components/TeamBlock'
import {
  RippleInput,
  HighlightButton,
  ColorizedTitle,
  Desc,
  HistoryCol,
  HistoryYearLabel,
  HistoryItem,
  MemberBlock,
  MemberBlockAvatar,
  MemberBlockName,
  MemberBlockDesc,
} from '../../styled/Common'

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
  block: SupportersSlide,
  members,
})
