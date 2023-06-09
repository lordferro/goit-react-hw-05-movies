import axios from 'axios';

import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMoviesUrl } from 'moviesApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrandingMovies() {
      try {
        const results = await axios.get(getTrendingMoviesUrl());
        setMovies(results.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrandingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList state={{ movies, from: location }} />
    </>
  );
};

export default Home;
