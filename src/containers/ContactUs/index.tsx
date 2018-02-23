// / <reference path="../../typings/custom.d.ts" />
import * as React from 'react'
import { I18n } from 'react-i18next'
import ColorizedBlock from '../../components/ColorizedBlock'
import { RouterProps } from '../../routes'
import {
  RippleInput,
  SubscribeButton,
  SubscribeFormLine,
} from '../../styled/Common'
import { SubscribeButtonContainer } from '../../styled/Layout'
import { Desc } from '../../styled/Text'
import { SlideIn } from '../../styled/Animation'
import ScreenBlock from '../../components/ScreenBlock'

const screenInfo: { title: string; subtitle: string } = {
  title: 'Keep You Update',
  subtitle: 'Subscribe To Our Newsletter',
}
const ContactUs = props => (
  <I18n ns="translations">
    {(t, { i18n }) => (
      <Desc>
        <ColorizedBlock colorBlock colorBlockHeight={4}>
          <form
            action="https://ezcook.us17.list-manage.com/subscribe/post?u=6b6750d23d175a99aa207330c&amp;id=405f6d7e8b"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <SlideIn.horizontal slideIn={props.loaded} index={6}>
              <SubscribeFormLine>
                <RippleInput name="LNAME" placeholder={t('Your Name')} />
              </SubscribeFormLine>
            </SlideIn.horizontal>
            <SlideIn.horizontal slideIn={props.loaded} index={10}>
              <SubscribeFormLine>
                <RippleInput name="EMAIL" placeholder={t('E-mail')} />
                <SubscribeButtonContainer>
                  <SlideIn.horizontal slideIn={props.loaded} index={14}>
                    <SubscribeButton type="submit">
                      {t('Subscribe')}
                    </SubscribeButton>
                  </SlideIn.horizontal>
                </SubscribeButtonContainer>
              </SubscribeFormLine>
            </SlideIn.horizontal>
          </form>
        </ColorizedBlock>
      </Desc>
    )}
  </I18n>
)

const ScreenBlocked = ScreenBlock({ screenInfo })(ContactUs)

export default (props: RouterProps) => <ScreenBlocked {...props} />
