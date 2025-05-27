import { Box, Flex, Button, Icon, Text, Image } from '@chakra-ui/react';
import { FaStar, FaRegStar, FaRegClock } from 'react-icons/fa';
import { genres } from '../data/genres';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie, poster, isFavorite, onToggleFavorite }) => {
  const genre = genres.find(g => g.id === movie.genre);
  const genreColor = `genres.${movie.genre}`;

  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.200"
      overflow="hidden"
      position="relative"
    >
      <Button
        variant="ghost"
        position="absolute"
        top={243}
        right={2}
        zIndex={2}
        onClick={(e) => {
          onToggleFavorite();
        }}
      >
      <Icon
        as={isFavorite ? FaStar : FaRegStar}
        color="yellow.400"
        boxSize={6}
      />
      </Button>
      <Link to={`/movie/${movie.id}`}>
      <Box position="relative">
        
        <Image
          src={poster || 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={movie.title}
          objectFit="cover"
          h="192px"
          w="100%"
        />
      </Box>
      <Box p={4}>
        <Text fontWeight="bold" fontSize="xl" mb={2}>
          {movie.title}
        </Text>
        <Flex align="center" justify="space-between">
          <Box bg={genreColor} px={3} py={1} borderRadius="full">
            <Text fontSize="sm" color="white" fontWeight="medium">
              {genre.name}
            </Text>
          </Box>

          <Flex align="center">
            <Icon as={FaRegClock} mr={1} />
            <Text fontSize="md">{movie.duration}</Text>
          </Flex>
          <Button variant="ghost"/>
        </Flex>
      </Box>
      </Link>
    </Box>
  );
};
