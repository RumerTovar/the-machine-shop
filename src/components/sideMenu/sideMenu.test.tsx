import { render, screen } from '@testing-library/react';
import SideMenu from './sideMenu';

describe('SideMenu', () => {
 it('inicio button', () => {
  render(<SideMenu />);
  const home = screen.getByRole('link', {
   name: /home inicio/i,
  });

  expect(home).toBeInTheDocument();
 });
});
