import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useWeather } from '@/hooks/useOpenWeather'
import { Loading } from '@/components/Loading'
import { WeatherCard } from '@/components/WeatherCard'
import { SearchInput } from '@/components/SearchInput'
import { NotFoundCard } from '@/components/NotFoundCard'

export function Home() {
  const [shouldSearch, setShouldSearch] = useState(false)
  const [city, setCity] = useState('')
  const [coords, setCoords] = useState({
    latitude: '',
    longitude: '',
  })

  const { weather, isLoading, error } = useWeather(
    { city, coords },
    shouldSearch
  )

  useEffect(() => {
    const onSuccess = ({ coords: { latitude, longitude } }) =>
      setCoords({ latitude, longitude })

    const onError = () => setCoords({ latitude: null, longigute: null })

    const gpsPosition = navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError
    )
    if (gpsPosition) {
      const { latitude, longitude } = gpsPosition.coords
      setCoords({
        latitude,
        longitude,
      })
    }
  }, [])

  useEffect(() => {
    if (city && city.length > 0) {
      setCoords({ latitude: null, longitude: null })
    }
  }, [city])

  useEffect(() => {
    if (city || (coords.latitude && coords.longitude)) {
      setShouldSearch(true)
    }
  }, [city, coords])

  useEffect(() => {
    if (weather?.lo && weather?.temperature) {
      document.title = `${weather?.location} | ${weather.temperature}°C`
    } else {
      document.title = 'Weather App | Not Found'
    }
  }, [weather])

  return (
    <Container>
      <SearchInput setSearch={setCity} placeholder={weather?.location} />
      {!isLoading && !error && weather && (
        <WeatherCard {...weather} metrics={'celsius'} />
      )}
      {!isLoading && error && <NotFoundCard />}
      {isLoading && shouldSearch && <Loading />}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
