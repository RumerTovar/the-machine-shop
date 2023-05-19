import { Outfit, Montserrat } from '@next/font/google';
import localFont from '@next/font/local';
import dataSlider from '../DataSlider';
import Image from 'next/image';
import styles from './sliderContent.module.css';

const myFont = localFont({
 src: '../../../../public/fonts/playlist-Script.woff2',
});

const montserrat = Montserrat({
 weight: '300',
 subsets: ['latin'],
});

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
       src={`https://res.cloudinary.com/dadxytlg4/image/upload/v1682006635/the%20machine%20shop/asset-4487887_Edition_1906_Showroom_t1l50x.webp`}
       alt={product.title}
       priority
       fill
      />
      <div className={` ${styles.textContainer}`}>
       <p className={`${myFont.className} ${styles.title}`}>
        Enciende tu estilo
       </p>
       <p className={`${montserrat.className} ${styles.price}`}>
        Descubre nuestra colección de lámparas vintage
       </p>
       {/* <button className={styles.button}>Ver producto</button> */}
      </div>
     </div>
    );
   })}
  </>
 );
}
