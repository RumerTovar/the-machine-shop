import { CartState, CartReducerAction } from './cartReducerTypes';

export const initialCartState = {
 product: null,
 cart: [],
};

export const cartReducer = (state: CartState, action: CartReducerAction) => {
 switch (action.type) {
  case 'ADD_TO_CART': {
   const newItem = state.product;

   if (newItem) {
    const itemInCart = state.cart.find(
     (item) => item.id_product === newItem.id_product
    );

    return itemInCart
     ? {
        ...state,
        cart: state.cart.map((item) =>
         item.id_product === newItem.id_product
          ? { ...item, product_quantity: item.product_quantity + 1 }
          : item
        ),
       }
     : {
        ...state,
        cart: [...state.cart, { ...newItem, product_quantity: 1 }],
       };
   }
  }

  case 'ADD_ONE_FROM_CART': {
   return {
    ...state,
    cart: state.cart.map((product) =>
     product.id_product === action.payload
      ? { ...product, product_quantity: product.product_quantity + 1 }
      : product
    ),
   };
  }

  case 'REMOVE_ONE_FROM_CART': {
   const itemToDelete = state.cart.find(
    (product) => product.id_product === action.payload
   );

   return itemToDelete
    ? itemToDelete.product_quantity > 1
      ? {
         ...state,
         cart: state.cart.map((product) =>
          product.id_product === action.payload
           ? { ...product, product_quantity: product.product_quantity - 1 }
           : product
         ),
        }
      : {
         ...state,
         cart: state.cart.filter(
          (product) => product.id_product !== action.payload
         ),
        }
    : state;
  }

  case 'REMOVE_ALL_FROM_CART':
   return {
    ...state,
    cart: state.cart.filter((product) => product.id_product !== action.payload),
   };

  case 'CLEAR_CART':
   return { ...state, cart: initialCartState.cart };

  case 'GET_PRODUCT':
   return { ...state, product: action.payload };

  default:
   return state;
 }
};
