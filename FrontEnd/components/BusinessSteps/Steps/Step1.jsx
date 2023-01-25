import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../../redux/actions/users/postUser";
import AOS from "aos";
import "aos/dist/aos.css";

function valida(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Invalid name";
  }

  if (!input.email) {
    errors.email = "Email required";
  }

  if (!input.password) {
    errors.password = "Password required";
  }

  if (input.password !== input.repeatPassword) {
    errors.repeatPassword = "Passwords don't matches";
  }

  return errors;
}

const Step1 = ({ step, setStep, setUserEmail, setName, setFinalData }) => {
  const [errors, setErrors] = useState(false);
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    role: "2",
  });

  console.log(input, "input value");

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
    alert("post step 1");
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
              () => handleChange(e);
              valida(e);
            }}
            placeholder="Tu Usuario"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
          {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
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
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email}</p>
          )}
        </label>

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
          {errors.password && (
            <p className="text-xs text-red-600">{errors.password}</p>
          )}
        </label>

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
          {errors.repeatPassword && (
            <p className="text-xs text-red-600">{errors.repeatPassword}</p>
          )}
        </label>

        <input type="text" name="password" onChange={(e) => handleChange(e)} />
        <div className="mt-12">
          <button
            // disabled={errors && true}
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
