import Link from 'next/link';
import styles from './CheckoutTitle.module.css';

export default function CheckoutTitle() {
 return (
  <Link href='/' className={styles.title}>
   The Machine Shop
  </Link>
 );
}
