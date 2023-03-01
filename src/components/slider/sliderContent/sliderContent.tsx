import { Outfit } from '@next/font/google';
import dataSlider from '../dataSlider';
import Image from 'next/image';
import styles from './sliderContent.module.css';

const outfit = Outfit({
 weight: '700',
 subsets: ['latin'],
});

export default function SliderContent({ slideIndex }: any) {
 return (
  <>
   {dataSlider.map((product, index) => {
    return (
     <div
      key={index}
      className={
       slideIndex === index + 1
        ? `${styles.imageContainer} ${styles.activeAnim}`
        : `${styles.imageContainer}`
      }>
      <Image
       className={styles.image}
       src={product.imageURL}
       alt={product.title}
       priority
       fill
      />
      <div className={`${outfit.className} ${styles.textContainer}`}>
       <p className={styles.title}>{product.title}</p>
       <p className={styles.price}>{product.price}</p>
       <button className={styles.button}>Ver producto</button>
      </div>
     </div>
    );
   })}
  </>
 );
}
