import { render, screen } from '@testing-library/react';
import ShippingPolicyComponent from './ShippingPolicyComponent';

describe('Privacy Policy', () => {
 it('rendering content', () => {
  render(<ShippingPolicyComponent />);
  const address = screen.getByText(
   /Gracias por visitar y comprar en The Machine Shop. Los siguientes son los términos y condiciones que constituyen nuestra Política de envío./i
  );

  expect(address).toBeInTheDocument();
 });
});
