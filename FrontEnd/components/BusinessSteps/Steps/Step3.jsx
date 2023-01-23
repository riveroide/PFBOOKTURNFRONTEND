import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../../PaymentForm/PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51MPXPIJ5lraTagsW3ffrIM2S7BHMMYrWJOJsIKBynltyOtAuGb08yWRcRJqQMdAG4XfJWZ2rnbTOHrNjvrmSh1iz00lnZQ3Erk"
);
//import { getServices } from "../../../redux/actions/business/postBusiness";
import AOS from "aos";
import "aos/dist/aos.css";

const Step3 = ({ step, setStep, email, name }) => {
  useEffect(() => {
    AOS.init();
  });

  const [input, setInput] = useState({
    service: "",
    price: "",
    role: "2",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {};

  console.log(input, "soyinput!!");

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center min-h-screen w-full"
      >
        <h1 className="font-cool_g text-3xl mb-12">
          {" "}
          Realizá el pago de tu suscripción a BookTurn{" "}
        </h1>
        <div className="w-full flex justify-center">
          <Elements stripe={stripePromise}>
            <PaymentForm email={email} name={name} />
          </Elements>
        </div>
      </div>

      {/* <h3>service</h3>
      <select name="service" id="">
        <option value=""></option>
      </select>
      <h3>price</h3>
      <select name="price" id=""></select>
      <p>+</p>
      <div>servicios agregados</div>
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
          setStep(4);
        }}
      >
        Submit
      </button> */}
    </div>
  );
};

export default Step3;
