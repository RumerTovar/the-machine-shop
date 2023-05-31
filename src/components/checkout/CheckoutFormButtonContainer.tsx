import { ReactNode } from 'react';
import styles from './CheckoutForm.module.css';

interface Props {
 children: ReactNode;
}

export default function CheckoutFormButtonContainer({ children }: Props) {
 return <div className={styles.buttonsContainer}>{children}</div>;
}
