import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Logo from 'components/Common/Logo'
import React, { FunctionComponent } from 'react'

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const NotFoundText = styled.div`
  font-size: 150px;
  font-weight: 800;
`

const NotFoundDescription = styled.div`
  font-size: 25px;
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
        <Logo width={'40px'} height={'40px'} radius={'0px'} />
      </LogoButtonWrapper>
    </NotFoundPageWrapper>
  )
}

export default NotFoundPage
