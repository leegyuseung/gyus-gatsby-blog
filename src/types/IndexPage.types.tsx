import { PageProps } from 'gatsby'
import { Post } from './ListLayout.types'

export type IndexPageData = {
  techPosts: {
    edges: { node: Post }[]
  }
  diaryPosts: {
    edges: { node: Post }[]
  }
}

export type IndexPageProps = PageProps<IndexPageData>
