// / <reference path="../../typings/custom.d.ts" />
import * as React from 'react'
import PageBlock from '../../components/PageBlock'
import { IPageBlock } from '../../components/PageBlock/type.d'
import ColorizedBlock from '../../components/ColorizedBlock'
import {TechBlock} from '../../App'

/* eslint-disable global-require */
const highEffeciencyImg = require('../../images/high_efficiency.svg') as string
const identityImg = require('../../images/identity.svg') as string
const scalableImg = require('../../images/scalable.svg') as string
/* eslint-enable global-require */

const TechChild = () => (
  <div>
    <ColorizedBlock />
    <img src={highEffeciencyImg} alt="High Efficiency" />
    <img src={identityImg} alt="identity" />
    <img src={scalableImg} alt="scalable" />
  </div>
)

export default (props) => (
  <PageBlock
    blocks={[TechBlock]}
    key={TechBlock.title}
    {...props}
  >
    <TechChild />
  </PageBlock>
)
