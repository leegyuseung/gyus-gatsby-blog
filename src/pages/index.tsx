import { graphql } from 'gatsby'
import { IndexPageProps } from 'types/IndexPage.types'
import BaseLayout from '../layout/BaseLayout'
import MainLayout from '../layout/MainLayout'
import SEO from 'components/SEO'

const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <BaseLayout>
      <SEO title="Home" />
      <MainLayout data={data} />
    </BaseLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    techPosts: allMarkdownRemark(
      filter: { frontmatter: { categories: { in: ["tech"] } } }
      sort: { frontmatter: { date: DESC } }
      limit: 5 # 최신 5개만 가져오기
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date
            tags
            categories
            slug
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  height: 150
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
    diaryPosts: allMarkdownRemark(
      filter: { frontmatter: { categories: { in: ["diary"] } } }
      sort: { frontmatter: { date: DESC } }
      limit: 5 # 최신 5개만 가져오기
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date
            tags
            categories
            slug
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  height: 150
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`
