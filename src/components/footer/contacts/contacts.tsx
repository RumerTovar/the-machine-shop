import Link from 'next/link';
import { useEffect, useState } from 'react';
import useWindowDimensions from 'src/hooks/windowDimentions/useWindowDimentions';
import styles from './contacts.module.css';

export default function Contacts() {
 const [contacts, setContacts] = useState(false);

 const { width } = useWindowDimensions();

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
    <p>Contacto</p>
    {contacts ? (
     <span className={`${styles.icon} material-symbols-outlined`}>remove</span>
    ) : (
     <span className={`${styles.icon} material-symbols-outlined`}>add</span>
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
