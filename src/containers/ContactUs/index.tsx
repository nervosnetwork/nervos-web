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
import { SlideIn } from '../../styled/Animation'

const ContactUs = props => (
  <ColorizedBlock>
    <ColorizedTitle primary h1>
      Subscribe To Our NewsLetter
    </ColorizedTitle>
    <Desc>
      <SlideIn.horizontal slideIn={props.loaded} index={6}>
        <SubscribeFormLine>
          <RippleInput placeholder="Your Name" />
        </SubscribeFormLine>
      </SlideIn.horizontal>
      <SlideIn.horizontal slideIn={props.loaded} index={10}>
        <SubscribeFormLine>
          <RippleInput placeholder="E-Mail" />
          <SubscribeButtonContainer>
            <SlideIn.horizontal slideIn={props.loaded} index={14}>
              <HighlightButton>Subscribe</HighlightButton>
            </SlideIn.horizontal>
          </SubscribeButtonContainer>
        </SubscribeFormLine>
      </SlideIn.horizontal>
    </Desc>
  </ColorizedBlock>
)

export default props => (
  <PageBlock blocks={blocks} displayName="Contact Us" {...props}>
    <ContactUs />
  </PageBlock>
)
