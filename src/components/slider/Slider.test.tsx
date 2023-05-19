import { render, screen } from '@testing-library/react';
import Slider from './Slider';

describe('slider', () => {
 it('rendering product title', () => {
  render(<Slider />);
  const text = screen.getByText(/sky blue phone/i);

  expect(text).toBeInTheDocument();
 });

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

 it('rendering product price', () => {
  render(<Slider />);
  const text = screen.getByText(/\$ 8\.680\.00/i);

  expect(text).toBeInTheDocument();
 });
});
