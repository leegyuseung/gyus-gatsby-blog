import styled from '@emotion/styled'
import FooterLayout from '../../layout/FooterLayout'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const IconWrapper = styled.div``

const TextWrapper = styled.div`
  color: black;
  margin-left: 10px;
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
          <FaGithub size={32} color="#333" />
        </a>
      </IconWrapper>
      <TextWrapper>Developed by Gyu`s</TextWrapper>
    </FooterLayout>
  )
}

export default Footer
