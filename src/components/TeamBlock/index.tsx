import * as React from 'react'
import ColorizedBlock from '../../components/ColorizedBlock'
import {
  MemberAvatar,
  MemberName,
  MemberDesc,
  Members,
  Member,
} from '../../styled/Common'
import { Desc } from '../../styled/Text'
import { SlideIn } from '../../styled/Animation'

export default ({ members, primary, loaded }) => (
  <Desc>
    <ColorizedBlock primary={primary} colorBlockHeight={3.125}>
      <Members>
        {members.map((member, index) => (
          <Member key={member.key}>
            <SlideIn.horizontal slideIn={loaded} index={index}>
              <MemberAvatar src={member.avatar} alt={member.name} />
            </SlideIn.horizontal>
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
          </Member>
        ))}
      </Members>
    </ColorizedBlock>
  </Desc>
)
