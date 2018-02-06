import * as React from 'react'
import PageBlock from '../../components/PageBlock'
import ColorizedBlock from '../../components/ColorizedBlock'
import { ChartIcon } from '../../styled/Common'
import { ChartBlock, ChartsContainer } from '../../styled/Layout'
import { ChartTitle, ChartDesc } from '../../styled/Text'
import { TechSlide, RouterProps, homepageBlocks as blocks } from '../../routes'
import { SlideIn } from '../../styled/Animation'
import ScreenBlock from '../../components/ScreenBlock'
import { IChart } from './type'

/* eslint-disable global-require */
const highEffeciencyImg = require('../../images/high_efficiency.svg') as string
const identityImg = require('../../images/identity.svg') as string
const scalableImg = require('../../images/scalable.svg') as string
/* eslint-enable global-require */

const screenInfo: { title: string; subtitle: string } = {
  title: 'TECHNOLOGY',
  subtitle: '',
}

const charts: IChart[] = [
  {
    title: 'run high effiency',
    key: 'efficiency',
    desc: 'loremloremloremloremloremloremloremloremloremlorem',
    img: highEffeciencyImg,
    primary: false,
  },
  {
    title: 'identity',
    key: 'identity',
    desc: 'loremloremloremloremloremloremloremloremloremlorem',
    img: identityImg,
    primary: true,
  },
  {
    title: 'scalable',
    key: 'scalability',
    desc: 'loremloremloremloremloremloremloremloremloremlorem',
    img: scalableImg,
    primary: true,
  },
]

const Chart = ({ img, title, desc, key, index, primary, loaded }) => (
  <ChartBlock key={key}>
    <SlideIn.vertical slideIn={loaded} index={5 * index + 6}>
      <ChartIcon src={img} alt="High Efficiency" />
      <ColorizedBlock primary={primary} chart colorBlockHeight={4}>
        <ChartTitle>{title}</ChartTitle>
        <ChartDesc>{desc}</ChartDesc>
      </ColorizedBlock>
    </SlideIn.vertical>
  </ChartBlock>
)

const Tech = (props: { charts: Chart[]; loaded: boolean }) => (
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
