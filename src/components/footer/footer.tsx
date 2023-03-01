import Link from 'next/link';
import styles from './footer.module.css';
import { Outfit } from '@next/font/google';

const outfit = Outfit({
 weight: '400',
 subsets: ['latin'],
});

export default function Footer() {
 return (
  <div className={styles.container}>
   <div className={styles.navigation}>
    <p>Acerca de Nosotros</p>
    <p>Términos y Condiciones</p>
    <p>Política de Privacidad</p>
   </div>
  </div>
 );
}
