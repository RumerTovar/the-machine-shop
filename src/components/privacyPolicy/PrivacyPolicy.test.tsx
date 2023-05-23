import { render, screen } from '@testing-library/react';
import PrivacyPolicyComponent from './PrivacyPolicyComponent';

describe('Privacy Policy', () => {
 it('rendering content', () => {
  render(<PrivacyPolicyComponent />);
  const address = screen.getByText(/DECLARACIÓN DE PRIVACIDAD/i);

  expect(address).toBeInTheDocument();
 });
});
