import useSWR from 'swr'

import { weatherFetcher } from '@/services/OpenWeatherService'
import { Weather } from '@/entities/Weather'

function mapFromApi(data) {
  const toMiliseconds = (seconds) => seconds * 1000

  const { main, weather, dt, sys, timezone, name } = data

  const timestamp = toMiliseconds(dt + timezone)

  const date = new Date(timestamp)
  const hours = date.getUTCHours()

  const weatherEntity = new Weather({
    description: weather[0].main,
    hours,
    temperature: main.temp,
    feelsLike: main.feels_like,
    icon: weather[0].icon,
    location: `${name}, ${sys.country}`,
  })

  return weatherEntity
}

export const useWeather = ({ city, coords }, shouldFetch) => {
  const { latitude: lat, longitude: lon } = coords

  const url = shouldFetch ? `/weather?q=${city}&lat=${lat}&lon=${lon}` : null

  const { data, error, isValidating } = useSWR(url, weatherFetcher, {})

  const weather = data && mapFromApi(data)

  return {
    weather,
    error,
    isLoading: !data && !error,
  }
}
