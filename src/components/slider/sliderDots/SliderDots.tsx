import styles from './sliderDots.module.css';

export default function SliderDots({ moveDot, slideIndex }: any) {
 return (
  <div className={styles.container}>
   {Array.from({ length: 3 }).map((el, index) => (
    <div
     key={index}
     onClick={() => moveDot(index + 1)}
     className={
      slideIndex === index + 1
       ? `${styles.dot} ${styles.active}`
       : `${styles.dot}`
     }></div>
   ))}
  </div>
 );
}
