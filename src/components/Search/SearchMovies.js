import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { searchMovie } from '../../Api/searchMovies'
import Movie from '../Movie/Movie'
import { IMAGE_API_URL } from '../../utils/constants';


export const SearchMovies = ({ keyword }) => {
  const [searchMovieItem, setSearchMovie] = useState('Marvel')
  const [data, setData] = useState('')
  const navigate = useNavigate()

  const handleSubmit = evt => {
    evt.preventDefault()
    // navigate('/')
    evt.target.value = '';
    console.log(data)
  }

  const handleChange = evt => {
    evt.preventDefault()
    setSearchMovie(evt.target.value)
  }

  const getImages = item => {
    return `${IMAGE_API_URL}${item}`
  }

  useEffect(() => {
    axios
      .get(`${searchMovie()}&query=${searchMovieItem}`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [searchMovieItem])

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' value={searchMovieItem} onChange={handleChange} />
        </form>
      </div>
      <div>
        <div className='movies__wrapper'>
          {data?.results?.map(item => (
            <Movie
              key={item.id}
              title={item.title}
              overview={item.overview}
              image={getImages(item?.poster_path)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
