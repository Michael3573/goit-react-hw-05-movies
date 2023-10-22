import axios from 'axios';
// axios.defaults.baseURL = "https://api.themoviedb.org/3"

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '957bdc28e43b3dd1e961d5a400864247';

export const getTrandingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

export const getMovieInfo = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

export const getCredits = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};

export const getMoviesByQuery = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
  );
  return data.results;
};
