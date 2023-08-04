import { sideMenuData } from './SideMenuData';
import styles from './SideMenu.module.css';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Outfit } from '@next/font/google';
import close from '../../assets/icons/close.png';
import Image from 'next/image';

const outfit = Outfit({
 weight: ['400', '100'],
 subsets: ['latin'],
});

export default function SideMenu({ isOpen, setIsOpen }: any) {
 const refModal = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const closeModal = (e: any) => {
   if (refModal.current && !refModal.current.contains(e.target)) {
    setIsOpen(false);
   }
  };
  document.addEventListener('mousedown', closeModal);

  return () => {
   document.removeEventListener('mousedown', closeModal);
  };
 }, []);

 return (
  <div
   className={`${styles.container} ${outfit.className} ${
    isOpen ? styles.active : null
   }`}
   ref={refModal}>
   <span
    onClick={() => setIsOpen(false)}
    className={` ${styles.elements} ${styles.close}`}>
    <Image className={styles.icons} src={close} alt='logo' />
   </span>
   {sideMenuData.map((el, index) => {
    return (
     <Link
      href={el.path}
      className={styles.elements}
      key={index}
      onClick={() => setIsOpen(false)}>
      <span>
       <Image
        src={el.icon}
        className={styles.icons}
        alt='logo'
        width={24}
        height={24}
       />
      </span>
      <p>{el.title}</p>
     </Link>
    );
   })}
  </div>
 );
}
