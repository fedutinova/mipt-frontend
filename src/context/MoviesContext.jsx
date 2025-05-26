import { createContext, useContext, useState } from 'react';
import { movies as initialMovies, moviePosters as initialPosters } from '../data/movies';

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(initialMovies);
  const [moviePosters, setMoviePosters] = useState(initialPosters);

  const addMovie = (newMovie, imageUrl) => {
    setMovies((prev) => [...prev, newMovie]);
    setMoviePosters((prev) => ({ ...prev, [newMovie.title]: imageUrl }));
  };

  return (
    <MoviesContext.Provider value={{ movies, addMovie, moviePosters }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
