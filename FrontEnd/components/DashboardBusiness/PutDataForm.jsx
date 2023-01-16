import React, { useState } from "react";
import { useSelector } from "react-redux";
import { putBusiness } from "../../redux/actions/business/putBusiness";
import { useDispatch } from "react-redux";

const PutDataForm = () => {
  const dispatch = useDispatch();
  const { BusinessAcc } = useSelector((state) => state.business);
  const [disabled, setDisabled] = useState(true);
  const AccData = BusinessAcc.attributes;
  const [putData, setPutData] = useState({
    name: AccData.name,
    telephone: AccData.telephone,
    email: AccData.email,
    address: AccData.address,
    openhour: AccData.openhour,
    closehour: AccData.closehour,
  });

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
    let id = BusinessAcc.id;
    let data = putData;
    dispatch(putBusiness(id, data));
    alert("se actualiza");
    setDisabled(!disabled);
  };
  const handleChange = (e) => {
    e.preventDefault(),
      setPutData({
        ...putData,
        [e.target.name]: e.target.value,
      });
  };
  return (
    <div className="flex flex-col w-full  items-center justify-center font-cool_p tracking-wide">
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
              value={putData.telephone}
              onChange={(e) => handleChange(e)}
              disabled={disabled}
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
                  return <option value={e}>{e}</option>;
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
        <div class="flex mb-2 w-full justify-evenly">
          {disabled ? (
            <button
              onClick={handlerClick}
              class="bg-blue-500 w-24 hover:bg-blue-400 tracking-widest text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              EDITAR
            </button>
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
