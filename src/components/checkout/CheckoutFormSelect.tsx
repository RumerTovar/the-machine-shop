import styles from './CheckoutForm.module.css';

interface SelectProps {
 label: string;
 data: Array<string>;
}

export default function CheckoutFormSelect({ label, data }: SelectProps) {
 const handlechange = (e: any) => {
  console.log(e.target.value, 'aqui');
 };

 return (
  <div className={styles.inputGroup}>
   <label className={styles.label}>{label}</label>
   <select
    onChange={handlechange}
    className={`${styles.inputPadding} ${styles.input}`}>
    {data.map((el) => {
     return (
      <option className={styles.option} key={el} value={el}>
       {el}
      </option>
     );
    })}
   </select>
  </div>
 );
}
