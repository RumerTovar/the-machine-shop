import { render, screen } from '@testing-library/react';
import TermsAndConditions from './TermsAndConditions';

describe('Privacy Policy', () => {
 it('rendering content', () => {
  render(<TermsAndConditions />);
  const address = screen.getByText(
   /DESCRIPCIÓN GENERAL DE LOS TÉRMINOS DEL SERVICIO/i
  );

  expect(address).toBeInTheDocument();
 });
});
