import React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ListLayoutProps } from 'types/ListLayout.types'

const ThumbnailImage = styled(GatsbyImage)`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
  flex-shrink: 0;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px 0;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: box-shadow 0.3s ease-in-out transform 0.3s ease-in-out;
  min-height: 180px;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
  }
`

const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
  flex-shrink: 0;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: 18px;
  margin: 8px 0;
  color: #333;
`

const Content = styled.p`
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 65px;
  max-height: 65px;
`

const TopContainer = styled.div``

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Tags = styled.div`
  display: flex;
  gap: 8px;
`

const Tag = styled.span`
  font-size: 12px;
  color: #fff;
  background-color: rgb(69, 65, 64);
  padding: 4px 8px;
  border-radius: 8px;
`

const Date = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: rgb(180, 180, 180);
  font-size: 13px;
`

const ListLayout = ({ posts }: ListLayoutProps) => {
  return (
    <ListContainer>
      {posts.map((post, index) => {
        const imageData =
          post.node.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData

        return (
          <ItemContainer key={index}>
            {imageData && (
              <ThumbnailImage
                image={imageData}
                alt={post.node.frontmatter.title}
              />
            )}
            <ContentContainer>
              <TopContainer>
                <Title>{post.node.frontmatter.title}</Title>
                <Content>{post.node.frontmatter.summary}</Content>
              </TopContainer>
              <BottomContainer>
                <Tags>
                  {post.node.frontmatter.tags.map((tag, index) => (
                    <Tag key={index}># {tag}</Tag>
                  ))}
                </Tags>
                <Date>{post.node.frontmatter.date}</Date>
              </BottomContainer>
            </ContentContainer>
          </ItemContainer>
        )
      })}
    </ListContainer>
  )
}

export default ListLayout
