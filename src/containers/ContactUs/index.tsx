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
          <SlideIn.horizontal slideIn={props.loaded} index={6}>
            <SubscribeFormLine>
              <RippleInput placeholder={t('Your Name')} />
            </SubscribeFormLine>
          </SlideIn.horizontal>
          <SlideIn.horizontal slideIn={props.loaded} index={10}>
            <SubscribeFormLine>
              <RippleInput placeholder={t('E-mail')} />
              <SubscribeButtonContainer>
                <SlideIn.horizontal slideIn={props.loaded} index={14}>
                  <SubscribeButton>{t('Subscribe')}</SubscribeButton>
                </SlideIn.horizontal>
              </SubscribeButtonContainer>
            </SubscribeFormLine>
          </SlideIn.horizontal>
        </ColorizedBlock>
      </Desc>
    )}
  </I18n>
)

const ScreenBlocked = ScreenBlock({ screenInfo })(ContactUs)

export default (props: RouterProps) => <ScreenBlocked {...props} />
