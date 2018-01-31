// / <reference path="../../typings/custom.d.ts" />
import * as React from 'react'
import PageBlock from '../../components/PageBlock'
import ColorizedBlock from '../../components/ColorizedBlock'
import { ContactMeBlock} from '../../App'
import { RippleInput, HighlightButton} from '../../styled/Common'

const ContactMeChild = () => (
  <div>
    <ColorizedBlock />
  </div>
)

export default (props) => (
  <PageBlock
    blocks={[ContactMeBlock]}
    key={ContactMeBlock.title}
    {...props}
  >
    <RippleInput placeholder="Your Name" />
    <RippleInput placeholder="E-Mail" />
    <HighlightButton>
      Subscribe
    </HighlightButton>
    <ContactMeChild />
  </PageBlock>
)
