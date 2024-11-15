import { PageProps } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export type IndexPageProps = PageProps<{
  allMdx: {
    edges: {
      node: {
        id: string
        frontmatter: {
          title: string
          summary: string
          date: string
          tags: string[]
          thumbnail: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData
            }
          }
        }
      }
    }[]
  }
}>
