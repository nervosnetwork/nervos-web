import * as React from 'react'
import PageBlock from '../../components/PageBlock'
import ColorizedBlock from '../../components/ColorizedBlock'
import { homepageBlocks as blocks } from '../../routes'
import { SlideIn } from '../../styled/Animation'
import {
  ColorizedTitle,
  Desc,
  HistoryCol,
  HistoryYearLabel,
  HistoryItem,
} from '../../styled/Common'

const historys = [
  {
    time: '2018',
    key: '2018',
    items: ['loremLorem ipsum dolor sit amet, consectetur adipisicing elit3'],
  },
  {
    time: '2019',
    key: '2019',
    items: [
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit3',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit4',
    ],
  },
  {
    time: '2020',
    key: '2020',
    items: [
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit3',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit4',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit5',
    ],
  },
  {
    time: '2021',
    key: '2021',
    items: [
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit3',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit4',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit5',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit6',
    ],
  },
  {
    time: '2022',
    key: '2022',
    items: [
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit3',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit4',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit5',
      'loremLorem ipsum dolor sit amet, consectetur adipisicing elit6',
    ],
  },
]

const Features = props => (
  <ColorizedBlock primary={false}>
    <ColorizedTitle primary={false} h1>
      Features
    </ColorizedTitle>
    <Desc>
      {historys.map((history, colIndex) => (
        <HistoryCol key={history.key}>
          <HistoryYearLabel>
            <SlideIn.vertical
              slideIn={props.loaded}
              fromTop
              index={8 + colIndex}
            >
              {history.time}
            </SlideIn.vertical>
          </HistoryYearLabel>
          <SlideIn.horizontal slideIn={props.loaded} index={colIndex}>
            {history.items.map((item, itemIndex) => (
              <SlideIn.horizontal
                slideIn={props.loaded}
                // index={30 + itemIndex * 5 - colIndex * 5}
                index={8 * itemIndex + 3 * colIndex}
              >
                <HistoryItem key={item}>{item}</HistoryItem>
              </SlideIn.horizontal>
            ))}
          </SlideIn.horizontal>
        </HistoryCol>
      ))}
    </Desc>
  </ColorizedBlock>
)

export default props => (
  <PageBlock blocks={blocks} displayName="Features" {...props}>
    <Features />
  </PageBlock>
)
