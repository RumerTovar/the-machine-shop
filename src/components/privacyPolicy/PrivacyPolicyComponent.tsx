import styles from './privacyPolicy.module.css';
import { Outfit } from '@next/font/google';

const outfit = Outfit({
 weight: ['400', '100'],
 subsets: ['latin'],
});

export default function PrivacyPolicyComponent() {
 return (
  <div className={`${outfit.className} ${styles.container}`}>
   <p className={styles.paragraph}>
    DECLARACIÓN DE PRIVACIDAD <br />
    <br />
    SECCIÓN 1 - ¿QUÉ HACEMOS CON SU INFORMACIÓN? <br />
    <br />
    Cuando compra algo en nuestra tienda, como parte del proceso de compra y
    venta, recopilamos la información personal que nos proporciona, como su
    nombre, dirección y dirección de correo electrónico. <br />
    Cuando navega por nuestra tienda, también recibimos automáticamente la
    dirección de protocolo de Internet (IP) de su computadora para brindarnos
    información que nos ayude a conocer su navegador y sistema operativo. <br />
    Marketing por correo electrónico (si corresponde): con su permiso, podemos
    enviarle correos electrónicos sobre nuestra tienda, nuevos productos y otras
    actualizaciones. <br />
    <br />
    SECCIÓN 2 - CONSENTIMIENTO <br />
    <br />
    ¿Cómo obtienen mi consentimiento?
    <br />
    Cuando nos proporciona información personal para completar una transacción,
    verificar su tarjeta de crédito, realizar un pedido, organizar una entrega o
    devolver una compra, implicamos que acepta que la recopilemos y la usemos
    solo por ese motivo específico. <br />
    Si solicitamos su información personal por una razón secundaria, como
    marketing, le pediremos directamente su consentimiento expreso o le
    brindaremos la oportunidad de decir que no. <br />
    <br />
    ¿Cómo retiro mi consentimiento? <br />
    Si después de aceptar cambia de opinión, puede retirar su consentimiento
    para que nos comuniquemos con usted, para la recopilación, uso o divulgación
    continua de su información, en cualquier momento, comunicándose con nosotros
    por correo a themachineshop@gmail.com <br />
    <br />
    SECCIÓN 3 - DIVULGACIÓN <br />
    <br />
    Podemos divulgar su información personal si la ley nos exige que lo hagamos
    o si viola nuestros Términos de servicio. <br />
    <br />
    SECCIÓN 4 - SERVICIOS DE TERCEROS <br />
    <br />
    En general, los proveedores de terceros utilizados por nosotros solo
    recopilarán, usarán y divulgarán su información en la medida necesaria para
    permitirles realizar los servicios que nos brindan. <br />
    Sin embargo, ciertos proveedores de servicios externos, como pasarelas de
    pago y otros procesadores de transacciones de pago, tienen sus propias
    políticas de privacidad con respecto a la información que debemos
    proporcionarles para sus transacciones relacionadas con la compra.
    <br />
    Para estos proveedores, le recomendamos que lea sus políticas de privacidad
    para que pueda comprender la manera en que estos proveedores manejarán su
    información personal. <br />
    En particular, recuerde que ciertos proveedores pueden estar ubicados o
    tener instalaciones ubicadas en una jurisdicción diferente a la suya o la
    nuestra.Por lo tanto, si elige continuar con una transacción que involucre
    los servicios de un proveedor de servicios externo, entonces su información
    puede quedar sujeta a las leyes de las jurisdicciones en las que se
    encuentra ese proveedor de servicios o sus instalaciones.
    <br />
    Por ejemplo, si se encuentra en Canadá y su transacción es procesada por una
    pasarela de pago ubicada en los Estados Unidos, su información personal
    utilizada para completar esa transacción puede estar sujeta a divulgación
    según la legislación de los Estados Unidos, incluida la Ley Patriota. <br />
    Una vez que abandona el sitio web de nuestra tienda o es redirigido a un
    sitio web o aplicación de un tercero, ya no se rige por esta Política de
    privacidad ni por los Términos de servicio de nuestro sitio web. <br />
    <br />
    Enlaces <br />
    Cuando hace clic en los enlaces de nuestra tienda, es posible que lo
    redirijan fuera de nuestro sitio.No somos responsables de las prácticas de
    privacidad de otros sitios y le recomendamos que lea sus declaraciones de
    privacidad. <br />
    Google analitico:
    <br />
    Nuestra tienda utiliza Google Analytics para ayudarnos a conocer quién
    visita nuestro sitio y qué páginas se consultan <br />
    <br />
    SECCIÓN 5: SEGURIDAD <br />
    <br />
    Para proteger su información personal, tomamos precauciones razonables y
    seguimos las mejores prácticas de la industria para asegurarnos de que no se
    pierda o se use inapropiadamente. , accedido, divulgado, alterado o
    destruido. <br />
    Si nos proporciona la información de su tarjeta de crédito, la información
    se cifra mediante la tecnología de capa de conexión segura (SSL) y se
    almacena con un cifrado AES-256.Si bien ningún método de transmisión a
    través de Internet o almacenamiento electrónico es 100 % seguro, seguimos
    todos los requisitos de PCI-DSS e implementamos estándares adicionales de la
    industria generalmente aceptados. <br />
    <br />
    SECCIÓN 6 - COOKIES
    <br />
    <br />
    Aquí hay una lista de cookies que utilizamos.Los hemos enumerado aquí para
    que pueda elegir si desea optar por no recibir cookies o no. <br />
    _session_id, token único, sesión, permite que almacene información sobre su
    sesión (referente, página de destino, etc.). <br />
    Sin datos retenidos, persistente durante 30 minutos desde la última visita,
    utilizado por el rastreador interno de estadísticas de nuestro proveedor de
    sitio web para registrar la cantidad de visitas, <br />
    sin datos retenidos, vence a la medianoche (en relación con el visitante)
    del día siguiente, cuenta el número de visitas a una tienda por un solo
    cliente. <br />
    carrito, token único, persistente durante 2 semanas, almacena información
    sobre el contenido de su carrito. <br />
    _secure_session_id, token único, sesión
    <br />
    storefront_digest, token único, indefinido Si la tienda tiene una
    contraseña, esta se usa para determinar si el visitante actual tiene acceso.{' '}
    <br />
    PREF, persistente por un período muy corto, establecido por Google y rastrea
    quién visita la tienda y desde dónde <br />
    <br />
    <br />
    SECCIÓN 7 - EDAD DE CONSENTIMIENTO <br />
    <br />
    Al usar este sitio, usted declara que tiene al menos la mayoría de edad en
    su estado o provincia de residencia , o que tiene la mayoría de edad en su
    estado o provincia de residencia y nos ha dado su consentimiento para
    permitir que cualquiera de sus dependientes menores use este sitio. <br />
    <br />
    SECCIÓN 8 - CAMBIOS A ESTA POLÍTICA DE PRIVACIDAD
    <br />
    <br />
    Nos reservamos el derecho de modificar esta política de privacidad en
    cualquier momento, así que revísela con frecuencia.Los cambios y
    aclaraciones entrarán en vigor inmediatamente después de su publicación en
    el sitio web.Si hacemos cambios sustanciales a esta política, le
    notificaremos aquí que ha sido actualizada, para que sepa qué información
    recopilamos, cómo la usamos y bajo qué circunstancias, si las hay, usamos
    y/o divulgamos él. <br />
    Si nuestra tienda es adquirida o fusionada con otra empresa, su información
    puede transferirse a los nuevos propietarios para que podamos continuar
    vendiéndole productos. <br />
    <br />
    PREGUNTAS E INFORMACIÓN DE CONTACTO
    <br />
    <br />
    Si desea: acceder, corregir, modificar o eliminar cualquier información
    personal que tengamos sobre usted, registrar una queja o simplemente desea
    obtener más información, comuníquese con nuestro Oficial de Cumplimiento de
    Privacidad en themachineshop@gmail.com
   </p>
  </div>
 );
}
