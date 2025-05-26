import { useState, useEffect } from 'react'
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import MovieCard from '../components/MovieCard'
import GenreFilter from '../components/GenreFilter'
import { fetchMovies } from '../services/api'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies()
        setMovies(data)
        setFilteredMovies(data)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }
    
    getMovies()
  }, [])

  useEffect(() => {
    if (selectedGenres.length === 0) {
      setFilteredMovies(movies)
    } else {
      setFilteredMovies(
        movies.filter(movie => selectedGenres.includes(movie.genre))
      )
    }
  }, [selectedGenres, movies])

  return (
    <Box>
      <Navbar />
      
      <Box p={8}>
        <Heading as="h1" mb={8} textAlign="center">
          Все фильмы
        </Heading>
        
        <GenreFilter 
          genres={['Боевик', 'Триллер', 'Комедия', 'Драма']} 
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
        
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} mt={8}>
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Home
