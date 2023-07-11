import styles from './CheckoutForm.module.css';
import { useFormContext } from 'react-hook-form';

export default function CheckoutSubmitButton() {
 const { formState, watch } = useFormContext();
 const { isDirty, isValid } = formState;

 const watchProvince = watch('province');
 const watchCity = watch('city');

 return (
  <button
   className={styles.submit}
   type='submit'
   disabled={
    !isDirty ||
    !isValid ||
    watchProvince === 'Seleccionar provincia' ||
    watchCity === 'Seleccionar ciudad'
   }>
   Continue to shipping
  </button>
 );
}
