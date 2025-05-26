import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import Home from './pages/Home'

const theme = extendTheme({
  colors: {
    genres: {
      action: '#FF5252',    // Боевик
      thriller: '#9C27B0',  // Триллер
      comedy: '#FFC107',    // Комедия
      drama: '#2196F3',     // Драма
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="gray.100" py={10}>
        <Home />
      </Box>
    </ChakraProvider>
  )
}

export default App
