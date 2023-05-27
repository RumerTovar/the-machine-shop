import { render, screen } from '@testing-library/react';
import CheckoutFooter from './CheckoutFooter';

describe('Checkout footer', () => {
 it('render return policy link', () => {
  render(<CheckoutFooter />);
  const element = screen.getByRole('link', {
   name: /politica de devolucion/i,
  });

  expect(element).toBeInTheDocument();
 });

 it('render shipping policy link', () => {
  render(<CheckoutFooter />);
  const element = screen.getByRole('link', {
   name: /politica de envio/i,
  });

  expect(element).toBeInTheDocument();
 });

 it('render privacy policy link', () => {
  render(<CheckoutFooter />);
  const element = screen.getByRole('link', {
   name: /politica de privacidad/i,
  });

  expect(element).toBeInTheDocument();
 });

 it('render terms and services link', () => {
  render(<CheckoutFooter />);
  const element = screen.getByRole('link', {
   name: /terminos y servicios/i,
  });

  expect(element).toBeInTheDocument();
 });
});
