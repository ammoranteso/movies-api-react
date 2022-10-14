import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IMAGE_API_URL } from '../../utils/constants';
import { getMoviesList } from '../../Api/getMoviesList';
import Movie from '../Movie/Movie';
export const Home = () => {
  const [data, setData] = useState(null);
  const getImages = (item) => {
    return `${IMAGE_API_URL}${item}`
  } 
  useEffect(() => {
    axios
      .get(getMoviesList(1))
      .then((response) => {
        // handle success
        setData(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  if (!data) return null;
  console.log(data)
  return (
    <>
      {data?.items.map(item => (
        <Movie title={item.title} overview={item.overview} image={getImages(item?.poster_path)} />
      ))}
    </>
  );
};
