import axios from 'axios'
import { useEffect, useState } from 'react'
import { getMoviesList } from '../../Api/getMoviesList'

export default function useMovies () {
  const [data, setData] = useState()

  useEffect(() => {
    axios
      .get(getMoviesList(1))
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  if (!data) return {}

  return { data }
}
