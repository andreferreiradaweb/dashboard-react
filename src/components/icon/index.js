import React from 'react'

import { Wrapper } from './styled'

export const Icon = ({ icon, color, size = '' }) => {
  const Icon = icon
  return (
    <Wrapper>
      <Icon style={{ fill: color ? color : '' }} size={size ? size : ''} />
    </Wrapper>
  )
}
