import {
    CardElement,
    PaymentElement,
    PaymentRequestButtonElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useRouter } from 'next/router'

export const PaymentForm = ({email, name}) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter()

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
      router.push("/business/login")
    } catch (error) {
      console.log(error);
      alert("Pago fallido, verifique los datos ingresados", error.message);
    }
  };

  return (
    <div className="h-full w-1/3 flex flex-col">
      {/* <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      />
      <br /> */}
      <div className="m-2 p-2 w-full">
      <CardElement/>
      </div>
      <button onClick={createSubscription} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200" >Subscribirse por $20</button>
    </div>
  );
};

export default PaymentForm;
