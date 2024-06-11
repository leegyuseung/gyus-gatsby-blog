import styled from '@emotion/styled'
import Logo from 'components/Common/Logo'
import { Link } from 'gatsby'
import NavItem from './NavItem'
import { Path } from 'components/routes/path'

const HeaderLayout = styled.header`
  position: fixed;
  z-index: 99999;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 72px;
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
`

const Header = () => {
  return (
    <HeaderLayout>
      <LogoWrapper>
        <Logo width={'40px'} height={'40px'} radius={'20px'} />
        <LogoSpan>TEST</LogoSpan>
      </LogoWrapper>
      <Nav>
        <Link to={Path.tech}>
          <NavItem title={'Tech'} />
        </Link>
        <Link to={Path.diary}>
          <NavItem title={'Diary'} />
        </Link>
        <Link to={Path.project}>
          <NavItem title={'Project'} />
        </Link>
        <Link to={Path.project}>
          <NavItem title={'Visitor'} />
        </Link>
      </Nav>
    </HeaderLayout>
  )
}

export default Header
