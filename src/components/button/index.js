import React from 'react'
import { ButtonStyled } from './styled'

export const Buttom = ({ children, ...rest }) => {
  return (
    <ButtonStyled {...rest}>
      {children}
    </ButtonStyled>
  )
}
