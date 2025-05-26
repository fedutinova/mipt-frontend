import { Box, Heading, Text, Badge, Flex } from '@chakra-ui/react'

const MovieCard = ({ movie }) => {
  return (
    <Box 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      bg="white"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.03)' }}
    >
      <Box p={6}>
        <Heading as="h3" size="md" mb={2}>
          {movie.title}
        </Heading>
        
        <Flex alignItems="center" mb={2}>
          <Badge colorScheme={getBadgeColor(movie.genre)} mr={2}>
            {movie.genre}
          </Badge>
          <Text fontSize="sm" color="gray.500">
            {movie.duration} мин.
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}

const getBadgeColor = (genre) => {
  switch (genre) {
    case 'Боевик': return 'red'
    case 'Триллер': return 'purple'
    case 'Комедия': return 'yellow'
    case 'Драма': return 'blue'
    default: return 'gray'
  }
}

export default MovieCard
