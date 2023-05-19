import { Product } from '../types/types';

export interface CartState {
 product: Product | null;
 cart: Array<Product>;
}

export type CartReducerAction =
 | {
    type: 'ADD_TO_CART';
    payload: number;
   }
 | {
    type: 'ADD_ONE_FROM_CART';
    payload: number;
   }
 | {
    type: 'REMOVE_ONE_FROM_CART';
    payload: number;
   }
 | {
    type: 'REMOVE_ALL_FROM_CART';
    payload: number;
   }
 | {
    type: 'CLEAR_CART';
   }
 | {
    type: 'GET_PRODUCT';
    payload: Product;
   };
