import { render, screen } from '@testing-library/react';
import CheckoutProductList from './CheckoutProductList';

describe('Checkout products', () => {
 it('render product image', () => {
  render(<CheckoutProductList />);
  const element = screen.getByText(/mostrar resumen del pedido/i);

  expect(element).toBeInTheDocument();
 });

 it('render product name', () => {
  render(<CheckoutProductList />);
  const element = screen.getByText(/mostrar resumen del pedido/i);

  expect(element).toBeInTheDocument();
 });

 it('render product price', () => {
  render(<CheckoutProductList />);
  const element = screen.getByText(/mostrar resumen del pedido/i);

  expect(element).toBeInTheDocument();
 });
});
