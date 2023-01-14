import React, { useState } from "react";
import { useRouter } from "next/router";
import StepsNav from "./StepsNav";
import StepsContents from "./StepsContents";

const BookingService = ({ services }) => {
  const [stepnum, setstepnum] = useState(1);
  const router = useRouter();
  return (
    <div>
      <div>
        <StepsNav stepnum={stepnum} />
      </div>
      <div>
        <StepsContents stepnum={stepnum} services={services} />
      </div>
      <div className="flex justify-around">
        <button
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-cool_p text-2xl"
          onClick={() => {
            if (stepnum !== 1) {
              setstepnum(stepnum - 1);
            } else {
              null;
            }
          }}
        >
          Anterior
        </button>
        <button
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-cool_p text-2xl"
          onClick={() => {
            if (stepnum < 3) {
              setstepnum(stepnum + 1);
            } else {
              alert("se deberia hacer el post");
            }
          }}
        >
          Proximo
        </button>
      </div>
    </div>
  );
};

export default BookingService;
