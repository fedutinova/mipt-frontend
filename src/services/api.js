import axios from 'axios'

const API_URL = 'https://your-api-endpoint.com/movies'

export const fetchMovies = async () => {
  // В реальном приложении здесь был бы запрос к API
  // Для демонстрации используем моковые данные
  return [
    { id: 1, title: 'Матрица', genre: 'Боевик', duration: 136 },
    { id: 2, title: 'Отступники', genre: 'Триллер', duration: 151 },
    { id: 3, title: 'Предложение', genre: 'Комедия', duration: 108 },
    { id: 4, title: 'Безумный Макс', genre: 'Боевик', duration: 88 },
    { id: 5, title: 'Гладиатор', genre: 'Боевик', duration: 155 },
    { id: 6, title: 'Малышка на миллион', genre: 'Драма', duration: 132 },
    { id: 7, title: 'Джентельмены', genre: 'Драма', duration: 113 },
    { id: 8, title: 'Однажды в Голливуде', genre: 'Драма', duration: 161 },
    { id: 9, title: 'Ларри Краун', genre: 'Комедия', duration: 98 }
  ]
  
  // Реальный запрос:
  // const response = await axios.get(API_URL)
  // return response.data
}

export const addMovie = async (movieData) => {
  const response = await axios.post(API_URL, movieData)
  return response.data
}
