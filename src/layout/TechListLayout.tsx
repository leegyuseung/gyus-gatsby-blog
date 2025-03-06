import React from 'react'
import styled from '@emotion/styled'
import ListItem from 'components/Item/ListItem'
import { ListLayoutProps } from 'types/ListLayout.types'

const ListContainer = styled.div`
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

const TechLayOut = styled.div`
  width: 100%; /* 너비를 꽉 차게 설정 */
`

const ListLayout = ({ posts }: ListLayoutProps) => {
  return (
    <ListContainer>
      <SectionTitle># Tech</SectionTitle>
      <TitleDivider />
      {posts.edges.map((post, index) => {
        return (
          <TechLayOut>
            <ListItem key={index} post={post.node} />
          </TechLayOut>
        )
      })}
    </ListContainer>
  )
}

export default ListLayout
