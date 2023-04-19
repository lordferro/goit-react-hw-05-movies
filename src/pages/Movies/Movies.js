import axios from 'axios';
import MoviesList from 'components/MoviesList/MoviesList';
import { getMoviesByQueryUrl } from 'moviesApi';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.get('query') ?? '';

  const updateQueryString = evt => {
    evt.preventDefault();
    if (evt.target[0].value === '') {
      alert('please enter your query ');
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target[0].value });
    evt.target[0].value = '';
  };

  useEffect(() => {
    if (queryString === '') {
      return;
    }
    const fetchMoviesByQuery = async () => {
      try {
        const response = await axios.get(getMoviesByQueryUrl(queryString));
        if (response.data.results.length === 0) {
          alert('Please check your query, beacause we find nothing');
        }
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMoviesByQuery();
  }, [queryString]);

  return (
    <>
      <form onSubmit={updateQueryString}>
        <input type="text" defaultValue="" />
        <button type="submit">Search</button>
      </form>
      <MoviesList state={{ movies, from: location }} />
    </>
  );
};

export default Movies;
