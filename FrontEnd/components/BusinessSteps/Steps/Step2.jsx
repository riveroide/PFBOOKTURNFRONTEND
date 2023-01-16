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
    <div
      data-aos="fade-up"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <h1>STEP 2</h1>
      <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <span class="text-xs font-medium text-gray-700"> Business name </span>

        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="name"
          class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      </label>

      <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <span class="text-xs font-medium text-gray-700"> Address </span>

        <input
          type="text"
          name="address"
          onChange={(e) => handleChange(e)}
          placeholder="address"
          class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      </label>

      <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <span class="text-xs font-medium text-gray-700"> Telephone </span>

        <input
          type="text"
          name="telephone"
          onChange={(e) => handleChange(e)}
          placeholder="telephone"
          class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      </label>

      <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <span class="text-xs font-medium text-gray-700"> Email </span>

        <input
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="email"
          class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      </label>

      <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <span class="text-xs font-medium text-gray-700"> Openhour </span>

        <input
          type="openhour"
          name="openhour"
          onChange={(e) => handleChange(e)}
          placeholder="openhour"
          class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      </label>

      <label class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <span class="text-xs font-medium text-gray-700"> Closehour </span>

        <input
          type="closehour"
          name="closehour"
          onChange={(e) => handleChange(e)}
          placeholder="closehour"
          class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      </label>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
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
