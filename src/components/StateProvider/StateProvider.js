// <------ Setting up React Context API -------------------->

// The Context API is a very important part of React.
// It helps us to make application level states and we can get the data from those states through any component.
// There are many alternatives, one of them is Redux. But I highly recommend you should start off with React Context API.

// Setting up React Context API is more of a boiler plate.
// Things won’t make sense at first but once you practice, things will automatically start making sense.
// Do not worry looking at this code.
// setting up React Context API is more of a boilerplate and pretty much same in every project.

// So let’s make a file named StateProvider.js and have these contents

//////////////// After this, Now let’s make a file name reducer.js ------>

import React, { createContext, useContext, useReducer } from "react";

// This file is like a temporary storage file
// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

/////////////////////////////////////////////////////////////////////////

// Assume this is a temporary storage file
// Here, we are preparing The data layer -> React Context Api / Redux
// Then, (Line 7-12) this will Wrap our app and provide the Data layer

// Using reducer.js (link to data layer)  (pushing the item into data layer)
// when we click add to basket the action of type (item) is dispatched into data layer -> (reducer.js)
// dispatching the item includes using useStateValue(updates the value) -> (product.js)
// Finally, with useStateValue the dispatched information will be sent to the basket. (basket updates)
