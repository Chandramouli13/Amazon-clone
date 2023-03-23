//  <-----------  reducer.js ----------->
// Now let’s make a file name reducer.js
// here’s where you will define all of your application level states and define actions to make changes to the state.

//  --------> Let’s see what’s happening in this piece of code.
// > The reducer is a place where you declare all the application level states which can be used later by the application.

// > In initialState, we declare the states we are going to use. In this case, basket and user.

// > The actual reducer function takes in a state and action.
//   The state and action is provided so that the reducer can perform operations on the state.

// > We export the reducer. (last line)

//////////// We haven’t done yet!
/////////// We need to use this reducer to manage our application level state.
/////////// To do so, let’s introduce everything in the index.js.

/* eslint-disable no-fallthrough */
export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, //( ...state) - initial state or original state
        basket: [...state.basket, action.item], // current state (...state.basket) to , whatever we add the item (action.item)
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
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

/////////////////////////////////////////////////////////////////////////////

// How this reducer works :
// Using reducer.js (link to data layer)  (pushing the item into data layer)
// when we click add to basket the action of type (item) is dispatched into data layer

// Here 1st line initialState of basket is empty []
// reducer params -> state is the state of the application, action is updating the state (add to basket / remove from basket)
// (Line 10-21) dispatching actions into the store (updating items into the basket)

//   switch (action.type) {
//      case "ADD_TO_BASKET":

// above thing is, every time when we click add to basket it will dispatch this action.type to ADD_TO_BASKET
