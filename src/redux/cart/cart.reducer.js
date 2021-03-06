import { cartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

import { removeItemFromCart } from "./cart.utils";
import { decreaseQuantityFromCart } from "./cart.utils";

import { increaseQuantityInCart } from "./cart.utils";

const INITIAL_STATE = { hidden: true, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return { ...state, hidden: !state.hidden };

    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case cartActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseQuantityFromCart(state.cartItems, action.payload),
      };

    case cartActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: increaseQuantityInCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
export default cartReducer;
