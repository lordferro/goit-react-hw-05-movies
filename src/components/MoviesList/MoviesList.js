import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ state }) => {
  const location = useLocation();
  const locationFrom = (() => {
    if (state.from?.pathname === '/') {
      return 'movies/';
    }
  })();
  const movies = state.movies;
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              state={{ from: location }}
              to={`${locationFrom ? locationFrom + movie.id : movie.id}`}
            >
              {movie.original_title}
            </Link>
            ;
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  from: PropTypes.shape({ pathname: PropTypes.string.isRequired }),
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),)
};
