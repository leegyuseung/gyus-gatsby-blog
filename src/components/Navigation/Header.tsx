import { graphql, useStaticQuery } from 'gatsby'
import { Path } from '../../routes/path'
import styled from '@emotion/styled'
import Logo from 'components/Common/Logo'
import NavItem from './NavItem'

const HeaderLayout = styled.header`
  position: fixed;
  z-index: 99999;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(225, 225, 225, 0.15);

  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  transition: all 0.5s ease;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LogoSpan = styled.span`
  margin-left: 15px;
  font-size: 12px;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <HeaderLayout>
      <LogoWrapper>
        <Logo width={'30px'} height={'30px'} radius={'20px'} />
        <LogoSpan>{title}</LogoSpan>
      </LogoWrapper>
      <Nav>
        <NavItem path={Path.tech} title={'Tech'} readonly={false} />
        <NavItem path={Path.diary} title={'Diary'} readonly={false} />
        <NavItem path={Path.project} title={'Project'} readonly={true} />
        <NavItem path={Path.about} title={'About'} readonly={true} />
      </Nav>
    </HeaderLayout>
  )
}

export default Header
