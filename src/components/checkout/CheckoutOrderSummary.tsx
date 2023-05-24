import styles from './CheckoutOrderSummary.module.css';
import CheckoutDiscountCode from './CheckoutDiscountCode';
import CheckoutTotal from './CheckoutTotal';
import CheckoutProductList from './CheckoutProductList';

export default function CheckoutOrderSummary() {
 return (
  <div className={styles.orderSummary}>
   <CheckoutProductList />
   <CheckoutDiscountCode />
   <CheckoutTotal />
  </div>
 );
}
