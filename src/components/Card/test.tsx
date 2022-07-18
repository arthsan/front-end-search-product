import { screen, render } from '@testing-library/react'

import { Card } from '.'

import { cardMock } from '../../mocks/card'

describe('<Card />', () => {
  it('should render the heading with product title', () => {
    const { container } = render(
      <Card
        name={cardMock.name}
        _meta={cardMock._meta}
        type={cardMock.type}
        key={cardMock.id}
      />
    )
    const heading = screen.getByRole('title')
    expect(heading).toHaveTextContent(cardMock.name)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render correctly the product type', () => {
    const { container } = render(
      <Card
        name={cardMock.name}
        _meta={cardMock._meta}
        type={cardMock.type}
        key={cardMock.id}
      />
    )
    const description = screen.getByRole('description')
    expect(description).toHaveTextContent(cardMock.type)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the product click views', () => {
    const { container } = render(
      <Card
        name={cardMock.name}
        _meta={cardMock._meta}
        type={cardMock.type}
        key={cardMock.id}
      />
    )
    const views = screen.getByRole('views')
    expect(views).toHaveTextContent(cardMock._meta.visitsClickCount)
    expect(container.firstChild).toMatchSnapshot()
  })
})
