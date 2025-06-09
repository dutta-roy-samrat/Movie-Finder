export const getIsMovieFavorited = (movieId: number) => {
  try {
    const favoriteMovies = localStorage.getItem("favorite_movies");
    if (favoriteMovies) {
      const parsedFavoriteMovies = JSON.parse(favoriteMovies) || {};
      return parsedFavoriteMovies[movieId] !== undefined;
    }
    return false;
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return false;
  }
};
