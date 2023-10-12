import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/api';
import MoviesList from '../components/MoviesList';
import Loader from '../components/Loader';

const Home = () => {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      setLoading(true);
      const movie = await fetchTrendingMovies();
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
        <h1>Trending Today</h1>
        {error && !loading && <p>Sorry, try again</p>}
        {loading && <Loader />}
        {movie.length > 0 && <MoviesList movies={movie} />}
      </section>
    </div>
  );
};

export default Home;
