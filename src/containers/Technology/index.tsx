// / <reference path="../../typings/custom.d.ts" />
import * as React from 'react'
import PageBlock from '../../components/PageBlock'
import ColorizedBlock from '../../components/ColorizedBlock'
import {
  ChartTitle,
  ChartDesc,
  ChartBlock,
  ChartIcon,
} from '../../styled/Common'
import { TechSlide, homepageBlocks as blocks } from '../../routes'
import { SlideIn } from '../../styled/Animation'

/* eslint-disable global-require */
const highEffeciencyImg = require('../../images/high_efficiency.svg') as string
const identityImg = require('../../images/identity.svg') as string
const scalableImg = require('../../images/scalable.svg') as string
/* eslint-enable global-require */

const chartbBlocks = [
  {
    title: 'run high effiency',
    key: 'efficiency',
    desc: 'loremloremloremloremloremloremloremloremloremlorem',
    img: highEffeciencyImg,
  },
  {
    title: 'identity',
    key: 'identity',
    desc: 'loremloremloremloremloremloremloremloremloremlorem',
    img: identityImg,
  },
  {
    title: 'scalable',
    key: 'scalability',
    desc: 'loremloremloremloremloremloremloremloremloremlorem',
    img: scalableImg,
  },
]

const Chart = ({ img, title, desc, key, index, loaded }) => (
  <ChartBlock key={key}>
    <SlideIn.vertical slideIn={loaded} index={5 * index + 6}>
      <ChartIcon src={img} alt="High Efficiency" />
      <ColorizedBlock>
        <ChartTitle primary>{title}</ChartTitle>
        <ChartDesc>{desc}</ChartDesc>
      </ColorizedBlock>
    </SlideIn.vertical>
  </ChartBlock>
)

const Tech = props => (
  <React.Fragment>
    {chartbBlocks.map((block, index) =>
      Chart({ ...block, index, loaded: props.loaded }),
    )}
  </React.Fragment>
)

export default props => (
  <PageBlock blocks={blocks} displayName="Technology" {...props}>
    <Tech />
  </PageBlock>
)
