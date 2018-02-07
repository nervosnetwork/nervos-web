import * as React from 'react'
import { I18n } from 'react-i18next'
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
  <I18n ns="translations">
    {(t, { i18n }) => (
      <SlideNavs>
        {navs.map((block, index) => (
          <SlideOut.vertical slideOut={!slideIn} index={index} key={block.path}>
            <SlideNav
              onClick={e => {
                onNav(block.path)(e)
              }}
              active={currentPath === block.path}
              title={t(block.title || 'Homepage')}
            />
          </SlideOut.vertical>
        ))}
      </SlideNavs>
    )}
  </I18n>
)

export default Navigator
