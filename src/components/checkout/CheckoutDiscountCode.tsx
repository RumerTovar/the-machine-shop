import styles from './CheckoutDiscountCode.module.css';

export default function CheckoutDiscountCode() {
 return (
  <section className={styles.discountCode}>
   <div className={styles.discountCodeContent}>
    <input
     type='text'
     placeholder='Código de descuento'
     className={styles.inputDiscount}
    />
    <button className={`${styles.applyButton} `}>Aplicar</button>
   </div>
  </section>
 );
}
