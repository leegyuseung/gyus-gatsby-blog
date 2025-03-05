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

const ListLayout = ({ posts }: ListLayoutProps) => {
  return (
    <ListContainer>
      {posts.edges.map((post, index) => {
        const imageData =
          post.node.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData

        return <ListItem imageData={imageData} key={index} post={post.node} />
      })}
    </ListContainer>
  )
}

export default ListLayout
