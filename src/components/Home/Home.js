import React from 'react'
import { IMAGE_API_URL } from '../../utils/constants'
import Movie from '../Movie/Movie'
import './styles.scss'
import useMovies from '../hooks/useMovies'

export const Home = () => {
  const { data } = useMovies()
  const getImages = item => {
    return `${IMAGE_API_URL}${item}`
  }

  return (
    <>
      <div> Estreno </div>
      <div className='movies__wrapper'>
        {data?.items.map(item => (
          <Movie
            key={item.id}
            title={item.title}
            overview={item.overview}
            image={getImages(item?.poster_path)}
          />
        ))}
      </div>
    </>
  )
}
