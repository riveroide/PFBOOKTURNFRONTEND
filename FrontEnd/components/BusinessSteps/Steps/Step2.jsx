import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postBusiness } from "../../../redux/actions/business/postBusiness";
import AOS from "aos";
import "aos/dist/aos.css";
//import * as yup from "yup";
import { useRouter } from "next/router";

const Step2 = ({ step, setStep }) => {
  console.log(step, "13");

  const [input, setInput] = useState({
    name: "",
    address: "",
    telephone: "",
    openhour: "",
    closehour: "",
    role: "2",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(postBusiness(input));
  };

  useEffect(() => {
    AOS.init();
  });

  console.log(input);

  return (
    <div className="flex flex-col justify-center items-center">
      STEP 222222
      <h3>name</h3>
      <input type="text" name="name" onChange={(e) => handleChange(e)} />
      <h3>address</h3>
      <input type="text" name="address" onChange={(e) => handleChange(e)} />
      <h3>telephone</h3>
      <input type="text" name="telephone" onChange={(e) => handleChange(e)} />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </div>
  );
};

export default Step2;
