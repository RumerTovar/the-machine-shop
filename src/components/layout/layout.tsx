import { ReactNode } from 'react';
import { useSideMenu } from 'src/hooks/sideMenu/useSideMenu';
import Footer from '../footer/footer';
import FooterBanner from '../footerBanner/footerBanner';
import Header from '../header/header';
import NavBar from '../navBar/navBar';
import SideMenu from '../sideMenu/sideMenu';

interface Props {
 children?: ReactNode;
}

export default function Layout({ children, ...props }: Props) {
 const { isOpen, setIsOpen } = useSideMenu();

 return (
  <>
   <Header />
   <NavBar setIsOpen={setIsOpen} />
   <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
   <main>{children}</main>
   <FooterBanner />
   <Footer />
  </>
 );
}
