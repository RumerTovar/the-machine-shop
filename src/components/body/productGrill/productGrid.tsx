import styles from './productGrid.module.css';
import Image from 'next/image';
import { Outfit } from '@next/font/google';
import { useState } from 'react';
import useWindowDimensions from '../../../hooks/windowDimentions/useWindowDimentions';
import { NumericFormat } from 'react-number-format';
import Link from 'next/link';

const outfit = Outfit({
 weight: '400',
 subsets: ['latin'],
});

export default function ProductGrid({ products }: any) {
 const [showMore, setShowMore] = useState(false);
 const { width } = useWindowDimensions();

 const productArray = () => {
  if (showMore) return products;

  if (width! >= 768 && width! < 1024) return products.slice(0, 4);
  if (width! >= 1024 && width! < 1212) return products.slice(0, 6);
  if (width! >= 1212 && width! < 1512) return products.slice(0, 4);

  return products.slice(0, 6);
 };

 return (
  <>
   <div className={`${styles.container}`}>
    {productArray().map(
     (
      { id_product, product_image_url, product_name, product_price },
      index
     ) => {
      return (
       <div key={index} className={styles.productContainer}>
        <Link
         href={`/product-detail/${id_product}`}
         className={styles.imageContainer}>
         <Image
          className={styles.image}
          src={product_image_url}
          alt={product_name}
          fill
         />
        </Link>
        <div className={` ${styles.descriptionContainer}`}>
         <p className={styles.title}>{product_name}</p>
         <NumericFormat
          value={product_price}
          decimalScale={2}
          thousandSeparator='.'
          fixedDecimalScale
          decimalSeparator=','
          displayType='text'
          prefix={'$'}
          renderText={(value) => (
           <p className={`${outfit.className} ${styles.price}`}>{value}</p>
          )}
         />
         <p className={`${outfit.className} ${styles.delivery}`}>
          Envío Gratis
         </p>
        </div>
       </div>
      );
     }
    )}
   </div>
   {!showMore && (
    <div className={styles.viewContainer}>
     <button onClick={() => setShowMore(true)} className={styles.button}>
      <p className={`${styles.viewAll}`}>VER TODOS</p>
      <span className={`material-symbols-outlined  ${styles.expandIcon}`}>
       expand_more
      </span>
     </button>
    </div>
   )}
  </>
 );
}
