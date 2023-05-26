import { render, screen } from '@testing-library/react';
import CheckoutTitle from './CheckoutTitle';

describe('Shop name', () => {
 it('render Shop name text', () => {
  render(<CheckoutTitle />);
  const element = screen.getByRole('link', {
   name: /the machine shop/i,
  });

  expect(element).toBeInTheDocument();
 });
});
