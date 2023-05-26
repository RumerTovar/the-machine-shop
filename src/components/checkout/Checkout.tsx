import styles from './Checkout.module.css';
import { Outfit } from '@next/font/google';
import CheckoutTitle from './CheckoutTitle';
import CheckoutSummaryHeader from './CheckoutSummaryHeader';
import CheckoutOrderSummary from './CheckoutOrderSummary';
import CheckoutContactTitle from './CheckoutContactTitle';
import CheckoutForm from './CheckoutForm';
import CheckoutFooter from './CheckoutFooter';
import CheckoutOrderSummaryRight from './CheckoutOrderSummaryRight';

const outfit = Outfit({
 weight: '400',
 subsets: ['latin'],
});

export default function Checkout() {
 return (
  <div className={`${outfit.className} ${styles.container}`}>
   <div className={styles.leftBlock}>
    <CheckoutTitle />
    <CheckoutSummaryHeader />
    <CheckoutOrderSummary />
    <CheckoutContactTitle />
    <CheckoutForm />
    <hr className={styles.hr} />
    <CheckoutFooter />
   </div>
   <div className={styles.rightBlock}>
    <CheckoutOrderSummaryRight />
   </div>
  </div>
 );
}
