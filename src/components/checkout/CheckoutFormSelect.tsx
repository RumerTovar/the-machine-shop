import { FormValues } from './CheckoutForm';
import styles from './CheckoutForm.module.css';
import { FieldErrors, useFormContext } from 'react-hook-form';

interface SelectProps {
 id: string;
 label: string;
 defaultOption: string;
 data: Array<string>;
 message: string;
 errors: FieldErrors<FormValues>;
}

export default function CheckoutFormSelect({
 id,
 label,
 defaultOption,
 data,
 message,
 errors,
}: SelectProps) {
 const { register } = useFormContext();

 return (
  <div className={styles.inputGroup}>
   <label className={styles.label}>{label}</label>
   <select
    className={`${styles.inputPadding} ${styles.input}`}
    {...register(id, {
     required: {
      value: true,
      message: message,
     },
    })}
    defaultValue={defaultOption}>
    <option disabled>{defaultOption}</option>
    {data.map((el, index) => {
     return (
      <option className={styles.option} key={index} value={el}>
       {el}
      </option>
     );
    })}
   </select>
  </div>
 );
}
