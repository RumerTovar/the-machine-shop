import Image from 'next/image';
import cart from '../../assets/icons/cart.png';
import styles from './CheckoutSummaryHeader.module.css';
import CheckoutTotalValue from './CheckoutTotalValue';

export default function CheckoutSummaryHeader() {
 return (
  <section className={styles.summaryHeader}>
   <div className={styles.summaryHeaderContent}>
    <div className={styles.leftHeader}>
     <span className={styles.cartIcon}>
      <Image src={cart} alt='cartIcon' />
     </span>
     <p>Mostrar resumen del pedido</p>
    </div>
    <CheckoutTotalValue />
   </div>
  </section>
 );
}
