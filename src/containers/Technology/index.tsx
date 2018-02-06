import * as React from 'react'
import { I18n } from 'react-i18next'
import PageBlock from '../../components/PageBlock'
import ColorizedBlock from '../../components/ColorizedBlock'
import { ChartIcon } from '../../styled/Common'
import { ChartBlock, ChartsContainer } from '../../styled/Layout'
import { ChartTitle, ChartDesc } from '../../styled/Text'
import { RouterProps } from '../../routes'
import { SlideIn } from '../../styled/Animation'
import ScreenBlock from '../../components/ScreenBlock'
import { IChart } from './type'

/* eslint-disable global-require */
const highEffeciencyImg = require('../../images/high_efficiency.svg') as string
const identityImg = require('../../images/identity.svg') as string
const scalableImg = require('../../images/scalable.svg') as string
/* eslint-enable global-require */

const screenInfo: { title: string; subtitle: string } = {
  title: 'Technology',
  subtitle: '',
}

const charts: IChart[] = [
  {
    title: 'Common Knowledge Base',
    key: 'efficiency',
    desc: 'loremloremloremloremloremloremloremloremloremlorem',
    img: highEffeciencyImg,
    primary: false,
  },
  {
    title: 'Built-in Identity',
    key: 'identity',
    desc:
      'In NERVOS, individuals and businesses can control their identities directly on the protocol layer, independent of any applications. Identities are critical for the expression of property right, which is the foundation of commerce.',
    img: identityImg,
    primary: true,
  },
  {
    title: 'Practical',
    key: 'scalability',
    desc:
      'To reach NERVOS’ goal of serving real people and businesses, we have to make practical choices to integrate with today’s financial and commercial infrastructure. We provide protocol layer stable currency for price certainty and KYC & AML solutions for businesses to meet compliance requirements.',
    img: scalableImg,
    primary: true,
  },
]

const Chart = ({ img, title, desc, key, index, primary, loaded }) => (
  <I18n ns="translations">
    {(t, { i18n }) => (
      // <ChartBlock key={key}>
      //   <SlideIn.vertical slideIn={loaded} index={5 * index + 6}>
      //     <ChartIcon src={img} alt="tech" />
      //     <ColorizedBlock primary={primary} chart colorBlockHeight={4}>
      //       <ChartTitle>{t(title)}</ChartTitle>
      //       <ChartDesc>{t(desc)}</ChartDesc>
      //     </ColorizedBlock>
      //   </SlideIn.vertical>
      // </ChartBlock>
      <SlideIn.vertical slideIn={loaded} index={5 * index + 6}>
        <ChartBlock key={key} index={index}>
          <ChartIcon src={img} alt={title} />
          <ChartDesc>{t(desc)}</ChartDesc>
        </ChartBlock>
      </SlideIn.vertical>
    )}
  </I18n>
)
// <div style={{ gridColumnStart: 2 }}>{desc}</div>

const Tech = (props: { charts: IChart[]; loaded: boolean }) => (
  <React.Fragment>
    <ChartsContainer>
      {props.charts.map((block, index) =>
        Chart({ ...block, index, loaded: props.loaded }),
      )}
    </ChartsContainer>
  </React.Fragment>
)
const ScreenBlocked = ScreenBlock({ charts, screenInfo })(Tech)

export default (props: RouterProps) => <ScreenBlocked {...props} />
