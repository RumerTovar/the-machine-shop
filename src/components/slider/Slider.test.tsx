import { render, screen } from '@testing-library/react';
import Slider from './Slider';

describe('slider', () => {
 it('rendering back arrow', () => {
  render(<Slider />);
  const text = screen.getByRole('button', {
   name: /arrow_back_ios_new/i,
  });

  expect(text).toBeInTheDocument();
 });

 it('rendering foward arrow', () => {
  render(<Slider />);
  const text = screen.getByRole('button', {
   name: /arrow_forward_ios/i,
  });

  expect(text).toBeInTheDocument();
 });
});
