import styles from './cartTitle.module.css';
import CartContext from '../../../context/CartContext';
import { useContext } from 'react';

export default function CartTitle() {
 const { setCartIsOpen, cartIsOpen, cartState, dispatch } =
  useContext(CartContext);

 return (
  <section className={styles.header}>
   <h2 className={styles.title}>Cart</h2>
   <span
    onClick={() => setCartIsOpen(false)}
    className={`material-symbols-outlined ${styles.elements} ${styles.close}`}>
    close
   </span>
  </section>
 );
}
