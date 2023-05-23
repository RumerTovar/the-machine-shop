import { render, screen, within } from '@testing-library/react';
import NavBar from './NavBar';

describe('Navbar', () => {
 it('rendering login button', () => {
  render(<NavBar />);
  const element = screen.getByRole('button', {
   name: /iniciar sesión/i,
  });

  expect(element).toBeInTheDocument();
 });

 it('rendering register button', () => {
  render(<NavBar />);
  const element = screen.getByRole('link', {
   name: /regístrate/i,
  });

  expect(element).toBeInTheDocument();
 });

 it('rendering cart button', () => {
  render(<NavBar />);
  const element = screen.getByText(/menu/i);

  expect(element).toBeInTheDocument();
 });

 it('rendering search button', () => {
  render(<NavBar />);
  const element = screen.getByText(/search/i);

  expect(element).toBeInTheDocument();
 });

 it('rendering contact link', () => {
  render(<NavBar />);
  const element = screen.getByRole('link', {
   name: /contacto/i,
  });

  expect(element).toBeInTheDocument();
 });

 it('rendering blog link', () => {
  render(<NavBar />);
  const element = screen.getByRole('link', {
   name: /blog/i,
  });

  expect(element).toBeInTheDocument();
 });

 it('rendering my shopping link', () => {
  render(<NavBar />);
  const element = screen.getByRole('link', {
   name: /mis compras/i,
  });

  expect(element).toBeInTheDocument();
 });

 it('rendering my profile link', () => {
  render(<NavBar />);
  const element = screen.getByRole('link', {
   name: /mi perfil/i,
  });

  expect(element).toBeInTheDocument();
 });

 it('rendering home link', () => {
  render(<NavBar />);
  const element = screen.getByRole('link', {
   name: /inicio/i,
  });

  expect(element).toBeInTheDocument();
 });

 it('rendering logo image', () => {
  render(<NavBar />);
  const link = screen.getByRole('link', {
   name: /logo/i,
  });

  const image = within(link).getByRole('img', {
   name: /logo/i,
  });

  expect(image).toBeInTheDocument();
 });
});
