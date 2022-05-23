import * as actionType from "./cartTypes";
import { products } from "../../db/db"

const INITIAL_STATE = {
  products: [...products],
  cart: [],
  currentItem: null,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM:
      const item = state.products.find(
        product => product.id === action.payload.id
      );
      const inCart = state.cart.find(
        item => item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: +action.payload.qty + 1 }
              : item
          )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionType.DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    case actionType.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionType.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      };
    default:
      return state;
  }
}

export default cartReducer;