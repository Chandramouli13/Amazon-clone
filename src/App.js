import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider/StateProvider";
import Payment from "./components/Payment/payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51Mknf4SGM22w4L1b6KI1drgYCpPCQsyZhOSG7mvrrB8whoTSFpbub3jRdYQEvahn00Wt4BgmWpAeVzBRVkKVsJDP00arQFYCWz"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>}></Route>
          <Route path="/Orders" element={<Orders />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
