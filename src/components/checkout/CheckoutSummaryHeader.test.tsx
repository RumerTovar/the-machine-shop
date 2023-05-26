import { render, screen } from '@testing-library/react';
import CheckoutSummaryHeader from './CheckoutSummaryHeader';

describe('Checkout Title', () => {
 it('render Title text', () => {
  render(<CheckoutSummaryHeader />);
  const element = screen.getByText(/mostrar resumen del pedido/i);

  expect(element).toBeInTheDocument();
 });
});
