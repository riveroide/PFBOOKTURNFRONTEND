import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../../redux/actions/users/postUser";
import AOS from "aos";
import "aos/dist/aos.css";

const Step1 = ({ step, setStep, setUserEmail }) => {
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
    setUserEmail(input.email);
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(postUser(input));
    alert("post step 1");
  };

  useEffect(() => {
    AOS.init();
  });

  console.log(input);

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      data-aos="fade-up"
    >
      <div>
        <h1 data-aos="fade-up" className="font-cool_g text-3xl mb-12">
          Primero, creá tu usuario en BookTurn
        </h1>
        <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span class="text-xs font-medium text-gray-700">
            {" "}
            Nombre de Usuario{" "}
          </span>

          <input
            type="text"
            name="username"
            onChange={(e) => handleChange(e)}
            placeholder="Tu Usuario"
            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>

        <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span class="text-xs font-medium text-gray-700"> Email </span>

          <input
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="email@ejemplo.com"
            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>

        <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span class="text-xs font-medium text-gray-700"> Contraseña </span>

          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="***********"
            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <input type="text" name="password" onChange={(e) => handleChange(e)} />
        <div className="mt-12">
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit();
              setStep(2);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
