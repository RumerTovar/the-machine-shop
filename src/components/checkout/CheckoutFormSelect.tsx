import styles from './CheckoutForm.module.css';
import { useFormContext } from 'react-hook-form';

interface SelectProps {
 id: string;
 label: string;
 data: Array<string>;
}

export default function CheckoutFormSelect({ id, label, data }: SelectProps) {
 const { register } = useFormContext();

 return (
  <div className={styles.inputGroup}>
   <label className={styles.label}>{label}</label>
   <select
    className={`${styles.inputPadding} ${styles.input}`}
    {...register(id)}>
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
