import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../../redux/actions/users/postUser";
import AOS from "aos";
import "aos/dist/aos.css";

function valida(input) {
  let errors = {};

  if (!input.name || input.name === "") {
    errors.name = "Name required";
  } else if (/[a-z][a-zA-Z][a-z]/.test(input.name)) {
    errors.name = "Invalid name";
  }

  if (!input.email || input.email === "") {
    errors.email = "Email required";
  } else if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(input.name)) {
    errors.email = "Invalid email";
  }

  if (!input.password || input.password === "") {
    errors.password = "Password required";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(input.password)
  ) {
    errors.password = "Invalid password";
  }

  if (!input.repeatPassword || input.repeatPassword === "") {
    errors.repeatPassword = "You must confirm your password";
  } else if (input.password !== input.repeatPassword) {
    errors.repeatPassword = "Passwords don't matches";
  }

  return errors;
}

const Step1 = ({ step, setStep, setUserEmail, setName, setFinalData }) => {
  const [errors, setErrors] = useState({});
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
    setErrors(
      valida({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

    setUserEmail(input.email);
    setName(input.username);
    setFinalData({ username: input.username, email: input.email });
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(postUser(input));
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      data-aos="fade-up"
    >
      <div>
        <h1 data-aos="fade-up" className="font-cool_g text-3xl mb-12">
          Primero, creá tu usuario en BookTurn
        </h1>
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Nombre de Usuario{" "}
          </span>

          <input
            type="text"
            name="username"
            onChange={(e) => {
              handleChange(e);
              valida(e);
            }}
            placeholder="Tu Usuario"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
          <p>{errors && errors.name}</p>
        </label>

        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700"> Email </span>

          <input
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="email@ejemplo.com"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <p>{errors.email}</p>
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Contraseña{" "}
          </span>

          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="***********"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <p>{errors.password}</p>

        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Confirmar contraseña{" "}
          </span>

          <input
            type="password"
            name="repeatPassword"
            onChange={(e) => handleChange(e)}
            placeholder="***********"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <p>{errors.repeatPassword}</p>

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
