import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Post } from 'types/ListLayout.types'

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
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: box-shadow 0.3s ease-in-out transform 0.3s ease-in-out;
  min-height: 180px;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
  }
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

const ListItem = ({
  imageData,
  post,
}: {
  imageData: IGatsbyImageData
  post: Post
}) => {
  return (
    <ItemContainer>
      {imageData && (
        <ThumbnailImage image={imageData} alt={post.frontmatter?.title} />
      )}
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
  )
}

export default ListItem
