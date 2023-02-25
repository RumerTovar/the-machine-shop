import { Outfit } from '@next/font/google';
import Link from 'next/link';
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
   <Link
    target='_blank'
    href={
     'https://www.google.com/maps/place/Jose+Antonio+de+Goyechea+2851,+X5000CMA+C%C3%B3rdoba,+Argentina/@-31.3805714,-64.2166847,17z/data=!3m1!4b1!4m6!3m5!1s0x943298e13f3bec73:0x55d23ed72dc6b559!8m2!3d-31.380576!4d-64.214496!16s%2Fg%2F11c5my1nkb'
    }
    className={styles.top}>
    <Image src={location} alt='locationIcon' className={styles.location} />
    <span>Jose Antonio de Goyechea 2851, Córdoba</span>
   </Link>
   <div className={styles.bottom}>
    <Link href={'tel: +54 0800 222 2299'} className={styles.phone}>
     <Image src={phone} alt='phone' className={styles.phoneIcon} />
     <span className={styles.phoneNumber}>+54 0800 222 2299</span>
    </Link>
    <div className={styles.socialmedia}>
     <Link target='_blank' href='https://www.youtube.com/'>
      <Image src={youtube} alt='youtubeIcon' />
     </Link>
     <Link target='_blank' href='https://www.instagram.com/'>
      <Image src={instagram} alt='instagramIcon' />
     </Link>
     <Link target='_blank' href='https://www.facebook.com/'>
      <Image src={facebook} alt='facebookIcon' />
     </Link>
    </div>
   </div>
  </div>
 );
}
