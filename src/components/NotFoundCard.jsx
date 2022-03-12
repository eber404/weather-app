import styled from 'styled-components'

export function NotFoundCard() {
  return (
    <Container>
      <Text>404</Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary.main};
`
