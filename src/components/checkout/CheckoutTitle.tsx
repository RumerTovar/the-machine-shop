import Link from 'next/link';
import styles from './CheckoutTitle.module.css';

export default function CheckoutTitle() {
 return (
  <Link href='/' className={styles.title}>
   <h1>The Machine Shop</h1>
  </Link>
 );
}
