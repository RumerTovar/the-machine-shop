import { sideMenuData } from './sideMenuData';
import styles from './sideMenu.module.css';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function SideMenu({ isOpen, setIsOpen }: any) {
 const refModal = useRef();

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
   className={`${styles.container} ${isOpen ? styles.active : null}`}
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
