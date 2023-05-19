import Link from 'next/link';
import styles from './footerBanner.module.css';
import { Outfit } from '@next/font/google';

const outfit = Outfit({
 weight: '400',
 subsets: ['latin'],
});

export default function FooterBanner() {
 return (
  <div className={styles.container}>
   <p className={`${outfit.className} ${styles.title}`}>
    Recibe Nuestras Novedades!
   </p>
   <p className={styles.description}>
    Introduce tu email y serás el primero en enterarte de nuevas lámparas y
    eventos donde mostraremos nuestras últimas creaciones ...
   </p>
   <form
    className={styles.form}
    onSubmit={() => {
     console.log('submit');
    }}>
    <input
     className={styles.input}
     type='text'
     placeholder='Introduce tu email'
    />
    <button className={styles.button}>SUSCRIBETE!</button>
   </form>
   <p className={styles.terms}>
    Al hacer clic en el botón, acepta la{' '}
    <Link className={styles.anchor} href={'/'}>
     Política de Privacidad
    </Link>{' '}
    y los{' '}
    <Link className={styles.anchor} href={'/'}>
     Términos y Condiciones.
    </Link>
   </p>
  </div>
 );
}
