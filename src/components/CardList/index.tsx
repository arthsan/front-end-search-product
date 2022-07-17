import { Box } from '@chakra-ui/react'
import api from 'axios'
import { Card } from 'components/Card'
import { queryClient } from 'services/queryClient'
import { useProductStore } from 'store/useProductStore'

export const CardList = () => {
  const products = useProductStore((state) => state.products)

  async function handlePrefetchProduct(productId: string | undefined) {
    await queryClient.prefetchQuery(
      ['product', productId],
      async () => {
        const { data } = await api.get(`/`)
        console.log('fake prefetch for the product details')

        return data
      },
      {
        staleTime: 1000 * 20
      }
    )
  }

  return (
    <Box
      width={{ sm: 480, md: 540, lg: 750, xl: 920 }}
      flex="1"
      borderRadius={8}
    >
      {products &&
        products.map(({ _meta, id, name, type }) => (
          <Box key={id} onMouseOver={() => handlePrefetchProduct(id)}>
            <Card _meta={_meta} type={type} name={name} />
          </Box>
        ))}
    </Box>
  )
}
