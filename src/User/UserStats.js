import React from 'react'
import { STATS_GET } from '../api'
import Error from '../Components/Helper/Error'
import Head from '../Components/Helper/Head'
import Loading from '../Components/Helper/Loading'
import useFetch from '../Hooks/useFetch'
import UserStatsGraphs from './UserStatsGraphs'

const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function getStats() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
      getStats()
  }, [request])

  if(loading) return <Loading />
  if(error) return <Error error={error}/>
  if(data)
  return (
    <div>
      <Head title='Estatísticas'/>
      <UserStatsGraphs data={data}/>
    </div>
  )
  else return null
}

export default UserStats