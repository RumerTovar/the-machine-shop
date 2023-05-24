import styles from './CheckoutTotal.module.css';
import CheckoutTotalValue from './CheckoutTotalValue';

export default function CheckoutTotal() {
 return (
  <section className={styles.totalSection}>
   <div className={styles.totalSectionContent}>
    <div className={styles.subTotal}>
     <p>Subtotal</p>
     <CheckoutTotalValue />
    </div>
    <div className={styles.shipping}>
     <p>Shipping</p>
     <p>Calculado en el siguiente paso</p>
    </div>
    <div className={styles.total}>
     <p>Total</p>
     <CheckoutTotalValue />
    </div>
   </div>
  </section>
 );
}
