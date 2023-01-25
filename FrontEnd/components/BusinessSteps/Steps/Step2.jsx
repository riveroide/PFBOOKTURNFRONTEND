import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBusiness } from "../../../redux/actions/business/postBusiness";
import { getUserByEmail } from "../../../redux/actions/users/getUsers";
import AOS from "aos";
import "aos/dist/aos.css";

function valida(input) {
  let errors = {};

  //only letters
  if (!input.name) {
    errors.name = "Name required";
  }
  //letters and numbers
  if (!input.address) {
    errors.address = "Address required";
  }

  // numeros
  if (!input.telephone) {
    errors.telephone = "Telephone required";
  }

  //email
  if (!input.email) {
    errors.email = "Email required";
  }

  //only numbers
  if (!input.openhour) {
    errors.openhour = "Open hour required";
  } else if (input.openhour < 0 || input.openhour > 24) {
    errors.openhour = "open hour must be between 0 and 24";
  }

  //only numbers
  if (!input.closehour) {
    errors.closehour = "Close hour required";
  } else if (input.closehour < 0 || input.closehour > 24) {
    errors.closehour = "close hour must be between 0 and 24";
  }

  return errors;
}

const Step2 = ({
  step,
  setStep,
  userEmail,
  setEmailBusiness,
  finalData,
  setFinalData,
}) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);
  const [errors, setErrors] = useState({});
  console.log(finalData, "soy final data");

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
    setEmailBusiness(input.email); // validar para que no rompa
    setFinalData({
      ...finalData,
      name: input.name,
      email: input.email,
      address: input.address,
      telephone: input.telephone,
      openhour: input.openhour,
      closehour: input.closehour,
    });
    setErrors(
      valida({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    dispatch(postBusiness(input));
    alert("post step 2");
  };

  useEffect(() => {
    dispatch(getUserByEmail(userEmail));
    AOS.init();
  }, [userEmail]);

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <div>
        <h1 className="font-cool_g text-3xl mb-8">
          Ahora, contanos de tu empresa...
        </h1>
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            Nombre de tu Empresa
          </span>

          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            placeholder="Tu negocio"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <p>{errors.name}</p>
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700"> Dirección </span>

          <input
            type="text"
            name="address"
            onChange={(e) => handleChange(e)}
            placeholder="Calle Ejemplo 323"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <p>{errors.address}</p>
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700"> Teléfono </span>

          <input
            type="text"
            name="telephone"
            onChange={(e) => handleChange(e)}
            placeholder="111222333"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <p>{errors.telephone}</p>
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Email de tu Empresa
          </span>

          <input
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="email@empresa.com"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <p>{errors.email}</p>
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Hora de apertura{" "}
          </span>

          <input
            type="openhour"
            name="openhour"
            onChange={(e) => handleChange(e)}
            placeholder="00-24"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <p>{errors.openhour}</p>
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Hora de cierre{" "}
          </span>

          <input
            type="closehour"
            name="closehour"
            onChange={(e) => handleChange(e)}
            placeholder="00-24"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <p>{errors.closehour}</p>
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
