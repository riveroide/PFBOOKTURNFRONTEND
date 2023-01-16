import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getServices } from "../../../redux/actions/business/postBusiness";
import AOS from "aos";
import "aos/dist/aos.css";

const Step3 = ({ step, setStep }) => {
  const prices = useSelector((state) => state.servicesList);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  });

  console.log(prices, "soy prices");

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
      STEP 33333
      <h1>ACA VA EL METODO DE PAGO AGUSSS</h1>
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
