import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MainPageProps } from 'types/MainPage.types'

const SectionTitle = styled.h2`
  font-size: 30px;
  text-align: start;
  color: #262a2d;
  display: inline-block; /* 텍스트 길이에 맞춰 border 생성 */
`

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch; /* stretch로 변경 */
  padding: 20px;
  width: 100%;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  justify-content: space-between;
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
  flex-shrink: 0;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 16px;
  min-height: 180px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #c5ccc82a; /* ✅ 연한 회색 배경 */
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
  margin: 5px 0;
`

const TitleDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #262a2d;
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

const Date = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: rgb(180, 180, 180);
  font-size: 13px;
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px 0;
`

const MainLayout = ({ data }: MainPageProps) => {
  const techPosts = data?.techPosts?.edges || []
  const diaryPosts = data?.diaryPosts?.edges || []

  return (
    <Main>
      <SectionTitle># Recent Posts</SectionTitle>
      <TitleDivider />
      <PostList>
        {/* Tech Po sts */}
        <TechLayOut>
          {techPosts.length > 0
            ? techPosts.slice(0, 3).map(post => (
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
                            <Tag key={tag}>#{tag}</Tag>
                          ))}
                        </Tags>
                        <Date>{post.node.frontmatter.date}</Date>
                      </BottomContainer>
                    </ContentContainer>
                  </ItemContainer>
                  <Divider />
                </Link>
              ))
            : '게시물이 없습니다 👻'}
        </TechLayOut>
        {/* Diary Posts */}
        <DiaryLayOut>
          {diaryPosts.length > 0
            ? diaryPosts.slice(0, 3).map(post => (
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
                            <Tag key={tag}>#{tag}</Tag>
                          ))}
                        </Tags>
                        <Date>{post.node.frontmatter.date}</Date>
                      </BottomContainer>
                    </ContentContainer>
                  </ItemContainer>
                  <Divider />
                </Link>
              ))
            : '게시물이 없습니다 👻'}
        </DiaryLayOut>
      </PostList>
    </Main>
  )
}

export default MainLayout
