import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { Link } from 'gatsby'

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const NotFoundText = styled.div`
  font-size: 100px;
  font-weight: 600;
`

const NotFoundDescription = styled.div`
  font-size: 15px;
  text-align: center;
  line-height: 1.3;
`

const LogoButtonWrapper = styled.div`
  margin-top: 25px;
`

const StyledButton = styled.button`
  background-color: white;
  color: black;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`

const NotFoundPage: FunctionComponent = () => {
  return (
    <NotFoundPageWrapper>
      <GlobalStyle />
      <NotFoundText>404</NotFoundText>
      <NotFoundDescription>
        찾을 수 없는 페이지입니다. <br />
      </NotFoundDescription>
      <LogoButtonWrapper>
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
          <StyledButton>이동하기</StyledButton>
        </Link>
      </LogoButtonWrapper>
    </NotFoundPageWrapper>
  )
}

export default NotFoundPage
