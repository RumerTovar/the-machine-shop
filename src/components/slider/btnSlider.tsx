import styles from './slider.module.css';

export default function BtnSlider({ direction, moveSlide }: any) {
 return (
  <div>
   <button
    onClick={moveSlide}
    className={
     direction === 'next'
      ? `${styles.btnSlide} ${styles.next}`
      : `${styles.btnSlide} ${styles.prev}`
    }>
    <span className='material-symbols-outlined'>
     {direction === 'next' ? 'arrow_forward_ios' : 'arrow_back_ios_new'}
    </span>
   </button>
  </div>
 );
}
