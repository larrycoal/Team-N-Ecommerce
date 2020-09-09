import {hova} from "../Resources/Data"

export const initialState = {
  open:false,
  dmode:false,
  cart:[],
  product:[...hova]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "open-drawer": {
      return {
        ...state,
        open: !state.open,
      };
    }
    case "DARK-MODE": {
      return {
        ...state,
        dmode:!state.dmode
      };
    }
    
    case "ADD-CART":{
      return {
        ...state,
        cart:[...state.cart,action.payload]
      }
    }
    case "PRODUCT":{
      return{
        ...state,
        product:[...action.payload]
      }
    }
    default:
      return state;
  }
};
// const store = () => {
//     let [state, dispatch] = useReducer(reducer, {
//       cart: [{id:0, name:"richard"}],
//       open: false,
//     });
//     return {state,dispatch}
//   };


