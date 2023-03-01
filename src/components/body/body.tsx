import styles from './body.module.css';
import { Outfit } from '@next/font/google';
import ProductGrid from './productGrill/productGrid';

const outfit = Outfit({
 weight: '400',
 subsets: ['latin'],
});

export default function Body() {
 return (
  <>
   <h3 className={`${outfit.className} ${styles.mainTitle}`}>
    Nuevas Lamparas Vintage
   </h3>
   <div className={styles.hrContainer}>
    <hr className={styles.customHR} />
   </div>
   <ProductGrid />
  </>
 );
}
