import { graphql } from 'gatsby'
import { DiaryPageProps } from 'types/DiaryPage.types'

import BaseLayout from '../../layout/BaseLayout'
import DiaryListLayout from '../../layout/DiaryListLayout'

const DiaryPage = ({ data }: DiaryPageProps) => {
  return (
    <BaseLayout>
      <DiaryListLayout posts={data.allMdx} />
    </BaseLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
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
