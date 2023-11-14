import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '989563dd1f865a35d8f87302bbcd611b';
const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    language: 'en-US',
    api_key: API_KEY,
  },
});

export const requestTrendMovies = async () => {
  const { data } = await instance.get('/trending/all/day');
  return data;
};
export const requestSearch = async inputValue => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: inputValue, 
    },
  });

  return data;
};

export const requestDetails = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const requestCasts = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/casts`);

  return data;
};
export const requestReviews = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);

  return data;
};