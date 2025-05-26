import { Box, Flex, Button, Icon, Text, Image } from '@chakra-ui/react';
import { FaStar, FaRegStar, FaRegClock } from 'react-icons/fa';
import { genres } from '../data/genres';

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
      <Box position="relative">
        <Image
          src={poster || 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={movie.title}
          objectFit="cover"
          h="192px"
          w="100%"
        />

        {/* Кнопка "избранное" поверх изображения */}
        <Button
          position="absolute"
          top={2}
          right={2}
          variant="ghost"
          p={1}
          onClick={onToggleFavorite}
        >
          <Icon
            as={isFavorite ? FaStar : FaRegStar}
            color="yellow.400"
            boxSize={5}
          />
        </Button>
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
        </Flex>
      </Box>
    </Box>
  );
};
