import styled from '@emotion/styled'

interface NavItemProps {
  title: string
}

const Item = styled.span`
  padding: 0px 16px;
  text-decoration-line: none;
  color: #585858;
  font-weight: 600;
  font-size: 12px;

  &:hover {
    color: #e61d1d;
  }
`

const NavItem = ({ title }: NavItemProps) => {
  return <Item>{title}</Item>
}

export default NavItem
