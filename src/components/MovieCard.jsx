import { Box, Flex, Button, Icon, Text, Image } from '@chakra-ui/react';
import { FaStar, FaRegStar, FaRegClock } from 'react-icons/fa';

const genres = [
  { id: 'action', name: 'Боевик' },
  { id: 'thriller', name: 'Триллер' },
  { id: 'comedy', name: 'Комедия' },
  { id: 'drama', name: 'Драма' },
];

const moviePosters = {
  'Матрица': 'https://cs15.pikabu.ru/post_img/2024/12/12/7/og_og_1734000868220740329.jpg',
  'Отступники': 'https://cs14.pikabu.ru/post_img/2023/08/12/8/og_og_1691845212235017683.jpg',
  'Предложение': 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/the-proposal.jpg',
  'Безумный Макс': 'https://cdn.mos.cms.futurecdn.net/cj34SUnty2jPFpzHzkoRvL.jpg',
  'Гладиатор': 'https://images.kinorium.com/movie/poster/143897/w1500_50457996.jpg',
  'Малышка на миллион': 'https://webpulse.imgsmail.ru/imgpreview?key=pulse_cabinet-image-84adbf47-d13e-42f8-9314-fb28422d04f7&mb=webpulse',
  'Джентельмены': 'https://images.kinorium.com/movie/poster/1670490/h280_50263161.jpg',
  'Однажды в Голливуде': 'https://i.ytimg.com/vi/w-v4q20bLTc/maxresdefault.jpg',
  'Ларри Краун': 'https://sun9-75.userapi.com/39Jg9grb1d_MdgXHpJD1xL4SBEONshSMg3RskQ/WbSQrvZ4S5M.jpg'
};

export const MovieCard = ({ movie, isFavorite, onToggleFavorite }) => {
  const genreColor = `genres.${movie.genre}`;

  return (
    <Box 
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.200"
      position="relative"
      overflow="hidden"
      minW="350px"
    >
      {/* Изображение фильма */}
      <Image 
        src={moviePosters[movie.title]} 
        alt={movie.title}
        objectFit="cover"
        h="192px"
        w="100%"
      />
      
      {/* Информация о фильме */}
      <Box p={4} flex="1" display="flex" flexDirection="column">
        <Text fontWeight="bold" fontSize="xl" mb={2}>{movie.title}</Text>
        <Flex align="center" justify="space-between" mb={1}>
          <Flex align="center">
            <Box 
              bg={genreColor}
              px={3}
              py={1}
              borderRadius="full"
            >
            <Text fontSize="sm" color="white" fontWeight="medium">
              {genres.find(g => g.id === movie.genre).name}
            </Text>
            </Box>
          </Flex>
          <Flex align="center" justify="center" flex="1">
            <Icon as={FaRegClock} mr={1} />
            <Text fontWeight="light" fontSize="md" color="black">{movie.duration}</Text>
          </Flex>
          <Button
            position="absolute"
            top={235}
            right={2}
            variant="ghost"
            p={1}
            minW="10"
            onClick={onToggleFavorite}
            zIndex="1"
            >
            <Icon as={isFavorite ? FaStar : FaRegStar} color="yellow.400" boxSize={5} />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
