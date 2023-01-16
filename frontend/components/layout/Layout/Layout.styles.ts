import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray10};
`

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 450px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: auto;
`

export const Contents = styled.main`
min-height: calc(100vh - 54px);
background-color: red;
`
