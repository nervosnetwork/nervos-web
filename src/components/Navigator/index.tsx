import * as React from 'react'
import { homepageBlocks } from '../../routes'
import { IPageBlock } from '../../components/PageBlock/type.d'
import { SlideNavs, SlideNav } from '../../styled/Common'
import { FadeOutDiv } from '../../styled/Animation'

interface NavigatorProps {
  fadeIn: boolean
  blocks: IPageBlock[]
  // location: Location
  currentPath: string
  onNav: (url) => React.MouseEventHandler<HTMLElement>
}
const Navigator: React.SFC<NavigatorProps> = ({
  blocks,
  onNav,
  currentPath,
  fadeIn,
}) => (
  <FadeOutDiv fadeOut={!fadeIn}>
    <SlideNavs>
      {blocks.map(block => (
        <SlideNav
          onClick={e => {
            onNav(block.path)(e)
          }}
          active={currentPath === block.path}
        />
      ))}
    </SlideNavs>
  </FadeOutDiv>
)

export default Navigator
