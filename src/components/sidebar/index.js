import React, { useState, useEffect } from 'react'

import {
  Wrapper,
  WrapperLogo,
  WrapperIcon,
  Icon,
  LinkIcon,
  Logo,
  SideItems,
  Item,
  ItemLink
} from './styled'
import { Items } from './content'
import { useSidebarContext } from '../../contexts/sidebar'
import LogoBellato from '../../assets/img/logo-bellato.png'

import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

export const Sidebar = () => {
  
  const [location, setLocation] = useState('')
  const { size, handleSize } = useSidebarContext()
 
  useEffect(() => {
    setLocation(window.location.pathname)
  }, [])


  return (
    <Wrapper size={size === 'small' ? 'small' : 'large'}>
      <WrapperLogo>
        <Logo src={LogoBellato} />
      </WrapperLogo>
      <SideItems>
        {Items.map((item, id) => (
          <Item key={id}>
            <ItemLink
              to={item.path}
              size={size}
              isChecked={item.path === location}
            >
              <LinkIcon
                size={size}
                isChecked={item.path === location}>
                {item.icon}
              </LinkIcon>
              {size === 'large' && item.title}
            </ItemLink>
          </Item>
        ))}
      </SideItems>
      <WrapperIcon>
        <Icon>
          {size === 'small' ?
            <BiRightArrow onClick={handleSize} size='100%' /> :
            <BiLeftArrow onClick={handleSize} size='100%' />
          }
        </Icon>
      </WrapperIcon>
    </Wrapper>
  )
}
