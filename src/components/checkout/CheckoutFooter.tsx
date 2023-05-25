import Link from 'next/link';
import styles from './CheckoutFooter.module.css';

export default function CheckoutFooter() {
 return (
  <footer className={styles.footer}>
   <Link className={styles.footerLinks} href='/'>
    Politica de devolucion
   </Link>
   <Link className={styles.footerLinks} href='/'>
    Politica de envio
   </Link>
   <Link className={styles.footerLinks} href='/'>
    Politica de privacidad
   </Link>
   <Link className={styles.footerLinks} href='/'>
    Terminos y servicios
   </Link>
  </footer>
 );
}
