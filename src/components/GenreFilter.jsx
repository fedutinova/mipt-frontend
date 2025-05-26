import { Wrap, WrapItem, Button } from '@chakra-ui/react'

const GenreFilter = ({ genres, selectedGenres, setSelectedGenres }) => {
  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre))
    } else {
      setSelectedGenres([...selectedGenres, genre])
    }
  }

  return (
    <Wrap spacing={2}>
      {genres.map(genre => (
        <WrapItem key={genre}>
          <Button
            size="sm"
            variant={selectedGenres.includes(genre) ? 'solid' : 'outline'}
            colorScheme="blue"
            onClick={() => toggleGenre(genre)}
          >
            {genre}
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default GenreFilter
