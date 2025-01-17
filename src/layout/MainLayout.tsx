import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MainPageProps } from 'types/MainPage.types'

const SectionTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  text-align: start;
  color: #333;
  border: solid;
  display: inline-block; /* 텍스트 길이에 맞춰 border 생성 */
`
const SubSectionTitle = styled.text`
  display: flex;
  justify-content: flex-start; /* 부모 요소 기준으로 좌측 정렬 */
  width: 100%; /* 필요 시 부모 컨테이너를 채움 */
  font-size: 16px;
  padding-bottom: 10px;
  color: #606060;
  text-decoration: underline;
`

const PostList = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center; /* 가운데 정렬 */
  padding: 20px;
`

const PostItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left; /* 텍스트 왼쪽 정렬 */
  border-radius: 10px;
  max-height: 55px;
  max-width: 600px;
  width: 600px;
  margin-bottom: 10px;

  &:hover {
    background-color: #f2f2f2;
  }
`

const Thumbnail = styled(GatsbyImage)`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 5px;
`

const TitleCover = styled.div`
  max-width: 450px;
  overflow: hidden;
`

const DateCover = styled.div`
  max-width: 100px;
  overflow: hidden;
  text-align: right; /* 날짜를 오른쪽 정렬 */
`

const TechLayOut = styled.div`
  margin-bottom: 20px;
`

const Title = styled.text`
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word; /* 줄 바꿈 허용 */
  font-size: 16px;
  color: black;
  margin-left: 10px;
`

const Date = styled.p`
  font-size: 14px;
  color: #777;
`

const MainLayout = ({ data }: MainPageProps) => {
  const techPosts = data?.techPosts?.edges || []
  const diaryPosts = data?.diaryPosts?.edges || []

  return (
    <div>
      <SectionTitle>⭐️ Recent Posts</SectionTitle>
      <PostList>
        {/* Tech Posts */}
        <SubSectionTitle>@Tech</SubSectionTitle>
        <TechLayOut>
          {techPosts.slice(0, 5).map(post => (
            <Link to={`/posts/${post.node.id}`}>
              <PostItem key={post.node.id}>
                <Thumbnail
                  image={
                    post.node.frontmatter.thumbnail.childImageSharp
                      .gatsbyImageData
                  }
                  alt={post.node.frontmatter.title}
                />
                <TitleCover>
                  <Title>{post.node.frontmatter.title}</Title>
                </TitleCover>
                <DateCover>
                  <Date>{post.node.frontmatter.date}</Date>
                </DateCover>
              </PostItem>
            </Link>
          ))}
        </TechLayOut>
        {/* 중앙선 */}
        {/* Diary Posts */}
        <SubSectionTitle>@Diary</SubSectionTitle>
        <div>
          {diaryPosts.slice(0, 5).map(post => (
            <Link to={`/posts/${post.node.id}`}>
              <PostItem key={post.node.id}>
                <Thumbnail
                  image={
                    post.node.frontmatter.thumbnail.childImageSharp
                      .gatsbyImageData
                  }
                  alt={post.node.frontmatter.title}
                />
                <TitleCover>
                  <Title>{post.node.frontmatter.title}</Title>
                </TitleCover>
                <DateCover>
                  <Date>{post.node.frontmatter.date}</Date>
                </DateCover>
              </PostItem>
            </Link>
          ))}
        </div>
      </PostList>
    </div>
  )
}

export default MainLayout
