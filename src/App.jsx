import React from 'react'
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// import About from './pages/About' // пример дополнительной страницы

function App() {
  return (
    <Box minH="100vh" bg="gray.100" py={10}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Box>
  )
}

export default App
