import styled from '@emotion/styled'
import FooterLayout from '../../layout/FooterLayout'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { mediaQuery } from '../../theme/breakpoints'
const IconWrapper = styled.div``

const TextWrapper = styled.div`
  color: black;
  margin-left: 10px;
  font-size: 12px;

  ${mediaQuery.sm} {
    font-size: 10px;
  }
`

const GithubIcon = styled(FaGithub)`
  font-size: 30px;
  ${mediaQuery.sm} {
    font-size: 20px;
  }
`

const Footer = () => {
  return (
    <FooterLayout>
      <IconWrapper>
        <a
          href="https://github.com/leegyuseung"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon color="#333" />
        </a>
      </IconWrapper>
      <TextWrapper>Github by Gyu`s</TextWrapper>
    </FooterLayout>
  )
}

export default Footer
