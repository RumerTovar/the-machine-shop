import styles from './CheckoutProductList.module.css';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';

export default function CheckoutProductList() {
 const { cartState } = useContext(CartContext);
 const { cart } = cartState;

 return (
  <section className={styles.productList}>
   <div className={styles.productListContent}>
    {cart.map((product, index) => {
     const { product_image_url, product_name, product_price } = product;
     return (
      <div key={index} className={styles.productContainer}>
       <div className={styles.productLeft}>
        <Image
         className={styles.productImage}
         width={64}
         height={64}
         alt={product_name}
         src={product_image_url}
        />
        <p className={styles.productName}>{product_name}</p>
       </div>
       <NumericFormat
        value={product_price}
        decimalScale={2}
        thousandSeparator='.'
        fixedDecimalScale
        decimalSeparator=','
        displayType='text'
        prefix={'$'}
        renderText={(value) => <p className={styles.price}>{value}</p>}
       />
      </div>
     );
    })}
   </div>
  </section>
 );
}
