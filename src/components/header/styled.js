import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
`

export const Date = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const DateText = styled.p`
  font-size: 12px;
`

export const DateSpan = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
`

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SearchInput = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid var(--border);
  font-size: 12px;
  padding: 5px;
  color: var(--text);
  background: var(--gray-bg);

  ::placeholder {
    color: var(--border);
  }

  @media screen and (max-width: 594px) {
    display: none;
  }
`

export const Notification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
