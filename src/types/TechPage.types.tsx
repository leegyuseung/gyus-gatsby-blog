import { PageProps } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export type TechPageProps = PageProps<{
  allMdx: {
    edges: {
      node: {
        id: string
        frontmatter: {
          title: string
          summary: string
          date: string
          tags: string[]
          slug: string
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
