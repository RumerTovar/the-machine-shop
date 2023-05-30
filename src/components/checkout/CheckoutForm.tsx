import Link from 'next/link';
import styles from './CheckoutForm.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import CheckoutFormInputText from './CheckoutFormInputText';
import CheckoutFormSelect from './CheckoutFormSelect';
import { provinces } from '../../data/provinces';

type Inputs = {
 example: string;
 exampleRequired: string;
};

export default function CheckoutForm() {
 const { register, handleSubmit } = useForm<Inputs>();

 const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

 return (
  <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
   <CheckoutFormInputText containerStyle='formEmailGroup' content='Email' />
   <div className={styles.formSubscribe}>
    <input type='checkbox' name='subscribe' />
    <label htmlFor='subscribe' className='subscribe'>
     Quiero recibir por email noticias y ofertas
    </label>
   </div>
   <p className={styles.shippingAddress}>Dirección de envío</p>
   <div className={styles.inputGroup}>
    <label htmlFor='address' className={styles.label}>
     Dirección
    </label>
    <input type='text' name='address' className={styles.input} />
   </div>
   <div className={styles.nameContainer}>
    <CheckoutFormInputText containerStyle='inputGroup' content='Nombre' />
    <CheckoutFormInputText containerStyle='inputGroup' content='Apellido' />
   </div>
   <CheckoutFormInputText
    containerStyle='inputGroup'
    content='Apartamento, suite, etc. (opcional)'
   />
   <div className={styles.locationContainer}>
    <CheckoutFormSelect label='Provincia' data={provinces} />
    <CheckoutFormSelect label='Ciudad' data={provinces} />
   </div>
   <CheckoutFormInputText containerStyle='inputGroup' content='Telefono' />
   <div className={styles.buttonsContainer}>
    <button className={styles.submit} type='submit'>
     Continue to shipping
    </button>
    <Link href='/' className={styles.return}>
     <span className={`${styles.backArrow} material-symbols-outlined`}>
      arrow_back_ios
     </span>
     Return to cart
    </Link>
   </div>
  </form>
 );
}
