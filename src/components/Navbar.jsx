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
      borderColor="gray.200"
    >
      <Box>
        <Text fontWeight="bold" display="inline-block" mr={8}>Главная</Text>
        <Text display="inline-block" mr={4}>Все фильмы</Text>
        <Text display="inline-block" mr={4}>Избранное</Text>
      </Box>
      
      <Button 
        colorScheme="blue" 
        size="sm"
        borderRadius="full"
      >
        Добавить фильм
      </Button>
    </Flex>
  );
};

export default Navbar;
