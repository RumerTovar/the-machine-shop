import styles from './Checkout.module.css';
import { Outfit } from '@next/font/google';
import CheckoutTitle from './CheckoutTitle';
import CheckoutSummaryHeader from './CheckoutSummaryHeader';
import CheckoutOrderSummary from './CheckoutOrderSummary';
import CheckoutContactTitle from './CheckoutContactTitle';
import CheckoutForm from './CheckoutForm';
import CheckoutFooter from './CheckoutFooter';

const outfit = Outfit({
 weight: '400',
 subsets: ['latin'],
});

export default function Checkout() {
 return (
  <div className={`${outfit.className} ${styles.container}`}>
   <CheckoutTitle />
   <CheckoutSummaryHeader />
   <CheckoutOrderSummary />
   <CheckoutContactTitle />
   <CheckoutForm />
   <hr />
   <CheckoutFooter />
  </div>
 );
}
