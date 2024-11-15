import React from 'react'
import styled from '@emotion/styled'

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
  transition: box-shadow 0.3s ease-in-out;
  min-height: 180px;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  font-size: 24px;
  margin: 8px 0;
  color: #333;
`

const Content = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 12px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 48px;
`

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const Tags = styled.div`
  display: flex;
  gap: 8px;
`

const Tag = styled.span`
  font-size: 14px;
  color: #fff;
  background-color: #007acc;
  padding: 4px 8px;
  border-radius: 4px;
`

const Date = styled.span`
  font-size: 14px;
  color: #999;
`

const posts = [
  {
    title: 'Sample Title 1',
    content:
      'This is a short summary of the post content. This example text is meant to be longer than just a few words to showcase the ellipsis effect.',
    date: '2024-11-15',
    tags: ['React', 'Gatsby'],
    imageUrl: 'https://via.placeholder.com/200',
  },
  {
    title: 'Sample Title 2',
    content:
      'Another example post with different tags. This content is longer and should demonstrate how the image size remains fixed even as the content length varies. The text should be clamped if it exceeds two lines.',
    date: '2024-11-10',
    tags: ['JavaScript', 'Frontend'],
    imageUrl: 'https://via.placeholder.com/200',
  },
]

const ListLayout = () => {
  return (
    <ListContainer>
      {posts.map((post, index) => (
        <ItemContainer key={index}>
          <Image src={post.imageUrl} alt={post.title} />
          <ContentContainer>
            <div>
              <Title>{post.title}</Title>
              <Content>{post.content}</Content>
            </div>
            <BottomContainer>
              <Tags>
                {post.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Tags>
              <Date>{post.date}</Date>
            </BottomContainer>
          </ContentContainer>
        </ItemContainer>
      ))}
    </ListContainer>
  )
}

export default ListLayout
