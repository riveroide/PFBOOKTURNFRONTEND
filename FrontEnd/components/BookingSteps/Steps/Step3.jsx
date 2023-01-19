import React, { useEffect } from "react";
import { getServiceId } from "../../../redux/actions/services/getServices";
import { getClient } from "../../../redux/actions/clients/getClients"
import { useDispatch, useSelector } from "react-redux";


const Step3 = ({ finaldata, setfinaldata }) => {


  return (
    <div className="flex justify-center cursor-pointer truncate text-3xl font-medium text-gray-500 items-center flex-col font-cool_p h-max py-20">
      <h3 className="font-black">Fecha y horario reservado:</h3> {finaldata.dateinfo}
      <h3 className="font-black">Servicios: </h3>
      <ul>
      {finaldata.services?.map((e)=>{ 
      return (<li>{e}</li>)

      })}
        </ul>
    </div>
  );
};

export default Step3;
