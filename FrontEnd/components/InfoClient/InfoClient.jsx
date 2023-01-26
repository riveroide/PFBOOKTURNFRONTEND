import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const PutDataForm = (props) => {
  const { clientId } = useSelector((state) => state.clients);
  const [disabled, setDisabled] = useState(true);
  const AccData = clientId?.attributes;
  const [putData, setPutData] = useState({
    userName: props?.props.attributes?.user.data?.attributes?.username,
    telephone: props?.props.attributes?.telephone,
    email: props?.props.attributes?.user.data?.attributes?.email,
  });

    
  if (AccData)
    return (
      <div className="flex flex-col w-full h-fit items-center justify-center font-cool_p tracking-wide">
        <div class="w-full max-w-lg flex justify-center mb-6">
          <h1 className="text-5xl text-gray-700 font-semibold">
            Bienvenido a tu perfil
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
                Nombre de usuario
              </label>
              <input
                disabled={disabled}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="name"
                onChange={(e) => handleChange(e)}
                value={putData.userName}
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
                disabled={disabled}
              />
            </div>
          </div>
        </form>
      </div>
    );
};

export default PutDataForm;