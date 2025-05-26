import { Checkbox, Text } from '@chakra-ui/react';

export const GenreCheckbox = ({ genre, isChecked, onChange }) => (
  <Checkbox
  isChecked={isChecked}
  onChange={onChange}
  size="lg"
  spacing="0.5rem"
  sx={{
    display: 'flex',
    alignItems: 'center',
    '.chakra-checkbox__control': {
      borderRadius: 'full',
      width: '25px',
      height: '25px',
      bg: isChecked ? `genres.${genre.id}` : 'white',
      borderColor: `genres.${genre.id}`,
      _checked: {
        bg: `genres.${genre.id}`,
        borderColor: `genres.${genre.id}`,
      },
    },
  }}
>
  <Text fontSize="lg">{genre.name}</Text>
</Checkbox>
);
