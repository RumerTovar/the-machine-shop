import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';
import logo from '../../assets/icons/logo.png';
import elements from './NavElements';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

export default function NavBar({ setIsOpen }: any) {
 const { cartState, setCartIsOpen } = useContext(CartContext);
 const { cart } = cartState;

 return (
  <div className={styles.container}>
   <div className={styles.leftSection}>
    <span
     className={`${styles.sideMenu} material-symbols-outlined`}
     onClick={() => setIsOpen(true)}>
     menu
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
    <span className={`${styles.search} material-symbols-outlined`}>search</span>
    <div className={styles.cartContainer}>
     <span
      className={`${styles.cart} material-symbols-outlined`}
      onClick={() => {
       setCartIsOpen(true);
      }}>
      shopping_cart
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
