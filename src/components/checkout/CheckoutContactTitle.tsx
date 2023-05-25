import Link from 'next/link';
import styles from './CheckoutContactTitle.module.css';

import React from 'react';

export default function CheckoutContactTitle() {
 return (
  <div className={styles.contactTitle}>
   <p>Contacto</p>
   <p>
    ¿Ya tienes una cuenta? <Link href='/'>Inicia sesion </Link>
   </p>
  </div>
 );
}
