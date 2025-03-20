import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MainPageProps } from 'types/MainPage.types'
import { mediaQuery } from '../theme/breakpoints'

const SectionTitle = styled.h2`
  position: relative; /* 가상 요소 위치 기준 */
  font-size: 30px;
  text-align: start;
  color: #262a2d;
  display: inline-block; /* 텍스트 길이에 맞춰 border 생성 */

  /* 🔥 밑줄 애니메이션 */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px; /* ✅ 글자 아래 여백 조절 */
    width: 20%;
    height: 3px;
    background-color: #e61d1daf;
    transform: scaleX(0); /* 처음에는 안 보이게 */
    transform-origin: left; /* 왼쪽에서 시작 */
    animation: underlineAppear 0.6s ease-in-out forwards;

    ${mediaQuery.sm} {
      width: 35%;
    }
  }

  @keyframes underlineAppear {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  ${mediaQuery.sm} {
    font-size: 14px;
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

const TechLayOut = styled.div`
  width: 100%; /* 너비를 꽉 차게 설정 */
`

const DiaryLayOut = styled.div`
  width: 100%; /* 너비를 꽉 차게 설정 */
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #919497;
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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px 0;

  ${mediaQuery.sm} {
    padding: 10px 0;
  }
`

const MainLayout = ({ data }: MainPageProps) => {
  const techPosts = data?.techPosts?.edges || []
  const diaryPosts = data?.diaryPosts?.edges || []

  return (
    <MainContainer>
      <SectionTitle># Recent Posts</SectionTitle>
      {techPosts.length > 0
        ? techPosts.slice(0, 3).map(post => (
            <React.Fragment key={post.node.id}>
              <TechLayOut key={post.node.id}>
                <Link to={`/posts/${post.node.frontmatter.slug}`}>
                  <ItemContainer>
                    <ThumbnailImage
                      image={
                        post.node.frontmatter.thumbnail.childImageSharp
                          .gatsbyImageData
                      }
                      alt={post.node.frontmatter.title}
                    />
                    <ContentContainer>
                      <TopContainer>
                        <Title>{post.node.frontmatter.title}</Title>
                        <Content>{post.node.frontmatter.summary}</Content>
                      </TopContainer>
                      <BottomContainer>
                        <Tags>
                          {post.node.frontmatter.tags.map(tag => (
                            <Tag key={tag}># {tag}</Tag>
                          ))}
                        </Tags>
                        <Date>{post.node.frontmatter.date}</Date>
                      </BottomContainer>
                    </ContentContainer>
                  </ItemContainer>
                </Link>
                <Divider />
              </TechLayOut>
            </React.Fragment>
          ))
        : '게시물이 없습니다 👻'}
      {/* Diary Posts */}
      <DiaryLayOut>
        {diaryPosts.length > 0
          ? diaryPosts.slice(0, 3).map(post => (
              <React.Fragment key={post.node.id}>
                <Link to={`/posts/${post.node.frontmatter.slug}`}>
                  <ItemContainer>
                    <ThumbnailImage
                      image={
                        post.node.frontmatter.thumbnail.childImageSharp
                          .gatsbyImageData
                      }
                      alt={post.node.frontmatter.title}
                    />
                    <ContentContainer>
                      <TopContainer>
                        <Title>{post.node.frontmatter.title}</Title>
                        <Content>{post.node.frontmatter.summary}</Content>
                      </TopContainer>
                      <BottomContainer>
                        <Tags>
                          {post.node.frontmatter.tags.map(tag => (
                            <Tag key={tag}># {tag}</Tag>
                          ))}
                        </Tags>
                        <Date>{post.node.frontmatter.date}</Date>
                      </BottomContainer>
                    </ContentContainer>
                  </ItemContainer>
                </Link>
                <Divider />
              </React.Fragment>
            ))
          : '게시물이 없습니다 👻'}
      </DiaryLayOut>
    </MainContainer>
  )
}

export default MainLayout
