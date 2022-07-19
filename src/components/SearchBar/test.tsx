import { screen, render } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'services/queryClient'

import { SearchBar } from '.'

describe('<SearchBar />', () => {
  it('should be able to click on button', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <SearchBar />
      </QueryClientProvider>
    )

    const buttonElement = screen.getByRole('fetch')

    expect(buttonElement).toBe(buttonElement)
    expect(buttonElement).toHaveTextContent('Search')
    expect(container.firstChild).toMatchSnapshot()
  })
})
