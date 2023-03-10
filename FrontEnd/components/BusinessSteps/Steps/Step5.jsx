import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { getAllServices } from "../../../redux/reducers/servicesSlide";

import AOS from "aos";
import "aos/dist/aos.css";

const Step5 = ({ step, setStep, finalData, finalServices }) => {
  // LLAMAR A LOS SERVICIOS PARA PASAR ID PARA RELACIONAR
  //const userInfo = useSelector((state) => state.users);

  //const { businessId: business } = useSelector((state) => state.business);
  //console.log(business);
  //console.log(userInfo, "soy userinfo");
  ///const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getAllServices());
    AOS.init;
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center min-h-screen"
      >
        <h1 className="font-cool_g text-3xl mb-8">
          Confimar datos de empresa:
        </h1>
        <p className="font-cool_g text-3xl mb-8">{finalData.name}</p>
        <p className="font-cool_g text-3xl mb-8">{finalData.businessemail}</p>
        <p className="font-cool_g text-3xl mb-8">{finalData.address}</p>
        <p className="font-cool_g text-3xl mb-8">{finalData.telephone}</p>
        <p className="font-cool_g text-3xl mb-8">{finalData.openhour}</p>
        <p className="font-cool_g text-3xl mb-8">{finalData.closehour}</p>
        <h1 className="font-cool_g text-3xl mb-8">
          Confimar servicios ingresados:
        </h1>
        <p>{finalServices.name}</p>
        <p>{finalServices.price}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
          type="submit"
          onClick={() => setStep(4)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Step5;
