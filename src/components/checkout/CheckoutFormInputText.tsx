import { FormValues } from './CheckoutForm';
import styles from './CheckoutForm.module.css';
import { FieldErrors, useFormContext } from 'react-hook-form';

interface InputProps {
 id: string;
 content: string;
 isRequired: boolean;
 message: string;
 errors: FieldErrors<FormValues>;
}

export default function CheckoutFormInputText({
 id,
 content,
 isRequired,
 message,
 errors,
}: InputProps) {
 const { register } = useFormContext();

 return (
  <>
   <div className={styles.inputGroup}>
    <label className={styles.label}>{content}</label>
    <input
     className={styles.input}
     {...register(id, {
      required: {
       value: isRequired,
       message,
      },
     })}
    />
    <p className={styles.error}>
     {<span>{errors[id as keyof FormValues]?.message}</span>}
    </p>
   </div>
  </>
 );
}
