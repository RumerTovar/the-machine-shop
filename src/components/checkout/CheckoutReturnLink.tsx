import Link from 'next/link';
import styles from './CheckoutForm.module.css';

export default function CheckoutReturnLink() {
 return (
  <Link href='/' className={styles.return}>
   <span className={`${styles.backArrow} material-symbols-outlined`}>
    arrow_back_ios
   </span>
   Return to cart
  </Link>
 );
}
