import { useFavorites } from '../context/FavoritesContext.jsx';
import { useState } from 'react';
import { Box, Flex, Heading, SimpleGrid, Text, Checkbox  } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { MovieCard } from '../components/MovieCard';
import { movies, moviePosters } from '../data/movies';
import { genres } from '../data/genres';

const GenreCheckbox = ({ genre, isChecked, onChange }) => (
  <Checkbox
  isChecked={isChecked}
  onChange={onChange}
  size="lg"
  spacing="0.5rem"
  sx={{
    display: 'flex',
    alignItems: 'center',
    '.chakra-checkbox__control': {
      borderRadius: 'full',
      width: '25px',
      height: '25px',
      bg: isChecked ? `genres.${genre.id}` : 'white',
      borderColor: `genres.${genre.id}`,
      _checked: {
        bg: `genres.${genre.id}`,
        borderColor: `genres.${genre.id}`,
      },
    },
  }}
>
  <Text fontSize="lg">{genre.name}</Text>
</Checkbox>
);

const Home = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genreId) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );
  };

  const filteredMovies =
    selectedGenres.length === 0
      ? movies
      : movies.filter((movie) => selectedGenres.includes(movie.genre));

  return (
    <Box bg="white" minH="100vh" display="flex" flexDirection="column">
      <Navbar />

      <Box px={{ base: 4, md: 6 }} mx="auto" flex="1" mb={20}>
        <Flex justify="space-between" align="center" flexWrap="wrap" gap={4} mt={10} mb={6}>
          <Heading as="h1" fontSize="40px" fontWeight="800">
            Фильмы
          </Heading>

          <Flex gap={4} wrap="wrap" justify="flex-end">
            {genres.map((genre) => (
              <GenreCheckbox
                key={genre.id}
                genre={genre}
                isChecked={selectedGenres.includes(genre.id)}
                onChange={() => toggleGenre(genre.id)}
              />
            ))}
          </Flex>
        </Flex>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              poster={moviePosters[movie.title]}
              isFavorite={Array.isArray(favorites) && favorites.includes(movie.id)}
              onToggleFavorite={() => toggleFavorite(movie.id)}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box bg="black" color="white" py={8} textAlign="left" px={{ base: 4, md: 6 }}>
        <Text fontSize="lg">Фильмограф</Text>
      </Box>
    </Box>
  );
};

export default Home;
