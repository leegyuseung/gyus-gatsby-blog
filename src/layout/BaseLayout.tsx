import styled from '@emotion/styled'
import Header from 'components/Navigation/Header'
import GlobalStyle from 'components/Common/GlobalStyle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Body = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - 80px); // minus footer height
  height: 100%;
  padding: 0px 40px;
  padding-top: 72px; // padding to header height
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
`

type BaseLayoutProps = {
  children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Body>{children}</Body>
    </Container>
  )
}

export default BaseLayout
