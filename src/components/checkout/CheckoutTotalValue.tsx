import React from 'react';
import { NumericFormat } from 'react-number-format';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

export default function CheckoutTotalValue() {
 const { cartState } = useContext(CartContext);
 const { cart } = cartState;

 return (
  <NumericFormat
   value={cart.reduce(
    (acc, item) => acc + item.product_price * item.product_quantity,
    0
   )}
   decimalScale={2}
   thousandSeparator='.'
   fixedDecimalScale
   decimalSeparator=','
   displayType='text'
   prefix={'$'}
   renderText={(value) => <p>{value}</p>}
  />
 );
}
