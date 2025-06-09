"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMovieListContext } from "@/context/movie-list";
import { useMovieFilterContext } from "@/context/movie-filter";

import Button from "@/components/ui/button";
import { MoviesDataType } from "@/components/movie-list/types";

import { getFilteredMovies, getGenres } from "@/constants/api-endpoints";

import styles from "./main.module.css";

const currentYear = new Date().getFullYear();

const DEFAULT_FILTERS = {
  genre: "",
  fromYear: 1900,
  toYear: currentYear,
  fromRating: 0,
  toRating: 10,
};

const defaultArr: any[] = [];

const FilterSection = () => {
  const { setMoviesData } = useMovieListContext();
  const [genres, setGenres] =
    useState<MoviesDataType["results"][number]["genres"]>(defaultArr);
  const [isLoadingGenres, setIsLoadingGenres] = useState(false);

  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const controllerRef = useRef<AbortController | null>(null);

  const handleFilter = useCallback(
    async (newFilters = filters) => {
      try {
        controllerRef.current?.abort();
        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        const response = await fetch(
          getFilteredMovies({
            ...newFilters,
          }),
          { signal }
        );

        const data = await response.json();
        setMoviesData(data);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error(error);
        }
      }
    },
    [filters, setMoviesData]
  );

  const updateFilter = useCallback(
    (key: keyof typeof filters, value: string | number) => {
      setFilters((prev) => {
        const updated = { ...prev, [key]: value };

        if (key === "fromYear" && Number(value) >= prev.toYear)
          updated.fromYear = prev.toYear;
        if (key === "toYear" && Number(value) <= prev.fromYear)
          updated.toYear = prev.fromYear;
        if (key === "fromRating" && Number(value) >= prev.toRating)
          updated.fromRating = prev.toRating;
        if (key === "toRating" && Number(value) <= prev.fromRating)
          updated.toRating = prev.fromRating;

        handleFilter(updated);
        return updated;
      });
    },
    [handleFilter]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      updateFilter(
        name as keyof typeof filters,
        type === "number" ? Number(value) : value
      );
    },
    [updateFilter]
  );

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(getGenres());
        const data = await response.json();
        setGenres(data.genres);
      } finally {
        setIsLoadingGenres(false);
      }
    };
    setIsLoadingGenres(true);
    fetchGenres();
  }, []);

  return (
    <section className={styles.filterSectionContainer}>
      <div className={styles.filterSectionHeaderContainer}>
        <header className={styles.filterSectionHeader}>Filters</header>
        <Button
          onClick={handleClearFilters}
          aria-label="Clear Filters"
          className={styles.clearFiltersButton}
        >
          Clear Filters
        </Button>
      </div>
      <form onSubmit={handleSubmit} className={styles.filterSectionForm}>
        <div className={styles.filterSectionFieldContainer}>
          <label htmlFor="genre" className={styles.labelClass}>
            Genre
          </label>
          <select
            value={filters.genre}
            onChange={handleInputChange}
            className={styles.inputClass}
            id="genre"
            name="genre"
          >
            <option value="">All</option>
            {isLoadingGenres ? (
              <option value="">Loading...</option>
            ) : (
              genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))
            )}
          </select>
        </div>
        <div className={styles.filterSectionFieldContainer}>
          <label className={styles.labelClass}>Year</label>
          <div className={styles.rangeInputContainer}>
            <input
              type="number"
              name="fromYear"
              value={filters.fromYear}
              onChange={handleInputChange}
              min={1900}
              max={currentYear}
              className={styles.inputClass}
              id="fromYear"
            />
            <span className={styles.labelClass}>-</span>
            <input
              type="number"
              name="toYear"
              value={filters.toYear}
              onChange={handleInputChange}
              min={1900}
              max={currentYear}
              className={styles.inputClass}
              id="toYear"
            />
          </div>
        </div>

        <div className={styles.filterSectionFieldContainer}>
          <label className={styles.labelClass}>Rating</label>
          <div className={styles.rangeInputContainer}>
            <input
              type="number"
              name="fromRating"
              value={filters.fromRating}
              onChange={handleInputChange}
              min={0}
              max={filters.toRating}
              step={0.1}
              className={styles.inputClass}
              id="fromRating"
            />
            <span className={styles.labelClass}>-</span>
            <input
              type="number"
              name="toRating"
              value={filters.toRating}
              onChange={handleInputChange}
              min={filters.fromRating}
              max={10}
              step={0.1}
              className={styles.inputClass}
              id="toRating"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

const FilterSectionWrapper = () => {
  const { isFilterOpen } = useMovieFilterContext();
  if (!isFilterOpen) return null;
  return <FilterSection />;
};

export default FilterSectionWrapper;
