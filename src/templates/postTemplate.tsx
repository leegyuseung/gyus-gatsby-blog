import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from '@emotion/styled'

const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
`

const Date = styled.p`
  font-size: 14px;
  color: gray;
  margin-bottom: 20px;
`

const Content = styled.div`
  font-size: 18px;
  line-height: 1.6;
`

const PostTemplate = ({ data }: PageProps<{ mdx: any }>) => {
  const { frontmatter, body } = data.mdx
  const image = getImage(frontmatter.thumbnail.childImageSharp.gatsbyImageData)

  return (
    <PostContainer>
      <Title>{frontmatter.title}</Title>
      <Date>{frontmatter.date}</Date>
      {image && <GatsbyImage image={image} alt={frontmatter.title} />}
      <Content dangerouslySetInnerHTML={{ __html: body }} />
    </PostContainer>
  )
}

export default PostTemplate

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
      body
    }
  }
`
