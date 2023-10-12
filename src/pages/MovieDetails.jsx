import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import Loader from '../components/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // from params
  const { movieId } = useParams();
  //   console.log(movieId);

  const getGenres = genres => {
    return genres.map(genre => genre.name).join(' ');
  };

  const getDate = date => {
    return date.slice(0, 4);
  };

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  const getMovieDetails = async movieId => {
    try {
      setLoading(true);
      const movie = await fetchMovieDetails(movieId);
      setMovie(movie);
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
        {movie && (
          <div>
            <section>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.original_title}
                />
                <h2>
                  {movie.original_title} ({getDate(movie.release_date)})
                </h2>
                <p>User Score: {movie.vote_average}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h4>Genres</h4>
                <p>{getGenres(movie.genres)}</p>
              </div>
              <div>
                <ul>
                  <Link to={`/movies/${movie.id}/cast`}>
                    <li>
                      <p>Cast</p>
                    </li>
                  </Link>
                  <Link to={`/movies/${movie.id}/reviews`}>
                    <li>
                      <p>Reviews</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </section>
          </div>
        )}
      </section>
    </div>
  );
};

export default MovieDetails;
