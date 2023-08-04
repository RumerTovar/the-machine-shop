import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useWindowDimentions } from 'src/hooks/windowDimentions/useWindowDimentions';
import styles from './Contacts.module.css';
import add from '../../../assets/icons/add.png';
import remove from '../../../assets/icons/remove.png';
import Image from 'next/image';

export default function Contacts() {
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
   <section className={styles.titleContainer}>
    <p>Contacto</p>
    {contacts ? (
     <span
      onClick={() => {
       setContacts((prevState) => !prevState);
      }}
      className={styles.icon}>
      <Image src={remove} alt='show less' width={24} height={24} />
     </span>
    ) : (
     <span
      onClick={() => {
       setContacts((prevState) => !prevState);
      }}
      className={styles.icon}>
      <Image src={add} alt='show more' width={24} height={24} />
     </span>
    )}
   </section>
   <hr className={styles.hr} />
   {contacts ? (
    <p className={styles.contacts}>
     +54 0800 222 2299 <br />{' '}
     <Link
      className={styles.anchor}
      href='mailto:themachineshop@gmail.com'
      target='_blank'>
      themachineshop@gmail.com
     </Link>
    </p>
   ) : null}
  </div>
 );
}
