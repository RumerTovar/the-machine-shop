import Link from 'next/link';
import styles from './shippingPolicy.module.css';
import { Outfit } from '@next/font/google';

const outfit = Outfit({
 weight: ['400', '100'],
 subsets: ['latin'],
});

export default function ShippingPolicyComponent() {
 return (
  <div className={`${outfit.className} ${styles.container}`}>
   <section>
    <p className={styles.paragraph}>
     Gracias por visitar y comprar en The Machine Shop. Los siguientes son los
     términos y condiciones que constituyen nuestra Política de envío.
    </p>
    <h2>Política de envío nacional</h2>
    <br />
    <h3>Tiempo de procesamiento del envío</h3>
    <p className={styles.paragraph}>
     Todos los pedidos se procesan dentro de 2-3 días hábiles. Los pedidos no se
     envían ni se entregan los fines de semana o días festivos.
    </p>
    <p className={styles.paragraph}>
     Si estamos experimentando un gran volumen de pedidos, los envíos pueden
     retrasarse unos días. Permita días adicionales en tránsito para la entrega.
     Si se produce un retraso significativo en el envío de su pedido, nos
     pondremos en contacto con usted por correo electrónico o por teléfono.
    </p>
    <p className={styles.paragraph}>
     Los gastos de envío de su pedido se calcularán y se mostrarán en el
     carrito.
    </p>
    <p className={styles.paragraph}>
     * La entrega al día siguiente solo está disponible para pedidos con
     direcciones de entrega dentro de Argentina.
    </p>
    <p className={styles.paragraph}>
     Ocasionalmente pueden ocurrir retrasos en la entrega.
    </p>

    <p className={styles.paragraph}>
     No enviamos a apartados de correos ni a direcciones APO/FPO.
    </p>

    <h3>Confirmación de envío y seguimiento de pedidos</h3>

    <p className={styles.paragraph}>
     Recibirá un correo electrónico de confirmación de envío una vez que se haya
     enviado su pedido con su(s) número(s) de seguimiento. El número de
     seguimiento estará activo dentro de las 24 horas.
    </p>

    <h3>Derechos de aduanas, aranceles e impuestos</h3>

    <p className={styles.paragraph}>
     The Machine Shop no es responsable de las aduanas e impuestos aplicados a
     su pedido. Todas las tarifas impuestas durante o después del envío son
     responsabilidad del cliente (aranceles, impuestos, etc.).
    </p>

    <h3>Daños y perjuicios</h3>

    <p className={styles.paragraph}>
     The Machine Shop envía todos los pedidos asegurados por daño o pérdida
     durante el envío. Si recibió su pedido dañado, contáctenos para que podamos
     presentar un reclamo.
    </p>
    <p className={styles.paragraph}>
     Guarde todos los materiales de embalaje y los productos dañados.
    </p>
    <h2>Política de envío internacional</h2>
    <p className={styles.paragraph}>
     Comuníquese con nosotros para obtener una cotización de envío si se
     encuentra fuera de Argentina.
    </p>

    <h2>Política de devoluciones</h2>
    <p className={styles.paragraph}>
     Nuestra{' '}
     <Link href={'/return-policy'}>Política de devoluciones y reembolsos </Link>
     proporciona información detallada sobre las opciones y los procedimientos
     para devolver su pedido.
    </p>
    <p className={styles.paragraph}>&nbsp;</p>
   </section>
  </div>
 );
}
