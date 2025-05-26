import { Box, Flex, Button, Icon, Text } from '@chakra-ui/react';
import { FaStar, FaRegStar, FaClock } from 'react-icons/fa';

const genres = [
  { id: 'action', name: 'Боевик' },
  { id: 'thriller', name: 'Триллер' },
  { id: 'comedy', name: 'Комедия' },
  { id: 'drama', name: 'Драма' },
];

export const MovieCard = ({ movie, isFavorite, onToggleFavorite }) => {
  const genreColor = `genres.${movie.genre}`;

  return (
    <Box 
      bg="white"
      p={4}
      borderRadius="lg"
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.200"
      position="relative"
    >
      {/* Кнопка избранного */}
      <Button
        position="absolute"
        top={2}
        right={2}
        variant="ghost"
        p={1}
        minW="auto"
        onClick={onToggleFavorite}
      >
        <Icon as={isFavorite ? FaStar : FaRegStar} color="yellow.400" boxSize={5} />
      </Button>
      
      <Box>
        <Text fontWeight="bold" fontSize="lg" mb={1}>{movie.title}</Text>
        <Flex align="center" mb={1}>
          <Box w={3} h={3} bg={genreColor} borderRadius="full" mr={2} />
          <Text fontSize="sm" color="gray.600">
            {genres.find(g => g.id === movie.genre).name}
          </Text>
        </Flex>
        <Flex align="center">
          <Icon as={FaClock} color="gray.500" mr={1} />
          <Text fontSize="sm" color="gray.500">{movie.duration}</Text>
        </Flex>
      </Box>
    </Box>
  );
};
