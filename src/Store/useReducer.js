export const initialState = {
  open:false,
  cart:[]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "open-drawer": {
      return {
        ...state,
        open: !state.open,
      };
    }
    case "ADD-CART":{
      return {
        ...state,
        cart:[...state.cart,action.payload]
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


