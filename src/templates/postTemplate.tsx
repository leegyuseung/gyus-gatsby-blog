import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Path } from '../routes/path'
import React from 'react'
import styled from '@emotion/styled'
import PostLayout from '../layout/PostLayout'
import Logo from '../components/Common/Logo'
import SEO from 'components/SEO'

const Title = styled.h1`
  font-size: 30px;
  margin-top: 20px; // 상단 여백 추가
`

const Date = styled.p`
  font-size: 11px;
  color: rgb(180, 180, 180);
  margin-left: auto; /* 왼쪽 여백을 최대한 줘서 오른쪽 정렬 */
`

const TopContainer = styled.div`
  display: flex;
  flex-direction: column; /* 가로 정렬 */
`

const ProfileWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`
const Profile = styled.div`
  padding-left: 5px;
`

const Writer = styled.span`
  font-size: 13px;
  font-weight: 500;
`

const Content = styled.div`
  font-size: 14px;
  line-height: 1.6;
`

const StyledGatsbyImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin: 20px 0;
`

export default function PostTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark
  const image = getImage(frontmatter.thumbnail.childImageSharp.gatsbyImageData)

  return (
    <PostLayout>
      <SEO title={frontmatter.title} />

      <TopContainer>
        <Title>{frontmatter.title}</Title>
        <ProfileWrapper>
          <Logo width={35} height={35} radius={'20px'} path={Path.github} />
          <Profile>
            <Writer>{frontmatter.writer}</Writer>
            <Date>{frontmatter.kodate}</Date>
          </Profile>
        </ProfileWrapper>
      </TopContainer>
      {image && <StyledGatsbyImage image={image} alt={frontmatter.title} />}
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </PostLayout>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        writer
        kodate
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`
