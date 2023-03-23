import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./components/StateProvider/StateProvider";
import reducer, { initialState } from "./components/StateProvider/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

//  <--------- So let’s see what happens here. (StateProvider) ------------->

// > We import few things — reducer and initialState from reducer.js and
//   then we import the StateProvider component from the StateProvider.js.

// > We enclose the App component with StateProvider so that children get access to the states too.

// > We pass in the reducer and initialState to the StateProvider.

// > Now the State knows what is the initial state and which reducer too.
