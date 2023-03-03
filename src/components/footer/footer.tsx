import styles from './footer.module.css';
import { Outfit } from '@next/font/google';
import Location from './location/location';
import Contacts from './contacts/contacts';
import FollowUs from './followUs/followUs';
import Image from 'next/image';
import Icon from '../../assets/icons/footerIcon.png';
import Link from 'next/link';

const outfit = Outfit({
 weight: ['400', '100'],
 subsets: ['latin'],
});

export default function Footer() {
 return (
  <>
   <footer className={`${outfit.className} ${styles.container}`}>
    <section className={styles.navigation}>
     <p>Acerca de Nosotros</p>
     <Link className={styles.link} href={'/terms-of-service'}>
      <p>Términos y Condiciones</p>
     </Link>
     <p>Política de Privacidad</p>
     <p>Política de Envio</p>
     <p>Política de Devolución</p>
    </section>
    <Location />
    <Contacts />
    <FollowUs />
   </footer>
   <div className={styles.bottomContainer}>
    <section className={`${outfit.className} ${styles.footerBottom}`}>
     <Image alt='logo' src={Icon} width={49} height={77} />
     <p className={styles.title}>The Machine Shop</p>
    </section>
    <section className={`${outfit.className} ${styles.credits}`}>
     <p>
      Diseño y Desarrollo{' '}
      <Link className={styles.anchor} href={'/'}>
       {' '}
       Rumer Tovar
      </Link>
     </p>
    </section>
   </div>
  </>
 );
}
