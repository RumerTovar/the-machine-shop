import styles from './CheckoutForm.module.css';

interface InputProps {
 containerStyle: string;
 content: string;
}

export default function CheckoutFormInputText({
 containerStyle,

 content,
}: InputProps) {
 return (
  <div className={styles[containerStyle]}>
   <label className={styles.label}>{content}</label>
   <input className={styles.input} />
  </div>
 );
}
