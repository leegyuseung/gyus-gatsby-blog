import { graphql } from 'gatsby'
import { IndexPageProps } from 'types/IndexPage.types'
import BaseLayout from '../layout/BaseLayout'
import MainLayout from '../layout/MainLayout'

const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <BaseLayout>
      <MainLayout data={data} />
    </BaseLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    techPosts: allMdx(
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
                gatsbyImageData(width: 80, height: 80, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
    diaryPosts: allMdx(
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
                gatsbyImageData(width: 80, height: 80, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`
