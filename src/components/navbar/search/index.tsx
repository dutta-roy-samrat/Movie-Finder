"use client";

import { useCallback, useRef } from "react";

import { useMovieListContext } from "@/context/movie-list";

import SearchBar from "@/components/ui/search-bar";

import { getSearchMovies, getTrendingMovies } from "@/constants/api-endpoints";

import styles from "./main.module.css";

const NavSearch = () => {
  const { setMoviesData } = useMovieListContext();
  const controller = useRef<AbortController | null>(null);
  const handleSearch = useCallback(
    async (value: string) => {
      if (controller.current) {
        controller.current.abort();
      }
      console.log(value);
      controller.current = new AbortController();
      try {
        const res = await fetch(
          value
            ? getSearchMovies({ query: value, page: 1 })
            : getTrendingMovies({ page: 1 }),
          {
            signal: controller.current.signal,
          }
        );

        const data = await res.json();
        setMoviesData(data);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Fetch failed:", error);
        }
      }
    },
    [setMoviesData]
  );

  return (
    <SearchBar
      placeholder="Search for a movie"
      onChange={handleSearch}
      className={styles.searchBar}
    />
  );
};

export default NavSearch;
