import React, { useState } from "react";
import { useRouter } from "next/router";
import StepsNav from "./StepsNav";

const BookingService = () => {
  const [stepnum, setstepnum] = useState(1);
  const router = useRouter();
  return (
    <div>
      <StepsNav stepnum={stepnum} />
      <div className="flex justify-center">
        <button
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-cool_p text-2xl"
          onClick={() => {
            if (stepnum < 3) {
              setstepnum(stepnum + 1);
            } else {
              router.push("/");
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
