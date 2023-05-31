import styles from './CheckoutForm.module.css';

interface InputProps {
 content: string;
}

export default function CheckoutFormCheckbox({ content }: InputProps) {
 return (
  <div className={styles.formSubscribe}>
   <input type='checkbox' name='subscribe' />
   <label htmlFor='subscribe' className='subscribe'>
    {content}
   </label>
  </div>
 );
}
