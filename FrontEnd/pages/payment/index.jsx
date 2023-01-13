import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../../components/PaymentForm/PaymentForm"

const stripePromise = loadStripe("pk_test_51MPXPIJ5lraTagsW3ffrIM2S7BHMMYrWJOJsIKBynltyOtAuGb08yWRcRJqQMdAG4XfJWZ2rnbTOHrNjvrmSh1iz00lnZQ3Erk");

export const payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default payment;
