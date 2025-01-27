import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
const Payment = () => {
  const [isPaid, setIsPaid] = useState(false); // Tracks payment status
  // Paystack public key and customer details
  const publicKey = "";
  const amount = 5000 * 100; // Amount in kobo (e.g., 5000 NGN)
  const email = "customer@example.com";
 const  currency = "ZAR"
  // Callback function after successful payment
  const onSuccess = (reference) => {
    console.log("Payment successful!", reference);
    // Update the isPaid model here
    setIsPaid(true);
    // Optionally, send the payment reference to your backend for verification
  };
  // Callback function for payment close
  const onClose = () => {
    console.log("Payment closed.");
  };
  // Paystack configuration object
  const componentProps = {
    email,
    amount,
    publicKey,
    currency,
    text: "Pay Now",
    onSuccess,
    onClose,
  };
  return (
    <div>
      <h1>Paystack Payment Integration</h1>
      <p>Status: {isPaid ? "Payment Complete" : "Awaiting Payment"}</p>
      <PaystackButton {...componentProps} />
    </div>
  );
};
export default Payment;
