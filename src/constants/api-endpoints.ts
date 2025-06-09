import { API_KEY } from "./environment-variables";

export const getTrendingMovies = ({ page }: { page: number }) =>
  `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`;

export const getSearchMovies = ({
  query,
  page,
}: {
  query: string;
  page: number;
}) =>
  `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&page=${page}`;

export const getFilteredMovies = ({
  genre,
  fromYear,
  toYear,
  fromRating,
  toRating,
}: {
  genre: string;
  fromYear: number;
  toYear: number;
  fromRating: number;
  toRating: number;
}) =>
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}&release_date.gte=${fromYear}-01-01&release_date.lte=${toYear}-12-31&vote_average.gte=${fromRating}&vote_average.lte=${toRating}`;

export const getGenres = () =>
  `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

export const getMovieDetail = (id: string) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
