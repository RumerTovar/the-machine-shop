import Image from 'next/image';
import BtnSlider from './btnSlider';
import dataSlider from './dataSlider';
import styles from './slider.module.css';
import { useSlider } from '../../hooks/slider/useSlider';

export default function Slider() {
 const { slideIndex, prevSlide, nextSlide, moveDot } = useSlider(dataSlider);

 return (
  <div className={styles.container}>
   {dataSlider.map((el, index) => {
    return (
     <div
      className={
       slideIndex === index + 1
        ? `${styles.imageContainer} ${styles.activeAnim}`
        : `${styles.imageContainer}`
      }>
      <Image className={styles.image} src={`/images/${index + 1}s.webp`} fill />
     </div>
    );
   })}
   <BtnSlider moveSlide={nextSlide} direction={'next'} />
   <BtnSlider moveSlide={prevSlide} direction={'prev'} />
   <div className={styles.containerDots}>
    {Array.from({ length: 5 }).map((el, index) => (
     <div
      onClick={() => moveDot(index + 1)}
      className={
       slideIndex === index + 1
        ? `${styles.dot} ${styles.active}`
        : `${styles.dot}`
      }></div>
    ))}
   </div>
  </div>
 );
}
