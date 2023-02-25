import styles from './productGrid.module.css';
import products from '../bodyData';
import Image from 'next/image';
import { Montserrat } from '@next/font/google';
import { useState } from 'react';
import useWindowDimensions from '../../../hooks/windowDimentions/useWindowDimentions';

const montserrat = Montserrat({
 weight: '400',
 subsets: ['latin'],
});

export default function ProductGrid() {
 const [showMore, setShowMore] = useState(false);
 const { width } = useWindowDimensions();

 const productArray = () => {
  if (showMore) return products;

  if (width! >= 768 && width! < 1024) return products.slice(0, 4);
  if (width! >= 1024 && width! < 1212) return products.slice(0, 6);
  if (width! >= 1212 && width! < 1512) return products.slice(0, 4);

  return products.slice(0, 5);
 };

 return (
  <>
   <div className={styles.container}>
    {productArray().map((product, index) => {
     return (
      <div key={index} className={styles.productContainer}>
       <div className={styles.imageContainer}>
        <Image
         src={product.imageURL}
         alt={product.title}
         width={280}
         height={270}
        />
       </div>
       <div
        className={`${montserrat.className} ${styles.descriptionContainer}`}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.delivery}>Envío Gratis</p>
        <p className={styles.price}>{product.price}</p>
       </div>
      </div>
     );
    })}
   </div>
   {!showMore && (
    <div className={`${montserrat.className} ${styles.viewContainer}`}>
     <button onClick={() => setShowMore(true)} className={styles.button}>
      <p className={styles.viewAll}>VER TODOS</p>
      <span className={`material-symbols-outlined  ${styles.expandIcon}`}>
       expand_more
      </span>
     </button>
    </div>
   )}
  </>
 );
}
