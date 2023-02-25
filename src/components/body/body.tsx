import styles from './body.module.css';
import { Montserrat } from '@next/font/google';
import ProductGrid from './productGrill/productGrid';

export default function Body() {
 return (
  <>
   <h3 className={styles.mainTitle}>Nuevas Lamparas Vintage</h3>
   <div className={styles.hrContainer}>
    <hr className={styles.customHR} />
   </div>
   <ProductGrid />
  </>
 );
}
