import styles from './AboutUs.module.css';
import { Outfit } from '@next/font/google';

const outfit = Outfit({
 weight: ['400', '100'],
 subsets: ['latin'],
});

export default function AboutUsComponent() {
 return (
  <article className={`${outfit.className} ${styles.container}`}>
   <p className={styles.paragraph}>
    Somos un equipo de amantes de lo vintage y lo retro, que hemos decidido
    darle una segunda oportunidad a objetos antiguos que de otra forma podrían
    haber sido olvidados.{' '}
   </p>
   <p className={styles.paragraph}>
    Cada una de nuestras lámparas es única, ya que cada objeto que utilizamos
    tiene su propia historia y su propia personalidad. Nos gusta pensar que
    estas piezas están viviendo una segunda vida y que, de alguna manera,
    estamos contribuyendo a mantener vivo el legado de la era dorada de la
    tecnología y el diseño.
   </p>
   <p className={styles.paragraph}>
    Nos enorgullece el hecho de que nuestras lámparas son hechas a mano en
    nuestro taller, utilizando técnicas y herramientas tradicionales. Cada una
    de ellas es cuidadosamente diseñada y montada por nuestro equipo de
    artesanos, que se asegura de que cada detalle esté perfectamente cuidado y
    que la calidad de nuestros productos sea inmejorable.
   </p>
   <p className={styles.paragraph}>
    Si eres alguien que busca decorar tu hogar con piezas únicas y llenas de
    personalidad, entonces estás en el lugar adecuado. Te invitamos a explorar
    nuestra tienda en línea y a descubrir la lámpara que se adapte mejor a tu
    estilo y personalidad. Si tienes alguna pregunta o necesitas ayuda para
    hacer tu elección, no dudes en ponerte en contacto con nosotros. ¡Estamos
    aquí para ayudarte!
   </p>
  </article>
 );
}
