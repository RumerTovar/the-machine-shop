import { render, screen } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
describe('Checkout form', () => {
 it('render address label', () => {
  render(<CheckoutForm />);
  const element = screen.getByText(/dirección/i);

  expect(element).toBeInTheDocument();
 });

 it('render first name label', () => {
  render(<CheckoutForm />);
  const element = screen.getByText(/nombre/i);

  expect(element).toBeInTheDocument();
 });

 it('render last name label', () => {
  render(<CheckoutForm />);
  const element = screen.getByText(/apellido/i);

  expect(element).toBeInTheDocument();
 });
});
