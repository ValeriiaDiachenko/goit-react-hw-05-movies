import axios from 'axios';

const config = {
  url: '/trending/movie/week',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4126190bd02680e45d1e0b6c7251bb71',
  },
};

export const getTrandingAPI = async () => {
  const response = await axios(config);
  return response.data.results;
};