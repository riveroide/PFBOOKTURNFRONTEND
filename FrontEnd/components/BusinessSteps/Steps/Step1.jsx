import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../../redux/actions/users/postUser";
import AOS from "aos";
import "aos/dist/aos.css";

const Step1 = ({ step, setStep }) => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
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
    dispatch(postUser(input));
  };

  useEffect(() => {
    AOS.init();
  });

  console.log(input);

  return (
    <div className="flex flex-col justify-center items-center">
      <form>
        <h3>username</h3>
        <input type="text" name="username" onChange={(e) => handleChange(e)} />
        <h3>email</h3>
        <input type="text" name="email" onChange={(e) => handleChange(e)} />
        <h3>password</h3>
        <input type="text" name="password" onChange={(e) => handleChange(e)} />
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit();
            setStep(2);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Step1;
