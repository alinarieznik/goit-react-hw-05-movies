// /movies/:movieId
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <Link key={id} to={`/movies/${id}`}>
          <li>
            <p>{original_title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
