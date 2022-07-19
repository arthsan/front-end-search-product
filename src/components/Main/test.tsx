import { render, screen } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'services/queryClient'

import { Main } from '.'

describe('<Main />', () => {
  it('should be rendered search', () => {
    const { getByText, container } = render(
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    )

    expect(getByText(/Search/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be rendered input', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    )

    const inputLabel = screen.getByPlaceholderText(
      'Search for a product (camiseta)'
    )
    expect(inputLabel).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
