export type MoviesDataType = {
  results: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    genres: {
      id: number;
      name: string;
    }[];
    overview: string;
    tagline: string;
  }[];
  page: number;
  total_pages: number;
  total_results: number;
};
