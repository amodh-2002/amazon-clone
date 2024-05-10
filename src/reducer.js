export const initialState = {
  basket: [],
  user: null,
};

// reducer takes care about adding and removing items from the basket

// selector
export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};

// the above code helps us tally the total amount of products

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD TO BASKET":
      return {
        ...state,
        basket: [...state.basket, action.items],
      };
    // the above code helps us to push items to the basket with current elemnts in the basket
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
