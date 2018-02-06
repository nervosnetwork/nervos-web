import * as React from 'react'
import PageBlock from '../../components/PageBlock'
import ColorizedBlock from '../../components/ColorizedBlock'
import {
  MemberBlock,
  MemberAvatar,
  MemberName,
  MemberDesc,
  Members,
  MemberInfo,
} from '../../styled/Common'
import { Desc } from '../../styled/Text'

export default ({ members, primary }) => (
  <Desc>
    <ColorizedBlock primary={primary} colorBlockHeight={3.125}>
      <Members>
        {members.map(member => (
          <MemberBlock key={member.key}>
            <MemberAvatar src={member.avatar} alt={member.name} />
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberDesc>{member.desc}</MemberDesc>
            </MemberInfo>
          </MemberBlock>
        ))}
      </Members>
    </ColorizedBlock>
  </Desc>
)
