import styled from '@emotion/styled'

type FooterLayoutProps = {
  children: React.ReactNode
}

const Footer = styled.footer`
  width: 100%;
  padding: 20px 16px;
  height: 80px;

  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(225, 225, 225, 0.15);

  color: #757575;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`

const FooterLayout = ({ children }: FooterLayoutProps) => {
  return <Footer>{children}</Footer>
}

export default FooterLayout
