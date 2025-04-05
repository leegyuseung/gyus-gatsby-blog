import { graphql } from 'gatsby'
import { DiaryPageProps } from 'types/DiaryPage.types'

import BaseLayout from '../../layout/BaseLayout'
import DiaryListLayout from '../../layout/DiaryListLayout'
import SEO from 'components/SEO'

const DiaryPage = ({ data }: DiaryPageProps) => {
  return (
    <BaseLayout>
      <SEO title="Diary" />
      <DiaryListLayout posts={data.allMarkdownRemark} />
    </BaseLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { in: ["diary"] } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date
            tags
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

export default DiaryPage
