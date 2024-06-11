import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Header from 'components/Navigation/Header'
import { graphql } from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

type IndexPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: IndexPageProps) => {
  return (
    <Container>
      <GlobalStyle />
      <Header title={title} />
    </Container>
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
