export const initialState = {
  cart: [],
  user: null,
};

export const CartSumTotal = (cart) => {
  const amount = cart.reduce((amount, item) => (amount += item.price), 0);
  return Number(amount.toFixed(2));
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      //logic for adding user
      return { ...state, user: action.user };
    case "ADD_TO_CART":
      //logic for adding to basket
      return { ...state, cart: [...state.cart, action.item] };
    case "REMOVE_FROM_CART":
      //logic for removing from cart
      console.log("Remove request reached reducer");
      let cartCopy = [...state.cart];
      const index = state.cart.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        cartCopy.splice(index, 1);
        return { ...state, cart: [...cartCopy] };
      } else {
        return state;
      }
      cartCopy.splice(index, 1);
      return { ...state, cart: cartCopy };
    default:
      return state;
  }
}

export default reducer;
