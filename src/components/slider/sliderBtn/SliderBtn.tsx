import Image from 'next/image';
import styles from './SliderBtn.module.css';
import arrowFordward from '../../../assets/icons/arrow_forward.png';
import arrowBack from '../../../assets/icons/arrow_back.png';

export default function SliderBtn({ direction, moveSlide }: any) {
 return (
  <div>
   <button
    onClick={moveSlide}
    className={
     direction === 'next'
      ? `${styles.btnSlide} ${styles.next}`
      : `${styles.btnSlide} ${styles.prev}`
    }>
    <span>
     {direction === 'next' ? (
      <Image src={arrowFordward} alt='search' width={24} height={24} />
     ) : (
      <Image src={arrowBack} alt='search' width={24} height={24} />
     )}
    </span>
   </button>
  </div>
 );
}
