import * as React from 'react'
import PageBlock from '../../components/PageBlock'
import ColorizedBlock from '../../components/ColorizedBlock'
import { FeaturesSlide } from '../../App'
import {
  RippleInput,
  HighlightButton,
  ColorizedTitle,
  Desc,
  HistoryCol,
  HistoryYearLabel,
  HistoryItem,
} from '../../styled/Common'

const historys = [
  {
    time: '2018',
    items: [
      'lorem',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
    ],
  },
  {
    time: '2019',
    items: [
      'lorem',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
    ],
  },
  {
    time: '2020',
    items: [
      'lorem',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
    ],
  },
  {
    time: '2021',
    items: [
      'lorem',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
    ],
  },
  {
    time: '2022',
    items: [
      'lorem',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit',
    ],
  },
]

export default props => (
  <PageBlock blocks={[FeaturesSlide]} key={FeaturesSlide.title} {...props}>
    <ColorizedBlock primary={false}>
      <ColorizedTitle primary={false} h1>
        Features
      </ColorizedTitle>
      <Desc>
        {historys.map(history => (
          <HistoryCol>
            <HistoryYearLabel>{history.time}</HistoryYearLabel>
            {history.items.map(item => <HistoryItem>{item}</HistoryItem>)}
          </HistoryCol>
        ))}
      </Desc>
    </ColorizedBlock>
  </PageBlock>
)
