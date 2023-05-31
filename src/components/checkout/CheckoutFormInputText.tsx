import styles from './CheckoutForm.module.css';

interface InputProps {
 content: string;
}

export default function CheckoutFormInputText({ content }: InputProps) {
 return (
  <div className={styles.inputGroup}>
   <label className={styles.label}>{content}</label>
   <input className={styles.input} />
  </div>
 );
}
