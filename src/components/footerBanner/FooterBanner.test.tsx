import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import FooterBanner from './FooterBanner';

describe('About us', () => {
 it('render about us text', () => {
  render(<FooterBanner />);
  const element = screen.getByText(/recibe nuestras novedades!/i);

  expect(element).toBeInTheDocument();
 });

 it('can write to input box', async () => {
  render(<FooterBanner />);

  const inputText = screen.getByRole('textbox');
  await user.type(inputText, 'themachineshop@gmail.com');

  expect(inputText).toHaveValue('themachineshop@gmail.com');
 });
});
