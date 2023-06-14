import styles from './CheckoutForm.module.css';
import { useFormContext } from 'react-hook-form';

interface InputProps {
 id: string;
 content: string;
}

export default function CheckoutFormInputText({ id, content }: InputProps) {
 const { register } = useFormContext();

 return (
  <div className={styles.inputGroup}>
   <label className={styles.label}>{content}</label>
   <input className={styles.input} {...register(id)} />
  </div>
 );
}
