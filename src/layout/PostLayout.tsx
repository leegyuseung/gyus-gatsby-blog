import styled from '@emotion/styled'
import Header from 'components/Navigation/Header'
import React from 'react'
import GlobalStyle from 'components/Common/GlobalStyle'

const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px 20px; // 상단 padding 추가 (헤더와 겹침 방지)
`

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PostContainer>{children}</PostContainer>
    </>
  )
}

export default PostLayout
