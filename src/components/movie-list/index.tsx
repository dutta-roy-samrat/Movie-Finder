"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useMovieListContext } from "@/context/movie-list";

import MovieItem from "@/components/movie-list/item";
import Spinner from "@/components/ui/loader/spinner";

import { MoviesDataType } from "@/components/movie-list/types";

import { getTrendingMovies } from "@/constants/api-endpoints";

import styles from "./main.module.css";

const MovieList = ({ data }: { data: MoviesDataType }) => {
  const { moviesData, setMoviesData } = useMovieListContext();

  const finalMoviesData = useMemo(() => {
    return moviesData?.page === 0 ? data : moviesData;
  }, [data, moviesData]);

  const [isFetching, setIsFetching] = useState(false);
  const lastMovieRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef(finalMoviesData.page);
  const isFetchingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (isFetchingRef.current) return;
        if (entry.isIntersecting) {
          try {
            setIsFetching(true);
            isFetchingRef.current = true;
            const res = await fetch(
              getTrendingMovies({ page: pageRef.current + 1 })
            );
            if (!res.ok) {
              throw new Error("Failed to fetch movies");
            }
            const data = await res.json();
            if (pageRef.current + 1 === data.total_pages) {
              observer.disconnect();
            }
            setMoviesData((prevMoviesData) => ({
              results: [...prevMoviesData.results, ...data.results],
              page: data.page,
              total_pages: data.total_pages,
              total_results: data.total_results,
            }));
            pageRef.current = data.page;
          } catch (error) {
            console.error("Error fetching movies:", error);
          } finally {
            setIsFetching(false);
            isFetchingRef.current = false;
          }
        }
      });
    });
    if (lastMovieRef.current) {
      observer.observe(lastMovieRef.current);
    }
    setMoviesData(data);
    return () => {
      observer.disconnect();
    };
  }, []);

  const renderMovies = useCallback(() => {
    return finalMoviesData.results.map((movie) => (
      <MovieItem key={movie.id} movie={movie} />
    ));
  }, [finalMoviesData.results]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.listContainer}>
        {finalMoviesData.results.length > 0 ? (
          renderMovies()
        ) : (
          <div className={styles.noMoviesContainer}>
            <div className={styles.noMoviesText}>No movies to show.</div>
          </div>
        )}
      </div>
      <div className={styles.sentinelDiv} ref={lastMovieRef}>
        {isFetching && (
          <div className={styles.loaderContainer} aria-live="polite">
            <Spinner className={styles.spinnerClass} />
            <span>Checking for more movies...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
