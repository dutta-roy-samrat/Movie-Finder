import { Dispatch, SetStateAction, useMemo } from "react";
import Link from "next/link";

import FavoriteButton from "@/components/favorites/button";
import ImageComponent from "@/components/ui/multimedia";

import { MoviesDataType } from "@/components/movie-list/types";

import { getIsMovieFavorited } from "@/utils/movie";

import styles from "./main.module.css";

const MovieItem = ({
  movie,
  setFavorites,
}: {
  movie: MoviesDataType["results"][number];
  setFavorites?: Dispatch<SetStateAction<MoviesDataType["results"]>>;
}) => {
  const isFavorited = useMemo(() => getIsMovieFavorited(movie.id), [movie.id]);
  return (
    <Link
      className={styles.movieItemContainer}
      aria-label={`Movie: ${movie.title}`}
      href={`/details/${movie.id}`}
    >
      <ImageComponent
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Poster for ${movie.title}`}
        className={styles.imgClass}
      />
      <FavoriteButton
        className={styles.favoriteBtn}
        isFavorited={isFavorited}
        movie={movie}
        setFavorites={setFavorites}
      />
      <section className={styles.movieDetailsContainer}>
        <h2 className={styles.movieTitle}>{movie.title}</h2>
        <p className={styles.movieReleaseDate}>
          <strong>Release Date:</strong> {movie.release_date ?? "N/A"}
        </p>
        <p className={styles.movieDeatil}>
          <strong>Rating:</strong> {movie.vote_average} ({movie.vote_count}{" "}
          votes)
        </p>
        <p className={styles.movieDeatil}>
          <strong>Popularity:</strong> {movie.popularity}
        </p>
      </section>
    </Link>
  );
};

export default MovieItem;
