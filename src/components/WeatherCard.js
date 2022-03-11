import styled from 'styled-components'

export function WeatherCard() {
  return (
    <Container>
      <h1>Weather</h1>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: rebeccapurple;
`
