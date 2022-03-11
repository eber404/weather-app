import { useParams } from 'react-router-dom'

export function Weather() {
  const params = useParams()

  const city = params.city

  return (
    <main>
      <h1>Weather</h1>
    </main>
  )
}
