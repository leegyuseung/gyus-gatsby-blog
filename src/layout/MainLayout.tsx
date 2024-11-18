import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MainPageProps } from 'types/MainPage.types'

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`

const PostList = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center; /* 가운데 정렬 */
  padding: 20px;
`

const PostItem = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: flex-start; /* 왼쪽 정렬 */
  width: 300px;
  margin-bottom: 20px;
  text-align: left; /* 텍스트 왼쪽 정렬 */
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

const Thumbnail = styled(GatsbyImage)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
`

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 5px 0;
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
      <SectionTitle>Recent Posts</SectionTitle>
      <PostList>
        {/* Tech Posts */}
        <div>
          <h3>Tech</h3>
          {techPosts.slice(0, 5).map(post => (
            <PostItem key={post.node.id}>
              <Link to={`/posts/${post.node.id}`}>
                <Thumbnail
                  image={
                    post.node.frontmatter.thumbnail.childImageSharp
                      .gatsbyImageData
                  }
                  alt={post.node.frontmatter.title}
                />
              </Link>
              <Title>{post.node.frontmatter.title}</Title>
              <Date>{post.node.frontmatter.date}</Date>
            </PostItem>
          ))}
        </div>

        {/* Diary Posts */}
        <div>
          <h3>Diary</h3>
          {diaryPosts.slice(0, 5).map(post => (
            <PostItem key={post.node.id}>
              <Link to={`/posts/${post.node.id}`}>
                <Thumbnail
                  image={
                    post.node.frontmatter.thumbnail.childImageSharp
                      .gatsbyImageData
                  }
                  alt={post.node.frontmatter.title}
                />
              </Link>
              <Title>{post.node.frontmatter.title}</Title>
              <Date>{post.node.frontmatter.date}</Date>
            </PostItem>
          ))}
        </div>
      </PostList>
    </div>
  )
}

export default MainLayout
