

const Movie = ({title, image, overview}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{overview}</p>
      <img src={image} alt="No content" />
    </>
  )
}

export default Movie;