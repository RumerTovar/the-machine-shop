import styles from './Checkout.module.css';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';
import { Outfit } from '@next/font/google';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';

const outfit = Outfit({
 weight: '400',
 subsets: ['latin'],
});

type Inputs = {
 example: string;
 exampleRequired: string;
};

export default function Checkout() {
 const { cartState, dispatch } = useContext(CartContext);
 const { cart } = cartState;
 const { register, handleSubmit } = useForm<Inputs>();

 const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

 return (
  <div className={`${outfit.className} ${styles.container}`}>
   <Link href='/' className={styles.title}>
    The Machine Shop
   </Link>
   <section className={styles.summaryHeader}>
    <div className={styles.summaryHeaderContent}>
     <div className={styles.leftHeader}>
      <span className={`material-symbols-outlined ${styles.cartIcon}`}>
       shopping_cart
      </span>
      <p>Mostrar resumen del pedido</p>
     </div>
     <NumericFormat
      value={cart.reduce(
       (acc, item) => acc + item.product_price * item.product_quantity,
       0
      )}
      decimalScale={2}
      thousandSeparator='.'
      fixedDecimalScale
      decimalSeparator=','
      displayType='text'
      prefix={'$'}
      renderText={(value) => <p className={styles.price}>{value}</p>}
     />
    </div>
   </section>
   <div className={styles.orderSummary}>
    <section className={styles.productList}>
     <div className={styles.productListContent}>
      {cart.map((product) => {
       const {
        id_product,
        product_image_url,
        product_name,
        product_price,
        product_quantity,
       } = product;
       return (
        <div className={styles.productContainer}>
         <div className={styles.productLeft}>
          <Image
           className={styles.productImage}
           width={64}
           height={64}
           alt={product_name}
           src={product_image_url}
          />
          <p className={styles.productName}>{product_name}</p>
         </div>

         <NumericFormat
          value={product_price}
          decimalScale={2}
          thousandSeparator='.'
          fixedDecimalScale
          decimalSeparator=','
          displayType='text'
          prefix={'$'}
          renderText={(value) => <p className={styles.price}>{value}</p>}
         />
        </div>
       );
      })}
     </div>
    </section>
    <section className={styles.discountCode}>
     <div className={styles.discountCodeContent}>
      <input
       type='text'
       placeholder='Código de descuento'
       className={styles.inputDiscount}
      />
      <button className={`${styles.applyButton} material-symbols-outlined`}>
       arrow_forward
      </button>
     </div>
    </section>
    <section className={styles.totalSection}>
     <div className={styles.totalSectionContent}>
      <div className={styles.subTotal}>
       <p>Subtotal</p>
       <NumericFormat
        value={cart.reduce(
         (acc, item) => acc + item.product_price * item.product_quantity,
         0
        )}
        decimalScale={2}
        thousandSeparator='.'
        fixedDecimalScale
        decimalSeparator=','
        displayType='text'
        prefix={'$'}
        renderText={(value) => <p className={styles.price}>{value}</p>}
       />
      </div>
      <div className={styles.shipping}>
       <p>Shipping</p>
       <p>Calculado en el siguiente paso</p>
      </div>
      <div className={styles.total}>
       <p>Total</p>
       <NumericFormat
        value={cart.reduce(
         (acc, item) => acc + item.product_price * item.product_quantity,
         0
        )}
        decimalScale={2}
        thousandSeparator='.'
        fixedDecimalScale
        decimalSeparator=','
        displayType='text'
        prefix={'$'}
        renderText={(value) => <p className={styles.price}> {value}</p>}
       />
      </div>
     </div>
    </section>
   </div>
   <div className={styles.contactTitle}>
    <p>Contacto</p>
    <p>
     ¿Ya tienes una cuenta? <Link href='/'>Inicia sesion </Link>
    </p>
   </div>
   <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
    <div className={styles.formEmailGroup}>
     <label className={styles.label}>Email</label>
     <input className={styles.input} />
    </div>
    <div className={styles.formSubscribe}>
     <input type='checkbox' name='subscribe' />
     <label htmlFor='subscribe' className='subscribe'>
      Quiero recibir por email noticias y ofertas
     </label>
    </div>
    <p className={styles.shippingAddress}>Dirección de envío</p>

    <div className={styles.inputGroup}>
     <label htmlFor='firstName' className={styles.label}>
      Primer nombre
     </label>
     <input type='text' name='firstName' className={styles.input} />
    </div>
    <div className={styles.inputGroup}>
     <label htmlFor='lastName' className={styles.label}>
      Primer apellido
     </label>
     <input type='text' name='lastName' className={styles.input} />
    </div>
    <div className={styles.inputGroup}>
     <label htmlFor='address' className={styles.label}>
      Dirección
     </label>
     <input type='text' name='address' className={styles.input} />
    </div>
    <div className={styles.inputGroup}>
     <label htmlFor='apartment' className={styles.label}>
      Apartamento, suitem etc. (opcional)
     </label>
     <input type='text' name='apartment' className={styles.input} />
    </div>
    <div className={styles.inputGroup}>
     <label className={styles.label}>Provincia</label>
     <select className={`${styles.inputPadding} ${styles.input}`}>
      <option value=''>USA</option>
     </select>
    </div>
    <div className={styles.inputGroup}>
     <label className={styles.label}>Ciudad</label>
     <select className={`${styles.inputPadding} ${styles.input}`}>
      <option value=''>USA</option>
     </select>
    </div>
    <div className={styles.inputGroup}>
     <label htmlFor='apartment' className={styles.label}>
      Telefono
     </label>
     <input type='text' name='apartment' className={styles.input} />
    </div>
    <button className={styles.submit} type='submit'>
     Continue to shipping
    </button>
    <Link href='/' className={styles.return}>
     <span className={`${styles.backArrow} material-symbols-outlined`}>
      arrow_back_ios
     </span>
     Return to cart
    </Link>
   </form>
   <hr />
   <footer className={styles.footer}>
    <Link className={styles.footerLinks} href='/'>
     Politica de devolucion
    </Link>
    <Link className={styles.footerLinks} href='/'>
     Politica de envio
    </Link>
    <Link className={styles.footerLinks} href='/'>
     Politica de privacidad
    </Link>
    <Link className={styles.footerLinks} href='/'>
     Terminos y servicios
    </Link>
   </footer>
  </div>
 );
}
