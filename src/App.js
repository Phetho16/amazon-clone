import React, { useEffect, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProductDetails from "./components/ProductDetails";
import ShoppingContext from "./context/shopping/shoppingContext";
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import "./App.css";
import Login from "./components/Layout/Login";
import Checkout from "./components/Checkout";
import { auth } from "./components/Layout/firebase";
import Payment from "./components/Payment";

const promise = loadStripe(
  "pk_test_51P1cTh02rOrtoA4OmajoqNUVp3cP9A6mKZMjK7icPxelU9qa9SbugeadsioIi8UOGc49nvdzwgjRANaCebxlFsUG00YIsd53if"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ->", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
