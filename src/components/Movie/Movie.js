import './styles.scss'

const Movie = ({title, image, overview}) => {
  return (
    <div className="card-movie">
      <h1>{title}</h1>
      <p className='movie-description'>{overview}</p>
      <img src={image} alt="No content" />
    </div>
  )
}

export default Movie;