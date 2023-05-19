import { useEffect, useState } from 'react';

export const useSlider = (dataSlider) => {
 const [slideIndex, setSlideIndex] = useState(1);

 const nextSlide = () => {
  if (slideIndex !== dataSlider.length) {
   setSlideIndex(slideIndex + 1);
  } else if (slideIndex === dataSlider.length) {
   setSlideIndex(1);
  }
 };

 const prevSlide = () => {
  if (slideIndex !== 1) {
   setSlideIndex(slideIndex - 1);
  } else if (slideIndex === 1) {
   setSlideIndex(dataSlider.length);
  }
 };

 const moveDot = (index) => {
  setSlideIndex(index);
 };

 useEffect(() => {
  const interval = setInterval(() => {
   nextSlide();
  }, 5000);
  return () => clearInterval(interval);
 });

 return {
  slideIndex,
  prevSlide,
  nextSlide,
  moveDot,
 };
};
