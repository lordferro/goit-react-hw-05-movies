import axios from 'axios';
import { getMoviesByIdUrl } from 'moviesApi';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { LinkStyled, Wrapper, WrapperAdditional } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState('');
  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMoviesById = async () => {
      try {
        const { data } = await axios.get(getMoviesByIdUrl(movieId));
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMoviesById();
  }, [movieId]);

  useEffect(() => {
    if (movie.genres) {
      const genresString = movie.genres.reduce((genresAcc, genre) => {
        return genre.name + ' ' + genresAcc;
      }, '');
      setGenres(genresString);
    }
  }, [movie]);

  return (
    <>
      <LinkStyled to={backLinkLocationRef.current}>
        <BsArrowLeftShort />
        Go back
      </LinkStyled>
      <Wrapper>
        <img
          src={
            movie.poster_path &&
            `https://image.tmdb.org/t/p/original${movie.poster_path}`
          }
          alt=""
          width={200}
        />
        <div>
          <h2>{`${movie.original_title}`}</h2>
          <p>User Score: {`${(movie.vote_average * 10).toFixed(2)} %`}</p>
          <h3>Overview</h3>
          <p>{`${movie.overview}`}</p>
          <h3>Genres</h3>
          <p>{`${genres}`}</p>
        </div>
      </Wrapper>
      <p> Additional information</p>
      <WrapperAdditional>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </WrapperAdditional>
      <Suspense fallback={<div>loading ...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
