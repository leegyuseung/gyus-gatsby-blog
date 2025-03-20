import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { mediaQuery } from '../../theme/breakpoints'
interface NavItemProps {
  title: string
  readonly: boolean
  path: string
}

const Item = styled.span<{ readonly?: boolean; choice: boolean }>`
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

    ${mediaQuery.sm} {
      width: 45%;
    }
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

  ${({ choice }) => choice && `color : #e61d1d;`}

  ${mediaQuery.sm} {
    font-size: 10px;
    padding: 0px 15px;
  }
`

const Linked = styled(Link, {
  shouldForwardProp: prop => prop !== 'readonly',
})<{ readonly?: boolean }>`
  ${({ readonly }) =>
    readonly &&
    `
    pointer-events: none;
    user-select: none;
    color : gray;
  `}
`

const NavItem = ({ title, readonly, path }: NavItemProps) => {
  let location = useLocation()
  let choice = false
  choice =
    location.pathname.replace(/\//g, '') == path.replace(/\//g, '')
      ? true
      : false

  return (
    <Linked to={path} readonly={readonly}>
      <Item readonly={readonly} choice={choice}>
        {title}
      </Item>
    </Linked>
  )
}

export default NavItem
