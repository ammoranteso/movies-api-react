import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MOVIE_API_URL } from '../../utils/constants';
export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${MOVIE_API_URL}movie/115?`)
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

  return (
    <>
      <h1> Hello world {data.original_title}</h1>
    </>
  );
};
