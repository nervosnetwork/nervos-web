// / <reference path="../../typings/custom.d.ts" />
import * as React from 'react'
import { Header, Logo, Slogan } from '../../styled/Common'
// import PageBlock, { Block } from '../../components/PageBlock'
import PageBlock from '../../components/PageBlock'
import { IPageBlock } from '../../components/PageBlock/type.d'
import ColorizedBlock from '../../components/ColorizedBlock'

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

const blocks: IPageBlock[] = [
  { title: 'Technology', marginBottom: '18.125rem', children: <TechChild /> }, // 290
  { title: 'Contact Us', marginBottom: '21.25rem', children: 'Contact' }, // 340
  { title: 'Features', marginBottom: '15.3125rem', children: 'Features' }, // 245
  { title: 'Team Members', marginBottom: '15.4375rem', children: 'Team' }, // 247
  { title: 'Advisors', marginBottom: '15.5625rem', children: 'Advisors' }, // 249
  { title: 'Supporter', marginBottom: '13.5625rem', children: 'Supporter' }, // 217
]

const slogan = (
  <Slogan>
    Blockchain<br />
    Commonwealth<br />
    Of the 7.6<br />
    Billion People
  </Slogan>
)

export default (title, index) => (
  <PageBlock blocks={blocks} marginBottom="334px">
    {slogan}
  </PageBlock>
)
