import { Divider, Flex } from '@chakra-ui/react'
import { CardList } from 'components/CardList'
import { SearchBar } from 'components/SearchBar'

export const Main = () => (
  <Flex
    w="100%"
    my="6"
    maxWidth={1480}
    mx="auto"
    px={['4', '6']}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <SearchBar />
    <Divider w="50%" mt={2} />
    <CardList />
  </Flex>
)
