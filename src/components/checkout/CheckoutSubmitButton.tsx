import styles from './CheckoutForm.module.css';
import { useFormContext } from 'react-hook-form';

export default function CheckoutSubmitButton() {
 const { formState } = useFormContext();
 const { isDirty, isValid } = formState;

 return (
  <button
   className={styles.submit}
   type='submit'
   disabled={!isDirty || !isValid}>
   Continue to shipping
  </button>
 );
}
