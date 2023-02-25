import Body from 'src/components/body/body';
import Header from 'src/components/header/header';
import NavBar from 'src/components/navBar/navBar';
import SideMenu from 'src/components/sideMenu/sideMenu';
import Slider from 'src/components/slider/slider';
import { useSideMenu } from '../hooks/sideMenu/useSideMenu';

export default function Home() {
 const { isOpen, setIsOpen } = useSideMenu();

 return (
  <>
   <Header />
   <NavBar setIsOpen={setIsOpen} />
   <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
   <Slider />
   <Body />
  </>
 );
}
