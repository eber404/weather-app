import { Routes, Route } from 'react-router-dom'

import { Home } from '@/pages/home'
import { Profile } from '@/pages/profile'
import { Weather } from '@/pages/weather'

export function NavRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/weather/:city" element={<Weather />} />
    </Routes>
  )
}
