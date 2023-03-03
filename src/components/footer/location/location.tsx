import { useEffect, useState } from 'react';
import useWindowDimensions from 'src/hooks/windowDimentions/useWindowDimentions';
import styles from './location.module.css';

export default function Location() {
 const [location, setLocation] = useState(false);

 const { width } = useWindowDimensions();

 const renderInfo = () => {
  if (width! >= 768) {
   setLocation(true);
  }

  if (width! < 768) {
   setLocation(false);
  }
 };

 useEffect(() => {
  renderInfo();
 }, [width]);

 return (
  <div className={styles.container}>
   <section
    className={styles.titleContainer}
    onClick={() => {
     setLocation((prevState) => !prevState);
    }}>
    <p>Ubicación</p>
    {location ? (
     <span className={`${styles.icon} material-symbols-outlined`}>remove</span>
    ) : (
     <span className={`${styles.icon} material-symbols-outlined`}>add</span>
    )}
   </section>
   <hr className={styles.hr} />
   {location ? (
    <p className={styles.location}>
     Jose Antonio de Goyechea 2851
     <br /> Córdoba <br /> Argentina
    </p>
   ) : null}
  </div>
 );
}
