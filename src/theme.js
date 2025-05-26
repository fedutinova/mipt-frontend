import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    genres: {
      action: '#FF5252',
      thriller: '#9C27B0',
      comedy: '#FFC107',
      drama: '#2196F3',
    },
  },
})

export default theme
