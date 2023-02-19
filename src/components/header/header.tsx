import { Outfit } from '@next/font/google';
import styles from './header.module.css';
import Image from 'next/image';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/phone.png';
import youtube from '../../assets/icons/youtube.png';
import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';

const outfit = Outfit({
 weight: '300',
 subsets: ['latin'],
});

export default function Header() {
 return (
  <div className={`${styles.container} ${outfit.className}`}>
   <div className={styles.top}>
    <Image src={location} alt='locationIcon' className={styles.location} />
    <span>Jose Antonio de Goyechea 2851, Córdoba</span>
   </div>

   <div className={styles.bottom}>
    <div className={styles.phone}>
     <Image src={phone} alt='phone' className={styles.phoneIcon} />
     <span className={styles.phoneNumber}>+54 0800 222 2299</span>
    </div>
    <div className={styles.socialmedia}>
     <a href='https://www.youtube.com/'>
      <Image src={youtube} alt='youtubeIcon' />
     </a>
     <a href='https://www.instagram.com/'>
      <Image src={instagram} alt='instagramIcon' />
     </a>
     <a href='https://www.facebook.com/'>
      <Image src={facebook} alt='facebookIcon' />
     </a>
    </div>
   </div>
  </div>
 );
}
