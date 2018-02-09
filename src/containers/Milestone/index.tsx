import * as React from 'react'
import ColorizedBlock from '../../components/ColorizedBlock'
import { RouterProps } from '../../routes'
import { SlideIn } from '../../styled/Animation'
import { HistoryCol, HistoryYearLabel, HistoryItem } from '../../styled/Common'
import { Desc } from '../../styled/Text'
import ScreenBlock from '../../components/ScreenBlock'

const screenInfo: { title: string; subtitle: string } = {
  title: 'Milestone',
  subtitle: '',
}

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

const Milestone = props => (
  <Desc>
    <ColorizedBlock primary={false} colorBlockHeight={3.5}>
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
                index={8 * itemIndex + 3 * colIndex}
                key={item}
              >
                <HistoryItem key={item}>{item}</HistoryItem>
              </SlideIn.horizontal>
            ))}
          </SlideIn.horizontal>
        </HistoryCol>
      ))}
    </ColorizedBlock>
  </Desc>
)

const ScreenBlocked = ScreenBlock({ historys, screenInfo })(Milestone)
export default (props: RouterProps) => <ScreenBlocked {...props} />
