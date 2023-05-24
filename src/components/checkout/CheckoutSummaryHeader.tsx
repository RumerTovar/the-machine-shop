import styles from './CheckoutSummaryHeader.module.css';
import CheckoutTotalValue from './CheckoutTotalValue';

export default function CheckoutSummaryHeader() {
 return (
  <section className={styles.summaryHeader}>
   <div className={styles.summaryHeaderContent}>
    <div className={styles.leftHeader}>
     <span className={`material-symbols-outlined ${styles.cartIcon}`}>
      shopping_cart
     </span>
     <p>Mostrar resumen del pedido</p>
    </div>
    <CheckoutTotalValue />
   </div>
  </section>
 );
}
