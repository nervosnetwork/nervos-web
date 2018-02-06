// / <reference path="./type.d.ts" />
import * as React from 'react'
import {
  ScreenDiv,
  CenterBlock,
  CenterBlockTitles,
  CenterBlockTitle,
  CenterBlockIndex,
  CenterBlockContent,
} from '../../styled/Common'
import { SlideIn } from '../../styled/Animation'
import { PageBlockProps, PageBlockState, IPageBlock } from './type.d'
import Navigator from '../Navigator'

export interface PageBlockChildProps {
  loaded: boolean
}

export default (Comp: React.ReactElement<any>) =>
  class PageBlock extends React.Component<PageBlockProps, PageBlockState> {
    state = {
      loaded: false,
    }
    componentDidMount () {
      setTimeout(() => {
        this.setState(() => ({
          loaded: true,
        }))
      }, 0)
    }
    navTo = url => {
      this.props.history.push(url)
    }
    handleNavClick = url => e => {
      if (this.props.location.pathname === url) return

      this.setState({
        loaded: false,
      })
      setTimeout(() => {
        this.navTo(url)
      }, 400)
    }
    container: any
    render () {
      const { props } = this
      const { loaded } = this.state
      return (
        <SlideIn.vertical slideIn={loaded}>
          <CenterBlock>
            {props.location.pathname === '/' ? null : (
              <Navigator
                slideIn={loaded}
                currentPath={props.location.pathname}
                onNav={this.handleNavClick}
                blocks={props.blocks}
              />
            )}
            <CenterBlockTitles>
              {this.blockFilter(props.blocks, props.displayName).map(
                (block, index) => (
                  <CenterBlockTitle
                    key={block.title}
                    onClick={this.handleNavClick(block.path)}
                  >
                    {block.title}
                  </CenterBlockTitle>
                ),
              )}
            </CenterBlockTitles>
            <CenterBlockContent>
              {Comp &&
                React.cloneElement(Comp, {
                  loaded,
                })}
            </CenterBlockContent>
          </CenterBlock>
        </SlideIn.vertical>
      )
    }
  }
