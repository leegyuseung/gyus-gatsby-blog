import { Post } from './ListLayout.types'

export type MainPageData = {
  techPosts: {
    edges: { node: Post }[]
  }
  diaryPosts: {
    edges: { node: Post }[]
  }
}

export type MainPageProps = {
  data: MainPageData
}
