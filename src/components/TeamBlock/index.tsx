import * as React from 'react'
import PageBlock from '../../components/PageBlock'
import ColorizedBlock from '../../components/ColorizedBlock'
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

export default ({ block, members }) => routerProps => (
  <PageBlock blocks={[block]} key={block.title} {...routerProps}>
    <ColorizedBlock primary>
      <ColorizedTitle primary h1>
        Features
      </ColorizedTitle>
      <Desc>
        {members.map(member => (
          <MemberBlock>
            <MemberBlockAvatar src={member.avatar} alt={member.name} />
            <MemberBlockName>{member.name}</MemberBlockName>
            <MemberBlockDesc>{member.desc}</MemberBlockDesc>
          </MemberBlock>
        ))}
      </Desc>
    </ColorizedBlock>
  </PageBlock>
)
