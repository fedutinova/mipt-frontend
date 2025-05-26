// components/Navbar.jsx
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex 
      bg="white"
      p={4}
      boxShadow="sm"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="whiteAlpha.300"
      position="sticky"
      top={0}
      zIndex={1000}
      width="100%"
      maxWidth="1250px"
      margin="0 auto"
      borderRadius="md"
      _hover={{ boxShadow: 'md' }}
      transition="box-shadow 0.2s ease-in-out"
      _active={{ boxShadow: 'lg' }}
      _focus={{ boxShadow: 'lg' }}

    >
      <Box>
        <Text display="inline-block" color="blue" mr={8}>Все фильмы</Text>
        <Text display="inline-block" mr={4}>Избранное</Text>
        <Text display="inline-block" mr={4}>Добавить фильм</Text>
      </Box>
    </Flex>
  );
};

export default Navbar;
