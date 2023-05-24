import styles from './Checkout.module.css';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';
import { Outfit } from '@next/font/google';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import CheckoutTitle from './CheckoutTitle';
import CheckoutSummaryHeader from './CheckoutSummaryHeader';
import CheckoutOrderSummary from './CheckoutOrderSummary';

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
   <CheckoutTitle />
   <CheckoutSummaryHeader />
   <CheckoutOrderSummary />
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
