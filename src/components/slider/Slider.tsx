import SliderBtn from './sliderBtn/SliderBtn';
import dataSlider from './DataSlider';
import styles from './Slider.module.css';
import { useSlider } from '../../hooks/slider/useSlider';
import SliderContent from './sliderContent/SliderContent';
import SliderDots from './sliderDots/SliderDots';

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
