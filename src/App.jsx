import React from 'react'
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import AddMovie from './pages/AddMovie'
import MovieDetails from './pages/MovieDetails'
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <Box minH="100vh" bg="gray.100" py={10}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>
    </Box>
  )
}

export default App
