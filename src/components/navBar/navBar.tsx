import Link from 'next/link';
import Image from 'next/image';
import styles from './navBar.module.css';
import menu from '../../assets/icons/menu.png';
import logo from '../../assets/icons/logo.png';
import search from '../../assets/icons/search.png';
import cart from '../../assets/icons/cart.png';
import elements from './navElements';

export default function NavBar({ setIsOpen }: any) {
 return (
  <div className={styles.container}>
   <div className={styles.leftSection}>
    <Image
     src={menu}
     alt='menu'
     className={styles.menu}
     onClick={() => setIsOpen(true)}
    />
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
    <Image src={search} alt='search' className={styles.search} />
    <Image src={cart} alt='cart' className={styles.cart} />

    <Link href='/' className={styles.signUp}>
     Regístrate
    </Link>
    <button className={styles.login}>Iniciar Sesión</button>
   </div>
  </div>
 );
}
