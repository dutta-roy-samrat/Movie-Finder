"use client";

import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from "react";

import { MoviesDataType } from "@/components/movie-list/types";

const DEFAULT_MOVIES_DATA: MoviesDataType = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const MovieListContext = createContext<{
  moviesData: MoviesDataType;
  setMoviesData: Dispatch<SetStateAction<MoviesDataType>>;
}>({
  moviesData: DEFAULT_MOVIES_DATA,
  setMoviesData: () => {},
});

export const useMovieListContext = () => useContext(MovieListContext);

export const MovieListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [moviesData, setMoviesData] = useState<MoviesDataType>(DEFAULT_MOVIES_DATA);

  const value = useMemo(
    () => ({
      moviesData,
      setMoviesData,
    }),
    [moviesData]
  );

  return (
    <MovieListContext.Provider value={value}>
      {children}
    </MovieListContext.Provider>
  );
};
