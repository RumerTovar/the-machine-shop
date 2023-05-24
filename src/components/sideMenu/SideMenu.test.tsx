import { render, screen } from '@testing-library/react';
import SideMenu from './SideMenu';

describe('SideMenu', () => {
 it('render start link', () => {
  render(<SideMenu />);
  const link = screen.getByRole('link', {
   name: /home inicio/i,
  });

  expect(link).toBeInTheDocument();
 });

 it('render my profile link', () => {
  render(<SideMenu />);

  const link = screen.getByRole('link', {
   name: /account_circle mi perfil/i,
  });

  expect(link).toBeInTheDocument();
 });

 it('render cart link', () => {
  render(<SideMenu />);

  const link = screen.getByRole('link', {
   name: /shopping_cart carrito/i,
  });

  expect(link).toBeInTheDocument();
 });

 it('render my shoppings link', () => {
  render(<SideMenu />);

  const link = screen.getByRole('link', {
   name: /shopping_bag mis compras/i,
  });

  expect(link).toBeInTheDocument();
 });

 it('render privacy Policy link', () => {
  render(<SideMenu />);

  const link = screen.getByText(/politicas de privacidad/i);

  expect(link).toBeInTheDocument();
 });
});
