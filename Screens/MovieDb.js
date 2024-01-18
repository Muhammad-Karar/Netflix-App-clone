import axios from 'axios';
import { apikey } from './Index';
// import { useSelector, useDispatch } from 'react-redux';
// import { trendingMovieStore } from '../src/reducer/counterReducer';

// const dispatch = useDispatch();

// Endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMovieEndPoint = `${apiBaseUrl}/trending/movie/day?api_key=${apikey}`;
const upCommingMovieEndPoint = `${apiBaseUrl}/movie/upcoming?api_key=${apikey}`;
const topRatedMovieEndPoint = `${apiBaseUrl}/movie/top_rated?api_key=${apikey}`;


export const image500 = path => path? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = path => path? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = path => path? `https://image.tmdb.org/t/p/w185${path}` : null;

const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET', // Corrected the HTTP method to uppercase
    url: endpoint,
    params: params ? params : {}
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trendingMovieEndPoint);
    // const trendingMov = apiCall(trendingMovieEndPoint);
    // dispatch(trendingMovieStore(trendingMov));
    // return trendingMov;
};

export const fetchUpcomingMovies = () => {
  return apiCall(upCommingMovieEndPoint); // Corrected the function name
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMovieEndPoint);
};
