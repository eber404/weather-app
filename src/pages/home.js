import { Link } from 'react-router-dom'

import { useListUsers } from '@/providers/userProvider'
import If from '@/components/If'
import { Loading } from '@/components/Loading'
import { WeatherCard } from '@/components/WeatherCard'

export function Home() {
  const { users, isLoading } = useListUsers()

  return <WeatherCard />
}
