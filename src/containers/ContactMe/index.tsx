// / <reference path="../../typings/custom.d.ts" />
import * as React from 'react'
import PageBlock from '../../components/PageBlock'
import ColorizedBlock from '../../components/ColorizedBlock'
import { homepageBlocks as blocks } from '../../routes'
import {
  RippleInput,
  HighlightButton,
  ColorizedTitle,
  Desc,
  SubscribeFormLine,
  SubscribeButtonContainer,
} from '../../styled/Common'

export default props => (
  <PageBlock blocks={blocks} displayName="Contact Me" {...props}>
    <ColorizedBlock>
      <ColorizedTitle primary h1>
        Subscribe To Our NewsLetter
      </ColorizedTitle>
      <Desc>
        <SubscribeFormLine>
          <RippleInput placeholder="Your Name" />
        </SubscribeFormLine>
        <SubscribeFormLine>
          <RippleInput placeholder="E-Mail" />
          <SubscribeButtonContainer>
            <HighlightButton>Subscribe</HighlightButton>
          </SubscribeButtonContainer>
        </SubscribeFormLine>
      </Desc>
    </ColorizedBlock>
  </PageBlock>
)
