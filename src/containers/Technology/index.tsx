import * as React from 'react'
import { I18n } from 'react-i18next'
import ColorizedBlock from '../../components/ColorizedBlock'
import { ChartIcon } from '../../styled/Common'
import { Technology, Technologies } from '../../styled/Layout'
import { TechnologyTitle, ChartDesc } from '../../styled/Text'
import { RouterProps } from '../../routes'
import { SlideIn } from '../../styled/Animation'
import ScreenBlock from '../../components/ScreenBlock'
import { IChart } from './type'

/* eslint-disable global-require */
const highEffeciencyImg = require('../../images/high_efficiency.svg') as string
const identityImg = require('../../images/identity.svg') as string
const commonKnowledgeImg = require('../../images/commonKnowledge.svg') as string
/* eslint-enable global-require */

const screenInfo: { title: string; subtitle: string } = {
  title: 'Technology',
  subtitle: '',
}

const charts: IChart[] = [
  {
    title: 'Common Knowledge Base',
    key: 'Common Knowledge Base',
    desc:
      'NERVOS 针对共同知识做了更泛化的抽象，比特币的 UTXO 模型 和 以太坊 Account 模型， 都可以在此泛化抽象之上轻松实现出来。 NERVOS 不在只是 『共享账本』， 而是真正意义上的 『共同知识库』。',
    img: commonKnowledgeImg,
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
    img: highEffeciencyImg,
    primary: true,
  },
]

const Chart = ({ img, title, desc, key, index, primary, loaded }) => (
  <I18n ns="translations" key={key}>
    {(t, { i18n }) => (
      <Technology
        key={key}
        // index={index}
      >
        <SlideIn.horizontal slideIn={loaded} index={5 * index}>
          <ChartIcon src={img} alt={title} />
          <TechnologyTitle>{t(title)}</TechnologyTitle>
          <ChartDesc>{t(desc)}</ChartDesc>
        </SlideIn.horizontal>
      </Technology>
    )}
  </I18n>
)

const Tech = (props: { charts: IChart[]; loaded: boolean }) => (
  <React.Fragment>
    <Technologies>
      {props.charts.map((block, index) =>
        Chart({ ...block, index, loaded: props.loaded }),
      )}
    </Technologies>
  </React.Fragment>
)
const ScreenBlocked = ScreenBlock({ charts, screenInfo })(Tech)

export default (props: RouterProps) => <ScreenBlocked {...props} />
