import styled from '@emotion/styled'
import { Link } from 'gatsby'

interface NavItemProps {
  title: string
  readonly: boolean
  path: string
}

const Item = styled.span<{ readonly?: boolean }>`
  padding: 0px 16px;
  text-decoration-line: none;
  color: #585858;
  font-weight: 600;
  font-size: 12px;

  &:hover {
    color: #e61d1d;
  }

  ${({ readonly }) =>
    readonly &&
    `
    user-select: none;
    color : gray;
  `}
`

const Linked = styled(Link)<{ readonly?: boolean }>`
  ${({ readonly }) =>
    readonly &&
    `
    pointer-events: none;
    user-select: none;
    color : gray;
  `}
`

const NavItem = ({ title, readonly, path }: NavItemProps) => {
  return (
    <Linked to={path} readonly={readonly}>
      <Item readonly={readonly}>{title}</Item>
    </Linked>
  )
}

export default NavItem
