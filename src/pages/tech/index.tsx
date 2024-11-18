import { graphql } from 'gatsby'
import { TechPageProps } from 'types/TechPage.types'

import BaseLayout from '../../layout/BaseLayout'
import TechListLayout from '../../layout/TechListLayout'

const TechPage = ({ data }: TechPageProps) => {
  return (
    <BaseLayout>
      <TechListLayout posts={data.allMdx.edges} />
    </BaseLayout>
  )
}

export default TechPage

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { categories: { in: ["tech"] } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date
            tags
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
