import axios from 'axios'

const BASE_URL = process.env.REACT_APP_WEATHER_API_URL
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric',
  },
})

export const weatherFetcher = (params) =>
  weatherApi.get(params).then((res) => res.data)
