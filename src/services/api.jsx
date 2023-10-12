import axios from 'axios';

const API_KEY = 'b45b1c12fd7958738751591d9e5171e0';

export const fetchTrendingMovies = async () => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
    );
    console.log(resp.data.results);
    return resp.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async id => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async id => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async id => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchMovieSearch = async searchQuery => {
//   try {
//     const resp = await axios.get(
//       `https://api.themoviedb.org/3/search/movie/${searchQuery}/reviews?api_key=${API_KEY}&language=en-US`
//     );
//     console.log(resp.data);
//     return resp.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
