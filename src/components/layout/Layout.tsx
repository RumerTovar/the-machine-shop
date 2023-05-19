import { ReactNode } from 'react';
import { useSideMenu } from 'src/hooks/sideMenu/useSideMenu';
import Cart from '../cart/Cart';
import Footer from '../footer/Footer';
import FooterBanner from '../footerBanner/FooterBanner';
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import SideMenu from '../sideMenu/SideMenu';

interface Props {
 children?: ReactNode;
}

export default function Layout({ children, ...props }: Props) {
 const { isOpen, setIsOpen } = useSideMenu();

 return (
  <>
   <Header />
   <NavBar setIsOpen={setIsOpen} />
   <Cart />
   <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
   <main>{children}</main>
   <FooterBanner />
   <Footer />
  </>
 );
}
