import { graphql } from 'gatsby'
import BaseLayout from '../layout/BaseLayout'

const TEST = () => {
  return <div>TEST</div>
}

const IndexPage = () => {
  return (
    <BaseLayout>
      <TEST />
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
