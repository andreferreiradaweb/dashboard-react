import React from 'react'

import { DateTime } from '../date'
import { FaRegCalendarAlt, FaRegBell } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'
import { Icon } from '../icon'
import {
  Wrapper,
  Date,
  DateText,
  DateSpan,
  Search,
  SearchInput,
  Notification,
} from './styled'

export const Header = () => {

  return (
    <Wrapper>
      <Date>
        <DateText>
          Resumo de <DateSpan><DateTime /></DateSpan>
        </DateText>
        <Icon color='var(--yellow)' icon={FaRegCalendarAlt} />
      </Date>
      <Search>
        <SearchInput placeholder="Escreve o que deseja..." />
        <Icon color='var(--yellow)' icon={ImSearch} />
      </Search>
      <Notification>
        <Icon color='var(--yellow)' icon={FaRegBell} />
      </Notification>
    </Wrapper>
  )
}
