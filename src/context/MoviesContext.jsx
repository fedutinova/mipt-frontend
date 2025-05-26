import { createContext, useContext, useState } from 'react';
import { movies as initialMovies } from '../data/movies';

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(
    initialMovies.map((movie) => ({
      ...movie,
      imageUrl: movie.imageUrl,
    }))
  );

  const addMovie = (movie, imageUrl) => {
    const newMovie = { ...movie, imageUrl };
    setMovies((prev) => [...prev, newMovie]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((m) => (m.id === updatedMovie.id ? { ...m, ...updatedMovie } : m))
    );
  };

  return (
    <MoviesContext.Provider value={{ movies, addMovie, updateMovie }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
