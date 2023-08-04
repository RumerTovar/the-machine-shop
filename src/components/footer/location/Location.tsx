import { useEffect, useState } from 'react';
import { useWindowDimentions } from 'src/hooks/windowDimentions/useWindowDimentions';
import styles from './Location.module.css';
import add from '../../../assets/icons/add.png';
import remove from '../../../assets/icons/remove.png';
import Image from 'next/image';

export default function Location() {
 const [location, setLocation] = useState(false);

 const { width } = useWindowDimentions();

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
     <span className={styles.showButton}>
      <Image src={remove} alt='show less' width={24} height={24} />
     </span>
    ) : (
     <span className={styles.showButton}>
      <Image src={add} alt='show more' width={24} height={24} />
     </span>
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
