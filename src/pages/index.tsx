import { graphql } from 'gatsby'
import BaseLayout from '../layout/BaseLayout'
import ListLayout from '../layout/ListLayout'

const IndexPage = () => {
  return (
    <BaseLayout>
      <ListLayout />
    </BaseLayout>
  )
}

export default IndexPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
