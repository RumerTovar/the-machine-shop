import styles from './cart.module.css';
import { useEffect, useRef } from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Outfit } from '@next/font/google';
import CartTitle from './cartTitle/CartTitle';
import CartBody from './cartBody/CartBody';
import CartFooter from './cartFooter/CartFooter';

const outfit = Outfit({
 weight: ['400', '100'],
 subsets: ['latin'],
});

export default function Cart() {
 const refModal = useRef<HTMLDivElement>(null);

 const { setCartIsOpen, cartIsOpen, cartState } = useContext(CartContext);

 const { cart } = cartState;

 useEffect(() => {
  const closeModal = (e: any) => {
   if (refModal.current && !refModal.current.contains(e.target)) {
    setCartIsOpen(false);
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
    cartIsOpen ? styles.active : null
   }`}
   ref={refModal}>
   <CartTitle />
   <CartBody />
   {cart.length > 0 && (
    <>
     <hr className={styles.hr} />
     <CartFooter />
    </>
   )}
  </div>
 );
}
