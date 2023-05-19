import { createContext, useState, ReactNode, useReducer } from 'react';
import { CartContextType } from './types';
import { cartReducer, initialCartState } from '../reducers/cartReducer';

interface CartProviderProps {
 children: ReactNode;
}

const CartContext = createContext<CartContextType>({
 cartIsOpen: false,
 setCartIsOpen: () => {},
 cartState: initialCartState,
 dispatch: () => {},
});

export default CartContext;

export const CartProvider = ({ children }: CartProviderProps) => {
 const [cartIsOpen, setCartIsOpen] = useState(false);
 const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

 const contextData = {
  cartIsOpen,
  setCartIsOpen,
  cartState,
  dispatch,
 };

 return (
  <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
 );
};
