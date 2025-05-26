import { useState } from 'react';
import { Box, Flex, Heading, Grid, Button, Checkbox, Icon, Text, GridItem } from '@chakra-ui/react';
import { FaStar, FaRegStar, FaClock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { MovieCard } from '../components/MovieCard'

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
    <Box bg="gray.50" minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      
      <Box p={6} maxW="1200px" mx="auto" flex="1">
        <Heading as="h1" fontSize="32px" mb={6} fontWeight="800">Фильмы</Heading>
        
        {/* Фильтры по жанрам */}
        <Flex gap={4} mb={8} wrap="wrap">
          {genres.map((genre) => (
            <Checkbox
              key={genre.id}
              isChecked={selectedGenres.includes(genre.id)}
              onChange={() => toggleGenre(genre.id)}
              colorScheme={genre.id}
              spacing="1rem"
              size="lg"
            >
              {genre.name}
            </Checkbox>
          ))}
        </Flex>
        
        {/* Список фильмов */}
        <Grid 
          templateColumns="repeat(3, 1fr)" 
          gap={6}
          sx={{
            '@media (max-width: 900px)': {
              templateColumns: 'repeat(2, 1fr)',
            },
            '@media (max-width: 600px)': {
              templateColumns: '1fr',
            },
          }}
        >
          {filteredMovies.map(movie => (
            <GridItem key={movie.id}>
              <MovieCard
                movie={movie}
                isFavorite={favorites.includes(movie.id)}
                onToggleFavorite={() => toggleFavorite(movie.id)}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
      
      {/* Футер */}
      <Box bg="black" color="white" py={4} textAlign="center">
        <Text fontSize="lg">Фильмограф</Text>
      </Box>
    </Box>
  );
};

export default Home;
