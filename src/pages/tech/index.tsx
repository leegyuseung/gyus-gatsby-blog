import { graphql } from 'gatsby'
import { TechPageProps } from 'types/TechPage.types'
import BaseLayout from '../../layout/BaseLayout'
import TechListLayout from '../../layout/TechListLayout'

const TechPage = ({ data }: TechPageProps) => {
  return (
    <BaseLayout>
      <TechListLayout posts={data.allMdx} />
    </BaseLayout>
  )
}

export default TechPage

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { categories: { in: ["tech"] } } }
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
