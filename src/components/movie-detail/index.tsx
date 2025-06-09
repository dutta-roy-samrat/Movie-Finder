"use client";

import { useMemo } from "react";

import ImageComponent from "@/components/ui/multimedia";
import FavoriteButton from "@/components/favorites/button";

import { MoviesDataType } from "@/components/movie-list/types";

import { getIsMovieFavorited } from "@/utils/movie";

import styles from "./main.module.css";

const MovieDetail = ({ data }: { data: MoviesDataType["results"][number] }) => {
  const isFavorited = useMemo(() => {
    return getIsMovieFavorited(data.id);
  }, [data.id]);

  const genres = useMemo(
    () =>
      data.genres.map(
        (genre: MoviesDataType["results"][number]["genres"][number]) => (
          <span
            key={genre.id}
            className="inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold ml-2 bg-slate-700 text-slate-200 my-2"
          >
            {genre.name}
          </span>
        )
      ),
    [data.genres]
  );

  return (
    <div className={styles.movieDetailContainer}>
      <main className={styles.mainContent}>
        <div className={styles.movieDetails}>
          <div className={styles.movieImage}>
            <ImageComponent
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
              width={500}
              height={750}
              className={styles.imgClass}
            />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.headerContainer}>
              <h1 className={styles.movieTitle}>{data.title}</h1>
              <FavoriteButton isFavorited={isFavorited} movie={data} />
            </div>
            <p className={styles.movieTagline}>{data.tagline}</p>
            <p className={styles.movieReleaseDate}>
              <strong>Release Date:</strong> {data.release_date ?? "N/A"}
            </p>
            <p className={styles.movieDetailField}>
              <strong>Rating:</strong> {data.vote_average} ({data.vote_count}{" "}
              votes)
            </p>
            <p className={styles.movieDetailField}>
              <strong>Popularity:</strong> {data.popularity}
            </p>
            <p className={styles.movieDetailField}>
              <strong>Genres:</strong>
              {genres}
            </p>
            <section
              className={styles.overviewContainer}
              aria-labelledby="movie-overview"
            >
              <h2 className={styles.overviewTitle}>Overview</h2>
              <br />
              <p className={styles.overviewContent}>{data.overview}</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetail;
