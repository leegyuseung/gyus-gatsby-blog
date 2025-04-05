import { PageProps } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export type DiaryPageProps = PageProps<{
  allMarkdownRemark: {
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
