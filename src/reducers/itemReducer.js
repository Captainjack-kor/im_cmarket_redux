import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      return Object.assign({}, state, {
        cartItems:[...state.cartItems, action.payload]
      })
      break;
    case REMOVE_FROM_CART:
      //TODO
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId);

      let removeItem = [...state.cartItems]

      removeItem.splice(idx, 1);

      return Object.assign({}, state, {

      cartItems:removeItem

      })
      break;
    case SET_QUANTITY:
      //let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
      //TODO
      let index = state.cartItems.findIndex(el => el.itemId === action.payload.itemId);

      let copiedState = [...state.cartItems];

      copiedState[index].quantity = action.payload.quantity;

      return Object.assign({},state,{

      cartItems:copiedState

      });
      break;
    default:
      return state;
  }
}

export default itemReducer;