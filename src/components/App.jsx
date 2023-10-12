import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { Layout } from './Layout';
import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/movies" element={<div>Movies</div>} /> */}
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<p>Not found</p>} />
      </Route>
    </Routes>
  );
};
