import { render, screen } from '@testing-library/react'
import LinkButton from '../../app/components/link-button'

describe('LinkButton', () => {
  test('renders a link with the correct text and href', () => {
    const href = 'https://example.com'
    render(<LinkButton text="Example" href={href} />)
    const element = screen.getByText('Example')
    expect(element).toHaveAttribute('href', href)
  });
});