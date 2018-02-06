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
            <SlideIn.vertical slideIn={loaded} index={index}>
              <MemberAvatar src={member.avatar} alt={member.name} />
            </SlideIn.vertical>
            <MemberInfo>
              <MemberName>
                <SlideIn.vertical slideIn={loaded} index={index + 2}>
                  {member.name}
                </SlideIn.vertical>
              </MemberName>
              <MemberDesc>
                <SlideIn.vertical slideIn={loaded} index={index + 3}>
                  {member.desc}
                </SlideIn.vertical>
              </MemberDesc>
            </MemberInfo>
          </MemberBlock>
        ))}
      </Members>
    </ColorizedBlock>
  </Desc>
)
