import { screen, render } from '@testing-library/react'
import { useProductStore } from 'store/useProductStore'

import { CardList } from '.'

import { cardMock } from '../../mocks/card'
import { cardList } from '../../mocks/cardList'

const originalState = useProductStore.getState()
beforeEach(() => {
  useProductStore.setState(originalState)
  cardList.map((card) => {
    originalState.addProduct(card)
  })
})

describe('<CardList />', () => {
  it('should render first product title ', () => {
    const { container } = render(<CardList />)

    const listElements = screen.getAllByRole('product')
    expect(listElements[0].firstChild).toHaveTextContent(cardList[0].name)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a list of 6 products', () => {
    const { container } = render(<CardList />)

    const listElements = screen.getAllByRole('product')
    expect(listElements).toHaveLength(6)
    expect(container.firstChild).toMatchSnapshot()
  })
})
