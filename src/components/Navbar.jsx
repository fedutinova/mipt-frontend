import { Flex, Box, Link, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex 
      as="nav" 
      bg="blue.600" 
      color="white" 
      p={4} 
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" mr={8}>
          Главная
        </Link>
        <Link as={RouterLink} to="/movies" mr={4}>
          Все фильмы
        </Link>
        <Link as={RouterLink} to="/favorites" mr={4}>
          Избранное
        </Link>
      </Box>
      
      <Button as={RouterLink} to="/add-movie" colorScheme="teal">
        Добавить фильм
      </Button>
    </Flex>
  )
}

export default Navbar
