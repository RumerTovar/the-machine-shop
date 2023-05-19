import styles from './CartFooter.module.css';
import CartContext from '../../../context/CartContext';
import { useContext } from 'react';
import { NumericFormat } from 'react-number-format';
import { useRouter } from 'next/router';

export default function CartFooter() {
 const { cartState } = useContext(CartContext);
 const { cart } = cartState;
 const router = useRouter();

 const handleClick = () => {
  router.push('/checkout');
 };

 return (
  <section className={styles.container}>
   <div className={styles.topSection}>
    <h3 className={styles.title}>SUBTOTAL</h3>
    <NumericFormat
     value={cart.reduce(
      (acc, item) => acc + item.product_price * item.product_quantity,
      0
     )}
     decimalScale={2}
     thousandSeparator='.'
     fixedDecimalScale
     decimalSeparator=','
     displayType='text'
     prefix={'$'}
     renderText={(value) => <p className={styles.price}>{value}</p>}
    />
   </div>
   <button className={styles.button} onClick={handleClick}>
    Comprar
   </button>
  </section>
 );
}
