import styles from './CheckoutForm.module.css';

export default function CheckoutSubmitButton() {
 return (
  <button className={styles.submit} type='submit'>
   Continue to shipping
  </button>
 );
}
