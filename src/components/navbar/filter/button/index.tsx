"use client";

import { useCallback, useEffect } from "react";

import { useMovieFilterContext } from "@/context/movie-filter";

import Button from "@/components/ui/button";

import styles from "./main.module.css";

const FilterButton = () => {
  const { setIsFilterOpen } = useMovieFilterContext();

  useEffect(() => {
    return () => setIsFilterOpen(false);
  }, []);

  const handleFilter = useCallback(() => {
    setIsFilterOpen((prev) => !prev);
  }, [setIsFilterOpen]);

  return <Button onClick={handleFilter} aria-label="Filter" className={styles.filterButton}>Filter</Button>;
};

export default FilterButton;
