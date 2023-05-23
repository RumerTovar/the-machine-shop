import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
 it('rendering address', () => {
  render(<Header />);
  const address = screen.getByText(/jose antonio de goyechea 2851, córdoba/i);

  expect(address).toBeInTheDocument();
 });

 it('rendering contact number', () => {
  render(<Header />);
  const contact = screen.getByText(/\+54 0800 222 2299/i);

  expect(contact).toBeInTheDocument();
 });

 it('rendering youtube icon', () => {
  render(<Header />);
  const icon = screen.getByRole('img', {
   name: /youtubeicon/i,
  });

  expect(icon).toBeInTheDocument();
 });
});
