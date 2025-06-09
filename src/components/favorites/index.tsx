"use client";

import { useCallback, useEffect } from "react";
import { useState } from "react";

import MovieItem from "@/components/movie-list/item";

import { MoviesDataType } from "@/components/movie-list/types";

import styles from "./main.module.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState<MoviesDataType["results"]>([]);

  useEffect(() => {
    try {
      const favoriteMovies = localStorage.getItem("favorite_movies");
      if (favoriteMovies) {
        setFavorites(Object.values(JSON.parse(favoriteMovies)));
      }
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  }, []);

  const renderMovies = useCallback(() => {
    return favorites.map((movie) => (
      <MovieItem key={movie.id} movie={movie} setFavorites={setFavorites} />
    ));
  }, [favorites]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        {favorites.length > 0 ? (
          renderMovies()
        ) : (
          <div className={styles.noFavoritesContainer}>
            <span>No favorites to show.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
