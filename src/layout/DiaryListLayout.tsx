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

const DiaryListLayout = ({ posts }: ListLayoutProps) => {
  return (
    <DiaryContainer>
      {posts.edges.map((post, index) => {
        const imageData =
          post.node.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData

        return <ListItem imageData={imageData} key={index} post={post.node} />
      })}
    </DiaryContainer>
  )
}

export default DiaryListLayout
