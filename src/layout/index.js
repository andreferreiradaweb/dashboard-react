import React from 'react'

import { Sidebar } from '../components/sidebar'
import { Header } from '../components/header'

import { 
  Wrapper,
  Container,
  Content
 } from './styled'
 

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header/>
        <Content>
          {children}
        </Content>
      </Container>
    </Wrapper>
  )
}
