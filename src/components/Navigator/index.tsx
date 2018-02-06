import * as React from 'react'
// import { IPageBlock } from '../../components/PageBlock/type.d'
import { SlideNavs, SlideNav } from '../../styled/Common'
import { SlideOut } from '../../styled/Animation'
import { IPage } from '../../routes'

interface NavigatorProps {
  slideIn: boolean
  navs: IPage[]
  currentPath: string
  onNav: (url) => React.MouseEventHandler<HTMLElement>
}
const Navigator: React.SFC<NavigatorProps> = ({
  navs,
  onNav,
  currentPath,
  slideIn,
}) => (
  <SlideNavs>
    {navs.map((block, index) => (
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
