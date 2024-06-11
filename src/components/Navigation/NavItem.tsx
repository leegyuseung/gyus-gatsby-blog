import styled from '@emotion/styled'

interface NavItemProps {
  title: string
}

const Item = styled.span`
  padding: 0px 16px;
  text-decoration-line: none;
  color: #585858;
  font-weight: 600;
`

const NavItem = ({ title }: NavItemProps) => {
  return <Item>{title}</Item>
}

export default NavItem
