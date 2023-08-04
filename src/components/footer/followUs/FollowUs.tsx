import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './FollowUs.module.css';
import youtube from '../../../assets/icons/youtube.png';
import instagram from '../../../assets/icons/instagram.png';
import facebook from '../../../assets/icons/facebook.png';
import Image from 'next/image';
import { useWindowDimentions } from 'src/hooks/windowDimentions/useWindowDimentions';
import add from '../../../assets/icons/add.png';
import remove from '../../../assets/icons/remove.png';

export default function FollowUs() {
 const [contacts, setContacts] = useState(false);

 const { width } = useWindowDimentions();

 const renderInfo = () => {
  if (width! >= 768) {
   setContacts(true);
  }

  if (width! < 768) {
   setContacts(false);
  }
 };

 useEffect(() => {
  renderInfo();
 }, [width]);

 return (
  <div className={styles.container}>
   <section
    className={styles.titleContainer}
    onClick={() => {
     setContacts((prevState) => !prevState);
    }}>
    <p>Síguenos</p>
    {contacts ? (
     <span className={`${styles.icon} material-symbols-outlined`}>
      <Image src={remove} alt='show less' width={24} height={24} />
     </span>
    ) : (
     <span className={`${styles.icon} material-symbols-outlined`}>
      <Image src={add} alt='show more' width={24} height={24} />
     </span>
    )}
   </section>
   <hr className={styles.hr} />
   {contacts ? (
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
   ) : null}
  </div>
 );
}
