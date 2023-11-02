import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from '../../services/api';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';
import {
  StyledSearchButton,
  StyledInput,
  StyledSearchForm,
} from './Movies.styled';

const Movies = () => {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams() ?? '';

  const handleQueryChange = searchParams.get('handleQueryChange');

  useEffect(() => {
    if (handleQueryChange === '') return;
    if (handleQueryChange) {
      getSearchMovies(handleQueryChange);
    }
  }, [handleQueryChange]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({
      handleQueryChange: form.elements.handleQueryChange.value,
    });
    form.reset();
  };

  const getSearchMovies = async handleQueryChange => {
    try {
      setLoading(true);
      const movie = await fetchMovieSearch(handleQueryChange);
      setMovie(movie);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledInput type="text" name="handleQueryChange" />
        <StyledSearchButton type="submit">Search</StyledSearchButton>
      </StyledSearchForm>
      {error && !loading && <p>Sorry, try again</p>}
      {loading && <Loader />}
      {movie.length > 0 && <MoviesList movies={movie} />}
    </section>
  );
};

export default Movies;
