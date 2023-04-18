import axios from 'axios';
import { getMovieCastUrl } from 'moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const {
        data: { cast },
      } = await axios.get(getMovieCastUrl(movieId));
      setActors(cast);
    };
    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {actors.map(actor => {
        return (
          <li key={actor.id}>
            <div>
              <img
                src={
                  actor.profile_path &&
                  `https://image.tmdb.org/t/p/original${actor.profile_path}`
                }
                alt=""
                width={100}
              />
              <p> {actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
