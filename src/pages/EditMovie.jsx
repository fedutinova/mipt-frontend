import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Text,
  Grid,
  GridItem,
  Center,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { genres } from '../data/genres';
import { GenreCheckbox } from '../components/GenreCheckbox';
import { useMovies } from '../context/MoviesContext.jsx';

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, updateMovie } = useMovies();
  const movie = movies.find((m) => m.id === Number(id));

  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDuration(parseInt(movie.duration));
      setDescription(movie.description);
      setSelectedGenres([movie.genre]);
      setImageUrl(movie.imageUrl || '');
    }
  }, [movie]);

  const toggleGenre = (genreId) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );
  };

  const handleSubmit = () => {
    if (!title || selectedGenres.length === 0 || !duration) return;

    const updatedMovie = {
      id: movie.id,
      title,
      genre: selectedGenres[0],
      duration: `${duration} мин`,
      description,
      imageUrl: imageUrl || movie.imageUrl,
    };

    updateMovie(updatedMovie);
    navigate(`/movie/${movie.id}`);
  };

  return (
    <Box bg="white" minH="100vh" display="flex" flexDirection="column">
      <Navbar />

      <Box px={{ base: 4, md: 6 }} ml={40} flex="1" maxW="1200px" alignSelf="flex-start">
        <Heading as="h1" fontSize="40px" fontWeight="800" my={10}>
          Редактировать фильм
        </Heading>
      </Box>

      <Box px={6} mx="auto" flex="1" mb={20} w="100%" maxW="800px">
        <Box borderWidth={1} borderRadius="xl" p={6} boxShadow="sm">
          <Grid templateColumns={{ base: '1fr', md: '150px 1fr' }} gap={4}>
            <FormLabel mt={2}>Название фильма</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />

            <FormLabel mt={2}>Жанр</FormLabel>
            <Flex gap={4} wrap="wrap">
              {genres.map((genre) => (
                <GenreCheckbox
                  key={genre.id}
                  genre={genre}
                  isChecked={selectedGenres.includes(genre.id)}
                  onChange={() => toggleGenre(genre.id)}
                />
              ))}
            </Flex>

            <FormLabel mt={2}>Длительность</FormLabel>
            <Flex align="center" gap={2}>
              <Input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                type="number"
                w="100px"
              />
              <Box>мин</Box>
            </Flex>

            <FormLabel mt={2}>Описание</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />

            <FormLabel mt={2}>Ссылка на постер</FormLabel>
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />

            <GridItem colSpan={2}>
              <Center>
                <Button colorScheme="blue" size="md" onClick={handleSubmit}>
                  Сохранить изменения
                </Button>
              </Center>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      <Box bg="black" color="white" py={8} px={{ base: 4, md: 6 }} mt="auto">
        <Text fontSize="lg" ml={40}>Фильмограф</Text>
      </Box>
    </Box>
  );
};

export default EditMovie;
