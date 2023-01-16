import axios from 'axios';

export const getMovieSearch = async params => {
  const config = {
    url: `/search/movie`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '4126190bd02680e45d1e0b6c7251bb71',
      query: params,
    },
  };

  const response = await axios(config);
  return response.data.results;
};