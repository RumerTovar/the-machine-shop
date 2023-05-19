import styles from './productGrid.module.css';
import Image from 'next/image';
import { Outfit } from '@next/font/google';
import { useState } from 'react';
import { useWindowDimentions } from '../../../hooks/windowDimentions/useWindowDimentions';
import { NumericFormat } from 'react-number-format';
import Link from 'next/link';
import { Product } from 'src/types/types';

const outfit = Outfit({
 weight: '400',
 subsets: ['latin'],
});

interface Props {
 products: Array<Product>;
}

export default function ProductGrid({ products }: Props) {
 const [showMore, setShowMore] = useState(false);
 const { width } = useWindowDimentions();

 const productArray = () => {
  if (showMore) return products;
  if (width! >= 768 && width! < 1024) return products.slice(0, 4);
  if (width! >= 1024 && width! < 1212) return products.slice(0, 6);
  if (width! >= 1212 && width! < 1512) return products.slice(0, 4);

  return products.slice(0, 5);
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
       <Link
        key={index}
        href={`/product/${id_product}`}
        className={`${outfit.className} ${styles.productContainer}`}>
        <div>
         <Image
          className={styles.image}
          src={product_image_url}
          alt={product_name}
          width={280}
          height={290}
         />
        </div>
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
       </Link>
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
