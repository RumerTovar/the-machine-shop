import { ReactNode } from 'react';
import styles from './CheckoutForm.module.css';

interface Props {
 children: ReactNode;
}

export default function CheckoutFormInputContainer({ children }: Props) {
 return <div className={styles.nameContainer}>{children}</div>;
}
