import styles from './CartBody.module.css';
import CartContext from '../../../context/CartContext';
import { useContext } from 'react';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';

export default function CartBody() {
 const { cartState, dispatch } = useContext(CartContext);

 const { cart } = cartState;
 const handleAddOne = (id: number) => {
  dispatch({ type: 'ADD_ONE_FROM_CART', payload: id });
 };

 const handleRemoveOne = (id: number) => {
  dispatch({ type: 'REMOVE_ONE_FROM_CART', payload: id });
 };

 return (
  <section className={styles.cartContent}>
   {cart.length ? (
    cart.map((item) => {
     const {
      id_product,
      product_image_url,
      product_name,
      product_price,
      product_quantity,
     } = item;

     return (
      <article key={id_product} className={styles.productContainer}>
       <div>
        <Image
         className={styles.image}
         src={product_image_url}
         width={60}
         height={60}
         alt={product_name}
        />
       </div>
       <section className={styles.description}>
        <p className={styles.productTitle}>{product_name}</p>
        <section className={styles.bottomDescription}>
         <div className={styles.quantityContainer}>
          <button
           className={`${styles.button} material-symbols-outlined`}
           onClick={() => handleAddOne(id_product)}>
           add
          </button>
          <p className={styles.quantity}>{product_quantity}</p>
          <button
           className={`${styles.button} material-symbols-outlined`}
           onClick={() => {
            handleRemoveOne(id_product);
           }}>
           remove
          </button>
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
        </section>
       </section>
      </article>
     );
    })
   ) : (
    <p>Tu carrito está vacío.</p>
   )}
  </section>
 );
}
