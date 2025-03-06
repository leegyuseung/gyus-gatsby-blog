import styled from '@emotion/styled'
import { Link } from 'gatsby'

interface NavItemProps {
  title: string
  readonly: boolean
  path: string
}

const Item = styled.span<{ readonly?: boolean }>`
  position: relative; /* 가상 요소의 기준점 */
  padding: 0px 16px;
  text-decoration-line: none;
  color: #585858;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: #e61d1d;
  }

  /* 밑줄 효과 */
  &::after {
    content: '';
    position: absolute;
    left: 14px;
    bottom: -4px; /* 글자 아래쪽 */
    width: 60%;
    height: 2px;
    background-color: #e61d1d;
    transform: scaleX(0); /* 초기에는 안 보이게 */
    transform-origin: left; /* 왼쪽에서 시작 */
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1); /* hover 시 왼쪽 → 오른쪽으로 나타남 */
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
