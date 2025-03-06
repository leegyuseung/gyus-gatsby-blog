import React from 'react'
import styled from '@emotion/styled'
import ListItem from 'components/Item/ListItem'
import { ListLayoutProps } from 'types/ListLayout.types'

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px 0;
`
const SectionTitle = styled.h2`
  font-size: 30px;
  text-align: start;
  color: #262a2d;
  display: inline-block; /* 텍스트 길이에 맞춰 border 생성 */
`
const TitleDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #262a2d;
`

const DiaryLayOut = styled.div`
  width: 100%; /* 너비를 꽉 차게 설정 */
`

const DiaryListLayout = ({ posts }: ListLayoutProps) => {
  return (
    <DiaryContainer>
      <SectionTitle># Diary</SectionTitle>
      <TitleDivider />
      {posts.edges.map((post, index) => {
        return (
          <DiaryLayOut>
            <ListItem key={index} post={post.node} />
          </DiaryLayOut>
        )
      })}
    </DiaryContainer>
  )
}

export default DiaryListLayout
