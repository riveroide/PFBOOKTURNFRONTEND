import {
    CardElement,
    PaymentElement,
    PaymentRequestButtonElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js";
import React, { useState } from "react";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const createSubscription = async () => {
    try {
      const paymentMethod = await stripe.createPaymentMethod({
          card: elements.getElement("card"),
          type: "card",
      });
      const response = await fetch("/api/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          paymentMethod: paymentMethod.paymentMethod.id,
        }),
      });
      if (!response.ok) return alert("Pago fallido");
      const data = await response.json();
      const confirm = await stripe.confirmCardPayment(data.clientSecret);
      if (confirm.error) return alert("Pago fallido");
      alert("Pago exitoso. Subscripcion activa");
    } catch (error) {
      console.log(error);
      alert("Pago fallido, ", error.message);
    }
  };

  return (
    <div className="h-full w-1/3 flex flex-col">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <div className="m-2 p-2 w-full">
      <CardElement/>
      </div>
      <button onClick={createSubscription}>Subscribirse</button>
    </div>
  );
};

export default PaymentForm;
