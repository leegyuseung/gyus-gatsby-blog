import React from 'react'
import styled from '@emotion/styled'
import ListItem from 'components/Item/ListItem'
import { ListLayoutProps } from 'types/ListLayout.types'
import { mediaQuery } from '../theme/breakpoints'

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px 0;

  ${mediaQuery.sm} {
    padding: 10px 0;
  }
`
const SectionTitle = styled.h2`
  position: relative; /* 가상 요소 위치 기준 */
  font-size: 30px;
  text-align: start;
  color: #262a2d;
  display: inline-block; /* 텍스트 길이에 맞춰 border 생성 */

  /* 🔥 밑줄 애니메이션 */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px; /* ✅ 글자 아래 여백 조절 */
    width: 10%;
    height: 3px;
    background-color: #e61d1daf;
    transform: scaleX(0); /* 처음에는 안 보이게 */
    transform-origin: left; /* 왼쪽에서 시작 */
    animation: underlineAppear 0.6s ease-in-out forwards;

    ${mediaQuery.sm} {
      width: 18%;
    }
  }

  @keyframes underlineAppear {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  ${mediaQuery.sm} {
    font-size: 14px;
  }
`

const DiaryLayOut = styled.div`
  width: 100%; /* 너비를 꽉 차게 설정 */
`

const DiaryListLayout = ({ posts }: ListLayoutProps) => {
  return (
    <DiaryContainer>
      <SectionTitle># Diary</SectionTitle>
      {posts.edges.map((post, index) => {
        return (
          <DiaryLayOut>
            <ListItem key={index} post={post.node} />
          </DiaryLayOut>
        )
      })}
    </DiaryContainer>
  )
}

export default DiaryListLayout
