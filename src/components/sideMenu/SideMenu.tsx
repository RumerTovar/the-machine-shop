import { sideMenuData } from './SideMenuData';
import styles from './SideMenu.module.css';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Outfit } from '@next/font/google';

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
    className={`material-symbols-outlined ${styles.elements} ${styles.close}`}>
    close
   </span>
   {sideMenuData.map((el, index) => {
    return (
     <Link
      href={el.path}
      className={styles.elements}
      key={index}
      onClick={() => setIsOpen(false)}>
      <span className='material-symbols-outlined'>{el.icon} </span>
      <p>{el.title}</p>
     </Link>
    );
   })}
  </div>
 );
}
