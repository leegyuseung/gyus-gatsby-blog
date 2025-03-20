import styled from '@emotion/styled'
import { mediaQuery } from '../theme/breakpoints'
type FooterLayoutProps = {
  children: React.ReactNode
}

const Footer = styled.footer`
  width: 100%;
  padding: 0px 40px;
  height: 56px;

  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(225, 225, 225, 0.15);

  color: #757575;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  ${mediaQuery.sm} {
    height: 10px;
  }
`

const FooterLayout = ({ children }: FooterLayoutProps) => {
  return <Footer>{children}</Footer>
}

export default FooterLayout
