import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { putBusiness } from "../../redux/actions/business/putBusiness";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  getBusinessData,
  getBusinessIdByEmail,
} from "../../redux/actions/businessAcc/getDashboardData.js";

const PutDataForm = (userEmail) => {
  const dispatch = useDispatch();
  const { BusinessAcc } = useSelector((state) => state.businessacc);
  const [disabled, setDisabled] = useState(true);
  const AccData = BusinessAcc[0]?.attributes;
  const { IdSession } = useSelector((state) => state.businessacc);
  const [putData, setPutData] = useState({
    name: AccData?.name,
    telephone: AccData?.telephone,
    email: AccData?.email,
    address: AccData?.address,
    openhour: AccData?.openhour,
    closehour: AccData?.closehour,
    BusinessPic: AccData?.BusinessPic.data?.attributes.url,
  });

  useEffect(() => {
    dispatch(getBusinessData(IdSession));
    if (putData.name === undefined)
      setPutData({
        name: AccData?.name,
        telephone: AccData?.telephone,
        email: AccData?.email,
        address: AccData?.address,
        openhour: AccData?.openhour,
        closehour: AccData?.closehour,
        BusinessPic: "",
      });
  }, [dispatch, putData]);

  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ];

  const handlerClick = (e) => {
    e.preventDefault();
    setDisabled(!disabled);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    let id = BusinessAcc[0]?.id;
    let data = putData
    console.log(data)
    dispatch(putBusiness(id, data));
    alert("se actualiza");
    setDisabled(!disabled);
  };
  const showPreview = (e) => {
    if (e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      let preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
    }
  };
  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.name === "BusinessPic"){
      setPutData({
        ...putData,
        [e.target.name]: e.target.files[0],
      });
    }else{
      setPutData({
        ...putData,
        [e.target.name]: e.target.value,
      });
    }
    
  };
  if (AccData)
    return (
      <div className="flex flex-col w-full h-fit items-center justify-center font-cool_p tracking-wide">
        <div class="w-full max-w-lg flex justify-center mb-6">
          <h1 className="text-5xl text-gray-700 font-semibold">
            DATOS DE LA EMPRESA
          </h1>
        </div>
        <form
          onSubmit={(e) => {
            handlerSubmit(e);
          }}
          class="w-full max-w-lg"
        >
          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                for="grid-first-name"
              >
                Nombre
              </label>
              <input
                disabled={disabled}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="name"
                onChange={(e) => handleChange(e)}
                value={putData.name}
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                for="grid-last-name"
              >
                Telefono
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="telephone"
                onChange={(e) => handleChange(e)}
                disabled={disabled}
                value={putData.telephone}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full px-3 mb-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                name="email"
                value={putData.email}
                onChange={(e) => handleChange(e)}
                disabled={disabled}
              />
            </div>
            <div class="w-full px-3 mb-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                for="grid-city"
              >
                Direccion
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                name="address"
                value={putData.address}
                onChange={(e) => handleChange(e)}
                disabled={disabled}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-3/6 px-3 mb-3 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                for="grid-state"
              >
                Hora de Apertura
              </label>
              <div class="relative">
                <select
                  disabled={disabled}
                  onChange={(e) => handleChange(e)}
                  name="openhour"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option selected disabled hidden>
                    {putData.openhour}
                  </option>
                  {hours.map((e) => {
                    return (
                      <option key={e.id} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-3/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                for="grid-state"
              >
                Hora de Cierre
              </label>
              <div class="relative">
                <input
                  type="number"
                  min="0"
                  max="24"
                  disabled={disabled}
                  onChange={(e) => handleChange(e)}
                  value={putData.closehour}
                  name="closehour"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col h-auto w-full justify-center items-center gap-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-2xl font-bold "
              for="grid-state"
            >
              Imagen de Perfil
            </label>
            <img
              id="file-ip-1-preview"
              className=" h-64 w-3/4"
              src={
                AccData?.BusinessPic.data?.attributes.url
                  ? AccData?.BusinessPic.data.attributes.url
                  : "https://avalos.sv/wp-content/uploads/295-default-featured-image.png"
              }
              alt="xd"
            />
            <input
              onChange={(e) => {
                handleChange(e);
                showPreview(e);
              }}
              name="BusinessPic"
              className="mb-5"
              type="file"
              disabled={disabled}
            />
          </div>
          <div class="flex mb-2 w-full justify-evenly">
            {disabled ? (
              <div className="flex mb-2 w-full justify-evenly">
                <button
                  onClick={handlerClick}
                  class="bg-blue-500 w-24 hover:bg-blue-400 tracking-widest text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                  EDITAR
                </button>
                <Link href={`/business/about/${BusinessAcc.id}`}>
                  <button class="bg-blue-500 w-24 hover:bg-blue-400 tracking-widest text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    PERFIL
                  </button>
                </Link>
              </div>
            ) : (
              <button
                type="submit"
                class="bg-blue-500 w-24 hover:bg-blue-400 tracking-widest text-white font-light py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                GUARDAR
              </button>
            )}
          </div>
        </form>
      </div>
    );
};

export default PutDataForm;
