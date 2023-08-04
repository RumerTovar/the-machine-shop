import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CartContext from '../../context/CartContext';
import styles from './NavBar.module.css';
import logo from '../../assets/icons/logo.png';
import search from '../../assets/icons/search.png';
import menu from '../../assets/icons/menu.png';
import shoppingCart from '../../assets/icons/cart.png';
import elements from './NavElements';

export default function NavBar({ setIsOpen }: any) {
 const { cartState, setCartIsOpen } = useContext(CartContext);
 const { cart } = cartState;

 return (
  <div className={styles.container}>
   <div className={styles.leftSection}>
    <span className={styles.sideMenu} onClick={() => setIsOpen(true)}>
     <Image src={menu} alt='menu' width={30} height={30} />
    </span>
    <Link href='/' className={styles.logo}>
     <Image src={logo} alt='logo' />
    </Link>
    {elements.map((el, index) => {
     return (
      <Link
       href={'/'}
       key={index}
       className={`${styles.elements} ${styles.navigation}`}>
       {el}
      </Link>
     );
    })}
   </div>
   <div className={styles.rightSection}>
    <span className={styles.search}>
     <Image src={search} alt='search' />
    </span>
    <div className={styles.cartContainer}>
     <span
      className={styles.cart}
      onClick={() => {
       setCartIsOpen(true);
      }}>
      <Image src={shoppingCart} alt='shoppingCart' />
     </span>
     {cart.length ? <span className={styles.badge}></span> : null}
    </div>
    <Link href='/' className={styles.signUp}>
     Regístrate
    </Link>
    <button className={styles.login}>Iniciar Sesión</button>
   </div>
  </div>
 );
}
