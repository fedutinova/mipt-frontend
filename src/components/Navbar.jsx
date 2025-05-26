import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Все фильмы', path: '/' },
  { label: 'Избранное', path: '/favorites' },
  { label: 'Добавить фильм', path: '/add' },
];

const linkStyles = {
  mr: 6,
  fontWeight: 'medium',
  fontSize: 'lg',
  _hover: { color: 'blue.400' },
};

const Navbar = () => {
  return (
    <Flex
      as="nav"
      bg="white"
      p={4}
      alignItems="center"
      position="sticky"
      top={0}
      zIndex={1000}
      width="100%"
    >
      <Flex
      ml={40}
      > </Flex>
      {navItems.map(({ label, path }) => (
        <ChakraLink
          as={NavLink}
          to={path}
          key={path}
          {...linkStyles}
          _activeLink={{ color: 'blue.500', borderBottom: '2px solid blue.500' }}
        >
          {label}
        </ChakraLink>
      ))}
    </Flex>
  );
};

export default Navbar;
