import SliderBtn from './sliderBtn/sliderBtn';
import dataSlider from './dataSlider';
import styles from './slider.module.css';
import { useSlider } from '../../hooks/slider/useSlider';
import SliderContent from './sliderContent/sliderContent';
import SliderDots from './sliderDots/sliderDots';

export default function Slider() {
 const { slideIndex, prevSlide, nextSlide, moveDot } = useSlider(dataSlider);

 return (
  <div className={styles.container}>
   <SliderContent slideIndex={slideIndex} />
   <SliderBtn moveSlide={nextSlide} direction={'next'} />
   <SliderBtn moveSlide={prevSlide} direction={'prev'} />
   <SliderDots moveDot={moveDot} slideIndex={slideIndex} />
  </div>
 );
}
