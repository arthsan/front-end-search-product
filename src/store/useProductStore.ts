import create from 'zustand'

export type Product = {
  _meta: Meta
  id?: string
  name: string
  type: string
}

export type Meta = {
  score: number
  visitsClickCount: string
}

type State = {
  products: Product[]
  addProduct: (product: Product) => void
}

export const useProductStore = create<State>((set) => ({
  products: [],

  addProduct: async (product: Product) => {
    await set((state) => ({ products: [...state.products, product] }))
  }
}))
