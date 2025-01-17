import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { TiArrowBack } from 'react-icons/ti'
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

const NotFoundPage: FunctionComponent = () => {
  return (
    <NotFoundPageWrapper>
      <GlobalStyle />
      <NotFoundText>404</NotFoundText>
      <NotFoundDescription>
        찾을 수 없는 페이지입니다. <br />
        메인 페이지로 이동하시겠습니까?
      </NotFoundDescription>
      <LogoButtonWrapper>
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
          <TiArrowBack size={30} />
        </Link>
      </LogoButtonWrapper>
    </NotFoundPageWrapper>
  )
}

export default NotFoundPage
