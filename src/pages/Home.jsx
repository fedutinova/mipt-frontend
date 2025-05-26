import { useState } from 'react';
import { Box, Flex, Heading, SimpleGrid, GridItem, Checkbox, Text} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { MovieCard } from '../components/MovieCard'

const GenreCheckbox = ({ genre, isChecked, onChange }) => {
  return (
    <Checkbox
      isChecked={isChecked}
      onChange={onChange}
      icon={<FaCheck color="white" />}
      size="lg"
      spacing="0.5rem"
      sx={{
        display: "flex",
        alignItems: "center",
        '.chakra-checkbox__control': {
          borderRadius: "full",
          width: "25px",
          height: "25px",
          bg: isChecked ? `genres.${genre.id}` : "white",
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
};

const Home = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const movies = [
    { id: 1, title: 'Матрица', genre: 'action', duration: '136 мин.' },
    { id: 2, title: 'Отступники', genre: 'thriller', duration: '151 мин.' },
    { id: 3, title: 'Предложение', genre: 'comedy', duration: '108 мин.' },
    { id: 4, title: 'Безумный Макс', genre: 'action', duration: '88 мин.' },
    { id: 5, title: 'Гладиатор', genre: 'action', duration: '155 мин.' },
    { id: 6, title: 'Малышка на миллион', genre: 'drama', duration: '132 мин.' },
    { id: 7, title: 'Джентельмены', genre: 'drama', duration: '113 мин.' },
    { id: 8, title: 'Однажды в Голливуде', genre: 'drama', duration: '161 мин.' },
    { id: 9, title: 'Ларри Краун', genre: 'comedy', duration: '98 мин.' },
  ];

  const genres = [
    { id: 'action', name: 'Боевик' },
    { id: 'thriller', name: 'Триллер' },
    { id: 'comedy', name: 'Комедия' },
    { id: 'drama', name: 'Драма' },
  ];

  const moviePosters = {
  'Матрица': 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
  'Отступники': 'https://m.media-amazon.com/images/M/MV5BMTI1MTM2MTI0MF5BMl5BanBnXkFtZTYwMjQ1NjY3._V1_.jpg',
  'Предложение': 'https://m.media-amazon.com/images/M/MV5BOGM5YWU2N2QtYjVhZi00MzYyLTk0ODctYmVlNDZlMjI5MWQzXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg',
  'Безумный Макс': 'https://m.media-amazon.com/images/M/MV5BMTEyODQzNDkzNjVeQTJeQWpwZ15BbWU4MDQwODExMDEx._V1_.jpg',
  'Гладиатор': 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
  'Малышка на миллион': 'https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_.jpg',
  'Джентельмены': 'https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg',
  'Однажды в Голливуде': 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg',
  'Ларри Краун': 'https://m.media-amazon.com/images/M/MV5BMTk3NDM4NTI1OV5BMl5BanBnXkFtZTcwNjQ1MjY3NA@@._V1_.jpg'
};

  const toggleFavorite = (movieId) => {
    setFavorites(prev =>
      prev.includes(movieId)
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    );
  };

  const toggleGenre = (genreId) => {
    setSelectedGenres(prev =>
      prev.includes(genreId)
        ? prev.filter(id => id !== genreId)
        : [...prev, genreId]
    );
  };

  const filteredMovies = selectedGenres.length === 0
    ? movies
    : movies.filter(movie => selectedGenres.includes(movie.genre));

  return (
    <Box bg="white" minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      
      <Box px={{ base: 4, md: 6 }} mx="auto" flex="1" mb={20}>
        <Flex
          justify="space-between"
          align="center"
          flexWrap="wrap"
          gap={4}
          mt={10}
          mb={6}
        >
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

        
        {/* Список фильмов */}
         <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
            spacing={20}
            px={{ base: 2, md: 0 }}
          >
            {filteredMovies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                poster={moviePosters[movie.title]}
                isFavorite={favorites.includes(movie.id)}
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
