import styled from 'styled-components'

export const ButtonStyled = styled.button`
  border-radius: 10px;
  padding: 10px;
  font-size: 12px;
  cursor: pointer;
  color: ${({ secondary }) => secondary ? '' : 'var(--white-default)'};
  border: ${({ secondary }) => secondary ? '1px solid var(--border)' : 'none'};
  background: ${({ secondary }) => secondary ? 'none' : 'var(--yellow)'};

  @media screen and (max-width: 792px) {
    padding: 5px;
    font-size: 10px;
  }
`