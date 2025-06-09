"use client";

import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from "react";

export const MovieFilterContext = createContext<{
  isFilterOpen: boolean;
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isFilterOpen: false,
  setIsFilterOpen: () => {},    
});

export const useMovieFilterContext = () => useContext(MovieFilterContext);

const MovieFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const value = useMemo(
    () => ({
      isFilterOpen,
      setIsFilterOpen,
    }),
    [isFilterOpen]
  );

  return (
    <MovieFilterContext.Provider value={value}>
      {children}
    </MovieFilterContext.Provider>
  );
};

export default MovieFilterProvider;