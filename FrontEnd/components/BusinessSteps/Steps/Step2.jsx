import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBusiness } from "../../../redux/actions/business/postBusiness";
import { getUserByEmail } from "../../../redux/actions/users/getUsers";
import AOS from "aos";
import "aos/dist/aos.css";

const Step2 = ({ step, setStep, userEmail }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);

  const [input, setInput] = useState({
    name: "",
    email: "",
    address: "",
    telephone: "",
    openhour: "",
    closehour: "",
    user: userInfo[0].id,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    dispatch(postBusiness(input));
    alert("post step 2");
  };

  useEffect(() => {
    dispatch(getUserByEmail(userEmail));
    AOS.init();
  }, []);

  console.log(userInfo, "USER INFOOO");

  return (
    <div className="flex flex-col justify-center items-center">
      STEP 222222
      <h3>name</h3>
      <input type="text" name="name" onChange={(e) => handleChange(e)} />
      <h3>address</h3>
      <input type="text" name="address" onChange={(e) => handleChange(e)} />
      <h3>telephone</h3>
      <input type="text" name="telephone" onChange={(e) => handleChange(e)} />
      <h3>email</h3>
      <input type="email" name="email" onChange={(e) => handleChange(e)} />
      <h3>openhour</h3>
      <input type="text" name="openhour" onChange={(e) => handleChange(e)} />
      <h3>closehour</h3>
      <input type="text" name="closehour" onChange={(e) => handleChange(e)} />
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
          setStep(3);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Step2;
