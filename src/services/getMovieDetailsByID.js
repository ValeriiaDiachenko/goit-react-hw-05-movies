import axios from 'axios';

export const getMovieDetailsByID = async movieId => {
  const config = {
    url: `/movie/${movieId}`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '4126190bd02680e45d1e0b6c7251bb71',
    },
  };

  const response = await axios(config);
 
  return response.data;
};