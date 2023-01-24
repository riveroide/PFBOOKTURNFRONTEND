import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessByEmail } from "../../../redux/actions/business/getBusiness";
import { postServices } from "../../../redux/actions/services/postServices";

import AOS from "aos";
import "aos/dist/aos.css";

function valida(input) {
  let errors = {};

  //only letters
  if (!input.name || input.name === "") {
    errors.name = "Service name required";
  } else if (/[0-9]/.test(input.name)) {
    errors.name = "Services name isonly letters";
  }

  // numeros
  if (!input.price || input.price === "") {
    errors.price = "Price required";
  } else if (/[0-9]/.test(input.price)) {
    errors.price = "Price is only numbers";
  }

  return errors;
}

const Step4 = ({ step, setStep, emailBusiness, setFinalServices }) => {
  const { BusinessAcc } = useSelector((state) => state.business);
  //console.log(BusinessAcc[0]?.id);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    price: "",
    business: "",
  });

  console.log(list);

  const handleAdd = () => {
    const items = list;
    dispatch(postServices(input));
    setList([...items, input]);
    //setList([...items, `item-${items.length}`]);
  };

  // const handleRemove = () => {
  //   const items = list;
  //   if (items.length > 0) {
  //     const lastIndex = items.length - 1;
  //     setList(items.filter((item, index) => index !== lastIndex));
  //   }
  // };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      business: BusinessAcc[0].id,
    });
    setFinalServices(input);
    setErrors(
      valida({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    setStep(5);
  };

  useEffect(() => {
    AOS.init();
    dispatch(getBusinessByEmail(emailBusiness)); //getUserByEmail(userEmail)  dispatch(getUserByEmail(userEmail));
  }, [emailBusiness]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center min-h-screen"
      >
        <h1 className="font-cool_g text-3xl mb-8">
          Agrega tus servicios y asignales un precio...
        </h1>
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">Servicio</span>

          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            placeholder="servicio"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <p>{errors.name}</p>
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">Price</span>

          <input
            type="text"
            name="price"
            onChange={(e) => handleChange(e)}
            placeholder="precio"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        <p>{errors.price}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
          onClick={handleAdd}

          //handleSubmit(e);
          //setStep(5);
        >
          +
        </button>
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
          onClick={handleRemove}
        >
          -
        </button> */}
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
          onClick={handleRemove}
        >
          edit
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
          onClick={handleRemove}
        >
          delete
        </button> */}
        <div className="services-container">
          servicios agregados
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                {item.name}
                {item.price}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Step4;
