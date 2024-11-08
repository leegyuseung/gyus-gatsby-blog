import styled from '@emotion/styled'
import Header from 'components/Navigation/Header'
import GlobalStyle from 'components/Common/GlobalStyle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

type BaseLayoutProps = {
  children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      {children}
    </Container>
  )
}

export default BaseLayout
