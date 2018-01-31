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
import { FadeInDiv } from '../../styled/Animation'
import { PageBlockProps, PageBlockState, IPageBlock } from './type.d'

export default class PageBlock extends React.Component<
  PageBlockProps,
  PageBlockState
  > {
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
  container: any
  render () {
    const { props } = this
    const { loaded } = this.state
    return (
      <FadeInDiv fadeIn={loaded}>
        <CenterBlock>
          <CenterBlockTitles>
            {props.blocks.map((block, index) => (
              <CenterBlockTitle key={block.title}>
                <CenterBlockIndex>
                  {`00${index + 1}`.slice(-2)}.
                </CenterBlockIndex>
                {props.blocks.length > 1 ? null : <br />}
                {block.title}
              </CenterBlockTitle>
            ))}
          </CenterBlockTitles>
          <CenterBlockContent>{props.children}</CenterBlockContent>
        </CenterBlock>
      </FadeInDiv>
    )
  }
}
