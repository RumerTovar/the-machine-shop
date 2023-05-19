import { render, screen } from '@testing-library/react';
import Body from './Body';

describe('Body', () => {
 it('rendering product price', () => {
  render(<Body />);
  const price = screen.getByText(/\$12\.500,00/i);

  expect(price).toBeInTheDocument();
 });
});
