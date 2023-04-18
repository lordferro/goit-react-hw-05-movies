const API_KEY = 'ba0ad73f76c4f815c78bb333b0b1b2be';

export const getTrendingMoviesUrl = () => {
  return `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
};

export const getMoviesByQueryUrl = query => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
};

export const getMoviesByIdUrl = id => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
};

export const getMovieCastUrl = id => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
};

export const getMovieReviewsUrl = id => {
  return `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`;

};
