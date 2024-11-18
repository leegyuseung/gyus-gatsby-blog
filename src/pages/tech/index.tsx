import { graphql } from 'gatsby'
import { IndexPageProps } from 'types/IndexPage.types'

import BaseLayout from '../../layout/BaseLayout'
import ListLayout from '../../layout/ListLayout'

const TechPage = ({ data }: IndexPageProps) => {
  return (
    <BaseLayout>
      <ListLayout posts={data.allMdx.edges} />
    </BaseLayout>
  )
}

export default TechPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
