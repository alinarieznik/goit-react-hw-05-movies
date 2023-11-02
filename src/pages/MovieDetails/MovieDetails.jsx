import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BackLink } from '../../components/BackLink/BackLink';
import { fetchMovieDetails } from '../../services/api';
import Loader from '../../components/Loader';
import NoImage from '../../components/no-image.png';
import { StyledThumb, StyledInformation } from './MovieDetails.style';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // from params
  const { movieId } = useParams();
  //   console.log(movieId);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

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
        <BackLink to={backLinkHref.current}>Go back</BackLink>
        {error && !loading && <p>Sorry, try again</p>}
        {loading && <Loader />}
        {movie && (
          <div>
            <section>
              <StyledThumb>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                      : NoImage
                  }
                  alt={movie.original_title}
                />
                <div>
                  <h2>
                    {movie.original_title} ({getDate(movie.release_date)})
                  </h2>
                  <p>User Score: {movie.vote_average}</p>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                  <h4>Genres</h4>
                  <p>{getGenres(movie.genres)}</p>
                </div>
              </StyledThumb>
              <div>
                <StyledInformation>
                  <Link to={'cast'}>
                    <li>
                      <p>Cast</p>
                    </li>
                  </Link>
                  <Link to={'reviews'}>
                    <li>
                      <p>Reviews</p>
                    </li>
                  </Link>
                </StyledInformation>
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </div>
            </section>
          </div>
        )}
      </section>
    </div>
  );
};

export default MovieDetails;
