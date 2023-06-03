/* screen.getByRole('heading', {
  name: /cart/i
}) */

import { render, screen } from '@testing-library/react';
import CartTitle from './CartTitle';

describe('Cart title', () => {
 it('render title text', () => {
  render(<CartTitle />);
  const element = screen.getByRole('heading', {
   name: /cart/i,
  });

  expect(element).toBeInTheDocument();
 });
});
