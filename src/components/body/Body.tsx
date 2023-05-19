import styles from './Body.module.css';
import { Outfit } from '@next/font/google';
import ProductGrid from './productGrid/ProductGrid';
import { Product } from 'src/types/types';

const outfit = Outfit({
 weight: '400',
 subsets: ['latin'],
});

interface Props {
 products: Array<Product>;
}

export default function Body({ products }: Props) {
 return (
  <>
   <h3 className={`${outfit.className} ${styles.mainTitle}`}>
    Nuevas Lamparas Vintage
   </h3>
   <div className={styles.hrContainer}>
    <hr className={styles.customHR} />
   </div>
   <ProductGrid products={products} />
  </>
 );
}
