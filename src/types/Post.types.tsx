import { IGatsbyImageData } from 'gatsby-plugin-image'

export type Post = {
  id: string
  frontmatter: {
    title: string
    summary: string
    date: string
    tags: string[]
    categories: string[]
    thumbnail: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}
