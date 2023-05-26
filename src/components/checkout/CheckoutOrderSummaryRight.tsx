import styles from './CheckoutOrderSummaryRight.module.css';
import CheckoutDiscountCode from './CheckoutDiscountCode';
import CheckoutTotal from './CheckoutTotal';
import CheckoutProductList from './CheckoutProductList';

export default function CheckoutOrderSummaryRight() {
 return (
  <article className={styles.container}>
   <div className={styles.orderSummary}>
    <CheckoutProductList />
    <CheckoutDiscountCode />
    <CheckoutTotal />
   </div>
  </article>
 );
}
