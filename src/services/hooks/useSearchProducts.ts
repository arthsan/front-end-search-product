/* eslint-disable @typescript-eslint/no-empty-interface */
import { useQuery } from 'react-query'
import api from 'axios'

interface Product {
  _meta: Meta
  id: string
  name: string
  type: string
}

interface Meta {
  score: number
  visitsClickCount: string
}

export interface GetProductResponse {
  products: Product[]
  suggestions: Suggestion[]
}

export interface Suggestion {
  autoFilter: AutoFilter
  categories: any[]
  term: string
}

export interface AutoFilter {}

async function getProducts(search: string): Promise<GetProductResponse> {
  const { data } = await api.get(
    `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${search}&source=nanook`
  )

  const products: Product[] = data.products.map((product: Product) => {
    return {
      id: product.id,
      name: product.name,
      type: product.type,
      _meta: product._meta
    }
  })

  const suggestions: Suggestion[] = data.suggestions.map(
    (suggestion: Suggestion) => {
      return {
        autoFilter: suggestion.autoFilter,
        categories: suggestion.categories,
        term: suggestion.term
      }
    }
  )

  return {
    products,
    suggestions
  }
}

export function useSearchProducts(search: string) {
  return useQuery(['products', search], () => getProducts(search), {
    staleTime: 1000 * 5,
    refetchOnWindowFocus: false,
    enabled: false
  })
}
