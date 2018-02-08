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
import { SlideIn } from '../../styled/Animation'

export default ({ members, primary, loaded }) => (
  <Desc>
    <ColorizedBlock primary={primary} colorBlockHeight={3.125}>
      <Members>
        {members.map((member, index) => (
          <MemberBlock key={member.key}>
            <SlideIn.horizontal slideIn={loaded} index={index}>
              <MemberAvatar src={member.avatar} alt={member.name} />
            </SlideIn.horizontal>
            <MemberInfo>
              <MemberName>
                <SlideIn.horizontal slideIn={loaded} index={index + 2}>
                  {member.name}
                </SlideIn.horizontal>
              </MemberName>
              <MemberDesc>
                <SlideIn.horizontal slideIn={loaded} index={index + 3}>
                  {member.desc}
                </SlideIn.horizontal>
              </MemberDesc>
            </MemberInfo>
          </MemberBlock>
        ))}
      </Members>
    </ColorizedBlock>
  </Desc>
)
