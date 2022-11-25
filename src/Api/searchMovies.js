import { MOVIE_API_URL } from '../utils/constants'

export const searchMovie = () => {
  return `${MOVIE_API_URL}search/movie?`
}
