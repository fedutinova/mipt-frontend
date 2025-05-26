import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import theme from './theme'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import { MoviesProvider } from './context/MoviesContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MoviesProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavoritesProvider>
      </MoviesProvider>
    </ChakraProvider>
  </React.StrictMode>
)
