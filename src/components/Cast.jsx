import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../services/api';
import Loader from '../components/Loader';
import NoImage from './no-image.png';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // from params
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId);
  }, [movieId]);

  const getMovieCast = async movieId => {
    try {
      setLoading(true);
      const cast = await fetchMovieCast(movieId);
      setCast(cast);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section>
        {error && !loading && <p>Sorry, try again</p>}
        {loading && <Loader />}
        {cast.length > 0 && (
          <ul>
            {cast.map(({ id, character, name, profile_path }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : NoImage
                  }
                  alt={name}
                />
                <div>
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default MovieCast;
