import { MOVIE_API_URL } from '../utils/constants'

export const getMoviesList = (id) => {
  return `${MOVIE_API_URL}list/${id}?`
};
