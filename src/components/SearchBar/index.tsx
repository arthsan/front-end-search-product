import {
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'
import { ChangeEvent, useEffect, useState } from 'react'
import { useSearchProducts } from 'services/hooks/useSearchProducts'
import { useProductStore } from 'store/useProductStore'

export const SearchBar = () => {
  const [searchProduct, setSearchProduct] = useState('')
  const addProduct = useProductStore((state) => state.addProduct)
  const { data, isLoading, refetch, error } = useSearchProducts(searchProduct)

  async function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    await refetch()
  }

  useEffect(() => {
    data?.products.map((product) => {
      addProduct({
        name: product.name,
        id: product.id,
        _meta: product._meta,
        type: product.type
      })
    })
  }, [addProduct, data])

  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '8']}>
      <Flex justify="space-between" align="center">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="blue.700"
            fontSize="1.2em"
          >
            <SearchIcon />
          </InputLeftElement>
          <Input
            width={{ sm: 480, md: 540, lg: 750, xl: 920 }}
            name="item"
            placeholder="Search for a product (camiseta)"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchProduct(e.target.value)
            }
          />
        </InputGroup>
        <Button
          role="fetch"
          bg="blue.500"
          isLoading={isLoading}
          onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e)}
        >
          Search
        </Button>
      </Flex>
      {error && (
        <Alert color="blackAlpha.900" status="error">
          <AlertIcon />
          <AlertTitle>Your search could not be processed...</AlertTitle>
          <AlertDescription>
            Please try again, or maybe another search
          </AlertDescription>
        </Alert>
      )}
    </Box>
  )
}
