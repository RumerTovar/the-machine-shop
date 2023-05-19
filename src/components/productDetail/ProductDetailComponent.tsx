import Image from 'next/image';
import { Product } from 'src/types/types';
import styles from './ProductDetail.module.css';
import { NumericFormat } from 'react-number-format';
import { Outfit } from '@next/font/google';
import { useContext, useEffect } from 'react';
import CartContext from '../../context/CartContext';

const outfit = Outfit({
 weight: '400',
 subsets: ['latin'],
});

interface Props {
 productDetail: Product;
}

export default function ProductDetailComponent({ productDetail }: Props) {
 const {
  id_product,
  product_name,
  product_image_url,
  product_price,
  product_quantity,
  product_description,
 } = productDetail;

 const { dispatch, setCartIsOpen } = useContext(CartContext);

 const handleAddToCart = () => {
  setCartIsOpen(true);
  dispatch({ type: 'ADD_TO_CART', payload: id_product });
 };

 useEffect(() => {
  dispatch({ type: 'GET_PRODUCT', payload: productDetail });
 }, []);

 return (
  <>
   <hr className={styles.topHR} />
   <div className={`${outfit.className} ${styles.container}`}>
    <div className={styles.imageContainer}>
     <Image
      className={styles.image}
      src={product_image_url}
      alt={product_name}
      fill
     />
    </div>
    <section className={styles.detailContainer}>
     <h4 className={styles.productName}>{product_name}</h4>
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
     <hr className={styles.customHR} />
     <p className={styles.quantity}>{product_quantity} Disponible</p>
     <button className={styles.addToCart} onClick={handleAddToCart}>
      Agregar al carrito
     </button>
     <button className={styles.buy}>Comprar</button>
     <p className={styles.description}>{product_description}</p>
    </section>
   </div>
  </>
 );
}
