import styled, { withTheme } from 'styled-components'

import { SyncLoader } from 'react-spinners'

function LoadingComponent({ theme }) {
  return (
    <Wrapper>
      <SyncLoader color={theme.palette.primary.main} />
    </Wrapper>
  )
}

export const Loading = withTheme(LoadingComponent)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`
