import { CartState, CartReducerAction } from '../reducers/cartReducerTypes';

export interface CartContextType {
 cartIsOpen: boolean;
 setCartIsOpen: (isOpen: boolean) => void;
 cartState: CartState;
 dispatch: (action: CartReducerAction) => void;
}
