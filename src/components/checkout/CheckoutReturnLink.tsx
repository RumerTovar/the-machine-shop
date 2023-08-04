import Link from 'next/link';
import styles from './CheckoutForm.module.css';
import arrowBack from '../../assets/icons/arrow_back.png';
import Image from 'next/image';

export default function CheckoutReturnLink() {
 return (
  <Link href='/' className={styles.return}>
   <span className={styles.backArrow}>
    <Image src={arrowBack} alt='back to cart' width={24} height={24} />
   </span>
   Return to cart
  </Link>
 );
}
