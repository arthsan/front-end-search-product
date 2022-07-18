import { Box, Heading, Text } from '@chakra-ui/react'
import { Product } from 'store/useProductStore'

export const Card = ({ name, _meta, type }: Product) => {
  return (
    <Box margin={2} flex="1" borderRadius={8} bg="gray.800" p={['4', '8']}>
      <Heading
        role="title"
        as="h2"
        fontSize={{ sm: 'xl', md: '2xl' }}
        fontWeight="bold"
      >
        {name}
      </Heading>
      <Text role="description" fontWeight="bold">
        {type}
      </Text>
      <Text color="whiteAlpha.300">Store Ranking {_meta.score}</Text>
      <Text role="views">Public views {_meta.visitsClickCount}</Text>
    </Box>
  )
}
