import styled from 'styled-components'

import { NavRoutes } from '@/routes'

export function Layout() {
  return (
    <Container>
      <NavRoutes />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`
