import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const variantWidth = {
  small: css`
    width: 61px;
  `,
  large: css`
    width: 180px;
  `
}

export const Wrapper = styled.div`
  ${({ size }) => variantWidth[size]};
  transition: 0.7s ease;
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  background: var(--white-bg);
  border-right: 1.5px solid var(--border);
`

export const WrapperLogo = styled.a`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid var(--yellow);
  background: var(--gray-bg);
`

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`

export const SideItems = styled.ul`
  list-style: none;
  width: 100%;
`

export const Item = styled.li`
  margin: 20px 0;
`

export const ItemLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ size }) => size === 'small' ? 'center' : 'flex-start'};
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  padding: 15px 20px;
  width: 100%;
  color: var(--font);
  background: ${({ isChecked }) => isChecked ? 'var(--gray-bg)' : ''};
  text-decoration: none;

  &:hover {
    background: var(--gray-bg);
  }
`

export const LinkIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ size }) => size === 'small' ? '' : '10px'};

   svg {
    fill: ${({ isChecked }) => isChecked ? 'var(--yellow)' : ''};
  }
`

export const WrapperIcon = styled.div`
  height: 35px;
  width: 100%;
  position: relative;
`

export const Icon = styled.a`
  cursor: pointer;
  position: absolute;
  background: var(--white-bg);
  right: calc(-35px / 2);
  padding: 7px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1.5px solid var(--border);

  svg {
    margin-right: 2px;
    fill: var(--yellow);
  }
`