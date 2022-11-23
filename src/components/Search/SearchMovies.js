import React, { useState } from 'react'

export const SearchMovies = ({ keyword }) => {
  const [searchMovie, setSearchMovie] = useState('')
  const getMovieValue = ev => {
    ev.preventDefault()
    setSearchMovie(ev.target.value)
  }
  return (
    <div>
      <form>
        <input type='text' value={keyword} onChange={getMovieValue} />
      </form>
    </div>
  )
}
