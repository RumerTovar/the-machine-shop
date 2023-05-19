import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('Header', () => {
 it('rendering login button', () => {
  render(<NavBar />);
  const element = screen.getByRole('button', {
   name: /iniciar sesión/i,
  });

  expect(element).toBeInTheDocument();
 });
});
