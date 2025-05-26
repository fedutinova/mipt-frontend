import {
  Box,
  Flex,
  Text,
  Image,
  Icon,
  Button,
  Divider,
} from '@chakra-ui/react';
import { FaRegClock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { moviePosters, movies } from '../data/movies';
import { useFavorites } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteMovies = movies.filter((m) => Array.isArray(favorites) && favorites.includes(m.id));

  return (
    <Box bg="white" minH="100vh" display="flex" flexDirection="column">
      <Navbar />

      <Box px={{ base: 4, md: 6 }} ml={40} flex="1" mb={20} maxW="2000px" alignSelf="flex-start">
        <Text fontSize="3xl" fontWeight="bold" my={10}>
          Избранное
        </Text>

        {favoriteMovies.map((movie) => (
          <Box key={movie.id} mb={6}>
            <Flex align="center" justify="space-between">
              <Flex align="center" gap={4} flex="1.5">
                <Image
                  src={moviePosters[movie.title]}
                  alt={movie.title}
                  boxSize=  "100px"
                  borderRadius="full"
                  objectFit="cover"
                />
                <Box ml={8}>
                  <Text fontWeight="medium" fontSize="lg">
                    {movie.title}
                  </Text>
                  <Flex align="center" mt={6} color="gray.600">
                    <Icon as={FaRegClock} mr={2} />
                    <Text>{movie.duration}</Text>
                  </Flex>
                </Box>
              </Flex>
              <Button
                variant="ghost"
                color="gray.500"
                fontWeight="normal"
                onClick={() => toggleFavorite(movie.id)}
                ml={80}
              >
                Удалить
              </Button>
            </Flex>
            <Divider mt={4} />
          </Box>
        ))}
      </Box>

      <Box bg="black" color="white" py={8} px={{ base: 4, md: 6 }}>
        <Text fontSize="lg">Фильмограф</Text>
      </Box>
    </Box>
  );
};

export default Favorites;
