import styles from './ReturnPolicy.module.css';
import { Outfit } from '@next/font/google';

const outfit = Outfit({
 weight: ['400', '100'],
 subsets: ['latin'],
});

export default function ReturnPolicyComponent() {
 return (
  <div className={`${outfit.className} ${styles.container}`}>
   <p className={styles.paragraph}>
    Devoluciones <br />
    <br />
    Nuestra política tiene una duración de 14 días. Si han pasado 14 días desde
    su compra, lamentablemente no podemos ofrecerle un reembolso o cambio.{' '}
    <br />
    <br />
    Para ser elegible para una devolución, su artículo debe estar sin usar y en
    las mismas condiciones en que lo recibió. También debe estar en el embalaje
    original. <br />
    <br />
    Para completar su devolución, requerimos un recibo o comprobante de compra.{' '}
    <br />
    <br />
    Hay ciertas situaciones en las que solo se otorgan reembolsos parciales (si
    corresponde) <br />
    Cualquier artículo que no esté en su estado original o esté dañado o le
    falten partes por razones que no se deban a nuestro error <br />
    Cualquier artículo que se devuelva más de 14 días después de la entrega{' '}
    <br />
    <br />
    Reembolsos (si corresponde)
    <br />
    Una vez que se reciba e inspeccione su devolución, le enviaremos un correo
    electrónico para notificarle que hemos recibido su artículo devuelto.
    También le notificaremos la aprobación o rechazo de su reembolso. <br />
    Si se aprueba, se procesará su reembolso y se aplicará automáticamente un
    crédito a su tarjeta de crédito o método de pago original, dentro de dos
    días. <br />
    <br />
    Si tiene alguna pregunta sobre la devolución de un producto, contáctenos en
    themachineshop@gmail.com. <br />
    <br />
    Artículos en oferta (si corresponde) <br />
    Solo se pueden reembolsar los artículos de precio regular. Los artículos en
    oferta no se pueden reembolsar. <br />
    <br />
    Intercambios (si corresponde)
    <br />
    Solo reemplazamos artículos si están defectuosos o dañados. Si necesita
    cambiarlo por el mismo artículo, envíenos un correo electrónico a
    themachineshop@gmail.com y envíe su artículo a: Jose Antonio de Goyechea
    2851 Córdoba Argentina <br />
    <br />
    Envío <br />
    Para devolver su producto, debe enviarlo por correo a: Jose Antonio de
    Goyechea 2851 Córdoba Argentina Usted será responsable de pagar sus propios
    costos de envío para devolver su artículo. Los gastos de envío no son
    reembolsables. Si recibe un reembolso, el costo del envío de devolución se
    deducirá de su reembolso. Dependiendo de dónde viva, el tiempo que puede
    tardar en llegarle el producto intercambiado puede variar.
    <br />
    <br />
    Está enviando un artículo de más de $ 100, debe considerar usar un servicio
    de envío rastreable o comprar un seguro de envío. No garantizamos que
    recibiremos su artículo devuelto.
   </p>
  </div>
 );
}
