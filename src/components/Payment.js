import React, { useContext, useState } from "react";
import { CurrencyFormat } from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import ShoppingContext from "../context/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal } = shoppingContext;
const history = useHistory()

  const stripe = useStripe();
  const elements = useElements(); 

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecert] = useState(true);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
  
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    });
  
    if (error) {
      setError(`Payment failed: ${error.message}`);
      setProcessing(false);
      setSucceeded(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      // Handle successful payment, e.g., redirect to a success page
      history.push("/orders");
    }
  };

  const handleChange = (e) => {
    setDisabled(e.empty)
    setError(e.error? "e.error.message" : "")
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>456 zaio Road</p>
            <p>Johannesburg, SA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Payment;



