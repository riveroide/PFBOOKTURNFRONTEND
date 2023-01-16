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
    user: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      user: userInfo[0].id,
    });
  };

  const handleSubmit = (e) => {
    dispatch(postBusiness(input));
    alert("post step 2");
  };

  useEffect(() => {
    dispatch(getUserByEmail(userEmail));
    AOS.init();
  }, [userEmail]);

  console.log(userInfo, "USER INFOOO");

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <div>
        <h1 className="font-cool_g text-3xl mb-8">
          Ahora, contanos de tu empresa...
        </h1>
        <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span class="text-xs font-medium text-gray-700">
            {" "}
            Nombre de tu Empresa{" "}
          </span>

          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            placeholder="Tu negocio"
            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>

        <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span class="text-xs font-medium text-gray-700"> Dirección </span>

          <input
            type="text"
            name="address"
            onChange={(e) => handleChange(e)}
            placeholder="Calle Ejemplo 323"
            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>

        <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span class="text-xs font-medium text-gray-700"> Teléfono </span>

          <input
            type="text"
            name="telephone"
            onChange={(e) => handleChange(e)}
            placeholder="111222333"
            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>

        <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span class="text-xs font-medium text-gray-700"> Email de tu Empresa</span>

          <input
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="email@empresa.com"
            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>

        <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span class="text-xs font-medium text-gray-700">
            {" "}
            Hora de abertura{" "}
          </span>

          <input
            type="openhour"
            name="openhour"
            onChange={(e) => handleChange(e)}
            placeholder="00-24"
            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>

        <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span class="text-xs font-medium text-gray-700">
            {" "}
            Hora de cierre{" "}
          </span>

          <input
            type="closehour"
            name="closehour"
            onChange={(e) => handleChange(e)}
            placeholder="00-24"
            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
              setStep(3);
            }}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
