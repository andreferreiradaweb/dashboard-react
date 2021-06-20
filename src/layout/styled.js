import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: var(--gray-bg);
`

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 15px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`
