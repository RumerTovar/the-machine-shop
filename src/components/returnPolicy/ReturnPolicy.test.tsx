import { render, screen } from '@testing-library/react';
import ReturnPolicy from './ReturnPolicy';

describe('Privacy Policy', () => {
 it('rendering content', () => {
  render(<ReturnPolicy />);
  const address = screen.getByText(
   /Nuestra política tiene una duración de 14 días. Si han pasado 14 días desde su compra, lamentablemente no podemos ofrecerle un reembolso o cambio./i
  );

  expect(address).toBeInTheDocument();
 });
});
