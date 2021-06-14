import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import { CartContext } from "./CartContext.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { auth } from "./Firebase.js";
import Footer from "./Footer";

function App() {
  const [{ cart, user }, dispatch] = useContext(CartContext);
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is loggen in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    console.log(user);
    // console.log(user.email);
    return () => {
      //any clean up process go in here
      unSubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login className="login"/>
          </Route>
          <Route path="/orders">
            <Header />
            <h1>Returns and orders</h1>
            <Footer />
          </Route>
          <Route path="/prime">
            <Header />
            <h1>Your Prime</h1>
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
