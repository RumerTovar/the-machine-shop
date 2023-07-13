import { useContext } from 'react';
import { NumericFormat } from 'react-number-format';
import Image from 'next/image';
import styles from './CheckoutProductList.module.css';
import CartContext from '../../context/CartContext';

export default function CheckoutProductList() {
 const { cartState } = useContext(CartContext);
 const { cart } = cartState;

 return (
  <section className={styles.productList}>
   <div className={styles.productListContent}>
    {cart.map((product, index) => {
     const {
      product_image_url,
      product_name,
      product_price,
      product_quantity,
     } = product;
     return (
      <div key={index} className={styles.productContainer}>
       <div className={styles.productLeft}>
        <div className={styles.imageContainer}>
         <Image
          className={styles.productImage}
          width={64}
          height={64}
          alt={product_name}
          src={product_image_url}
         />
         {product_quantity ? (
          <span className={styles.badge}>{product_quantity}</span>
         ) : null}
        </div>
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
