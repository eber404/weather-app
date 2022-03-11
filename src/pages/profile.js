import { Link, useParams } from 'react-router-dom'

import { useGetUserById } from '@/providers/userProvider'
import { Loading } from '@/components/Loading'
import If from '@/components/If'

export function Profile() {
  const params = useParams()

  const { isLoading, user } = useGetUserById(params.id)

  return (
    <If condition={!isLoading} elseComponent={Loading}>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <Link to={'/'}>Back</Link>
      </div>
    </If>
  )
}
