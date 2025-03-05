import { IGatsbyImageData } from 'gatsby-plugin-image'

export type Post = {
  id: string
  frontmatter: {
    slug: string
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

export type ListLayoutProps = {
  posts: {
    edges: { node: Post }[]
  }
}
