import * as React from 'react'
import { homepageBlocks } from '../../routes'
import { IPageBlock } from '../../components/PageBlock/type.d'
import { SlideNavs, SlideNav } from '../../styled/Common'
import { SlideOut } from '../../styled/Animation'

interface NavigatorProps {
  slideIn: boolean
  blocks: IPageBlock[]
  currentPath: string
  onNav: (url) => React.MouseEventHandler<HTMLElement>
}
const Navigator: React.SFC<NavigatorProps> = ({
  blocks,
  onNav,
  currentPath,
  slideIn,
}) => (
  <SlideNavs>
    {blocks.map((block, index) => (
      <SlideOut.vertical slideOut={!slideIn} index={index} key={block.path}>
        <SlideNav
          onClick={e => {
            onNav(block.path)(e)
          }}
          active={currentPath === block.path}
        />
      </SlideOut.vertical>
    ))}
  </SlideNavs>
)

export default Navigator
