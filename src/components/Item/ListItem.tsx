import React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Post } from 'types/ListLayout.types'
import { Link } from 'gatsby'
import { mediaQuery } from '../../theme/breakpoints'
const ThumbnailImage = styled(GatsbyImage)`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
  flex-shrink: 0;

  ${mediaQuery.sm} {
    width: 100%;
    height: 100%;
    margin-right: 0;
    margin-bottom: 5px;
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 180px;
  transition: background-color 0.3s ease-in-out;
  align-items: center;
  margin-bottom: 20px;

  &:hover {
    background-color: #c5ccc82a; /* ✅ 연한 회색 배경 */
  }

  ${mediaQuery.sm} {
    min-height: 120px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  justify-content: space-between;

  ${mediaQuery.sm} {
    height: 100%;
    width: 100%;
  }
`

const Title = styled.h2`
  font-size: 18px;
  margin: 8px 0;
  color: #333;
  display: -webkit-box; /* 플렉스 박스를 사용한 줄 제한 */
  -webkit-line-clamp: 2; /* 최대 줄 수를 2줄로 제한 */
  -webkit-box-orient: vertical; /* 세로 방향으로 박스를 생성 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 말줄임표(...) 적용 */
  word-break: break-word; /* 단어 단위로 줄 바꿈 */

  ${mediaQuery.sm} {
    font-size: 14px;
  }
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

  ${mediaQuery.sm} {
    font-size: 10px;
    height: 20px;
    max-height: 30px;
  }
`

const TopContainer = styled.div``

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaQuery.sm} {
    align-items: flex-end;
  }
`

const Tags = styled.div`
  display: flex;
  gap: 8px;

  ${mediaQuery.sm} {
    gap: 5px;
  }
`

const Tag = styled.span`
  font-size: 12px;
  color: #fff;
  background-color: rgb(69, 65, 64);
  padding: 4px 8px;
  border-radius: 8px;

  ${mediaQuery.sm} {
    font-size: 10px;
    padding: 3px 6px;
  }
`

const Date = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: rgb(180, 180, 180);
  font-size: 13px;

  ${mediaQuery.sm} {
    font-size: 10px;
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #919497;
  margin: 5px 0;
`
const ListItem = ({ post }: { post: Post }) => {
  return (
    <>
      <Link to={`/posts/${post.frontmatter?.slug}`}>
        <ItemContainer>
          <ThumbnailImage
            image={post.frontmatter?.thumbnail.childImageSharp.gatsbyImageData}
            alt={post.frontmatter?.title}
          />

          <ContentContainer>
            <TopContainer>
              <Title>{post.frontmatter?.title}</Title>
              <Content>{post.frontmatter?.summary}</Content>
            </TopContainer>
            <BottomContainer>
              <Tags>
                {post.frontmatter?.tags.map((tag, index) => (
                  <Tag key={index}># {tag}</Tag>
                ))}
              </Tags>
              <Date>{post.frontmatter?.date}</Date>
            </BottomContainer>
          </ContentContainer>
        </ItemContainer>
      </Link>
      <Divider />
    </>
  )
}

export default ListItem
