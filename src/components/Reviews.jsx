import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services/api';
import Loader from '../components/Loader';

const MovieReview = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // from params
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReview(movieId);
  }, [movieId]);

  const getMovieReview = async movieId => {
    try {
      setLoading(true);
      const review = await fetchMovieReviews(movieId);
      setReview(review);
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
        {review.length > 0 && (
          <ul>
            {review.map(({ id, author, content }) => (
              <li key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
        {!review.length && <p>We don't have any reviews for this movie.</p>}
      </section>
    </div>
  );
};

export default MovieReview;
