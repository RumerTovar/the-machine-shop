import { render, screen } from '@testing-library/react';
import Slider from './slider';

describe('slider', () => {
 it('rendering image', () => {
  render(<Slider />);
  const home = screen.getByRole('link', {
   name: /home inicio/i,
  });

  expect(home).toBeInTheDocument();
 });
});
