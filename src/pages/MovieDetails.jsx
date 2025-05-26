import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Icon,
  Badge,
  Button,
} from '@chakra-ui/react';
import { FaRegClock, FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useFavorites } from '../context/FavoritesContext';
import { useMovies } from '../context/MoviesContext';
import { genres } from '../data/genres';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const { deleteMovie, movies } = useMovies();

  const movie = movies.find((m) => m.id === Number(id));
  if (!movie) return <Box p={10}>Фильм не найден</Box>;

  const handleDelete = () => {
    deleteMovie(movie.id);
    navigate('/');
  };

  const genreName = genres.find((g) => g.id === movie.genre)?.name;

  return (
    <Box bg="white" minH="100vh" display="flex" flexDirection="column">
      <Navbar />

      <Flex px={10} mt={10} mb={20} alignItems="flex-start" gap={10} maxW="1000px" mx="auto">
        <Image
          src={movie.imageUrl}
          alt={movie.title}
          objectFit="cover"
          borderRadius="lg"
          boxSize="350px"
        />

        <Box flex={1}>
          <Flex justify="space-between" align="center">
            <Heading fontSize="3xl" fontWeight="bold">
              {movie.title}
            </Heading>
            <Icon
              as={favorites.includes(movie.id) ? FaStar : FaRegStar}
              boxSize={6}
              color='yellow.400'
              cursor="pointer"
              onClick={() => toggleFavorite(movie.id)}
            />
          </Flex>

          <Flex align="center" mt={2} gap={4}>
            <Badge colorScheme="orange" px={2} py={1} borderRadius="md">
              {genreName}
            </Badge>
            <Flex align="center" color="gray.600">
              <Icon as={FaRegClock} mr={2} />
              <Text>{movie.duration}</Text>
            </Flex>
          </Flex>

          <Text mt={6} fontSize="md" color="gray.700" whiteSpace="pre-line">
            {movie.description}
          </Text>

          <Flex mt={10} gap={4}>
            <Button as={Link} to={`/edit/${movie.id}`} colorScheme="blue" variant="outline">
              Редактировать
            </Button>
            <Button colorScheme="red" onClick={handleDelete}>
              Удалить
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Box bg="black" color="white" py={8} px={{ base: 4, md: 6 }} mt="auto">
        <Text fontSize="lg" ml={40}>Фильмограф</Text>
      </Box>
    </Box>
  );
};

export default MovieDetails;
