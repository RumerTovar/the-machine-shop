import { render, screen } from '@testing-library/react';
import AboutUsComponent from './AboutUsComponent';

describe('About us', () => {
 it('render about us text', () => {
  render(<AboutUsComponent />);
  const element = screen.getByText(
   /somos un equipo de amantes de lo vintage y lo retro, que hemos decidido darle una segunda oportunidad a objetos antiguos que de otra forma podrían haber sido olvidados\./i
  );

  expect(element).toBeInTheDocument();
 });
});
