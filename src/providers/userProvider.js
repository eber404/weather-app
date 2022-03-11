import useSWR from 'swr'
import axios from 'axios'

const fetcher = (params) =>
  axios
    .get(params, {
      baseURL: 'http://localhost:3333/api/',
    })
    .then((res) => res.data)

export function useListUsers() {
  const { data, error } = useSWR('/users', fetcher)

  return { users: data ?? [], isLoading: !error && !data, error }
}

export function useGetUserById(id) {
  const { data, error } = useSWR(`/users/${id}`, fetcher)

  return { user: data ?? {}, isLoading: !error && !data, error }
}
