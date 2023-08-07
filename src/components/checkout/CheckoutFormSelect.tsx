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
 const { register, watch } = useFormContext();
 const watchProvince = watch('province');
 const watchCity = watch('city');

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
     validate: {
      notDefault: () => {
       if (label === 'Provincia') {
        return watchProvince !== defaultOption || message;
       }

       if (label === 'Ciudad') {
        return watchCity !== defaultOption || message;
       }
      },
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
   <p className={styles.error}>
    {<span>{errors[id as keyof FormValues]?.message}</span>}
   </p>
  </div>
 );
}
