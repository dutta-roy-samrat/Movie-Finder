import { Dispatch, SetStateAction, useCallback, useState } from "react";

import Button from "@/components/ui/button";
import ImageComponent from "@/components/ui/multimedia";

import { MoviesDataType } from "@/components/movie-list/types";

import { cn } from "@/utils/classname";

import outlineHeartIcon from "@/assets/icons/outline-heart.png";
import filledHeartIcon from "@/assets/icons/filled-heart.png";

import styles from "./main.module.css";

const FavoriteButton = ({
  isFavorited,
  movie,
  className,
  setFavorites,
}: {
  isFavorited: boolean;
  movie: MoviesDataType["results"][number];
  className?: string;
  setFavorites?: Dispatch<SetStateAction<MoviesDataType["results"]>>;
}) => {
  const [isFavorite, setIsFavorite] = useState(isFavorited);

  const handleFavorite = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        const favoriteMovies = JSON.parse(
          localStorage.getItem("favorite_movies") || "{}"
        );
        const updatedFavorites = isFavorite
          ? favoriteMovies
          : { ...favoriteMovies, [movie.id]: movie };

        if (isFavorite) {
          delete updatedFavorites[movie.id];
        }

        localStorage.setItem(
          "favorite_movies",
          JSON.stringify(updatedFavorites)
        );
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
        setFavorites?.(Object.values(updatedFavorites));
      } catch (error) {
        console.error("Error updating favorites:", error);
      }
    },
    [isFavorite, movie, setFavorites]
  );

  return (
    <Button
      aria-label="Add to favorites"
      className={cn(styles.favoriteButton, className)}
      onClick={handleFavorite}
    >
      <ImageComponent
        src={isFavorite ? filledHeartIcon : outlineHeartIcon}
        alt="Heart Icon"
        width={24}
        height={24}
        addPlaceholder={false}
      />
    </Button>
  );
};

export default FavoriteButton;
