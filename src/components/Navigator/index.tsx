import * as React from 'react'
import { homepageBlocks } from '../../routes'
import { IPageBlock } from '../../components/PageBlock/type.d'
import { SlideNavs, SlideNav } from '../../styled/Common'
import { FadeOut } from '../../styled/Animation'

interface NavigatorProps {
  fadeIn: boolean
  blocks: IPageBlock[]
  currentPath: string
  onNav: (url) => React.MouseEventHandler<HTMLElement>
}
const Navigator: React.SFC<NavigatorProps> = ({
  blocks,
  onNav,
  currentPath,
  fadeIn,
}) => (
  <SlideNavs>
    {blocks.map((block, index) => (
      <FadeOut.vertical fadeOut={!fadeIn} index={index} key={block.path}>
        <SlideNav
          onClick={e => {
            onNav(block.path)(e)
          }}
          active={currentPath === block.path}
        />
      </FadeOut.vertical>
    ))}
  </SlideNavs>
)

export default Navigator
