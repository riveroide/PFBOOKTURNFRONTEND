import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { putServices } from "../../redux/actions/services/putServices";
import { ModalPostService } from "./ModalPostService";
import { useEffect } from "react";
import {getBusinessData} from "../../redux/actions/business/getBusiness"

const Services = () => {
  const dispatch = useDispatch();
  const { BusinessAcc } = useSelector((state) => state.business);
  const servicios = BusinessAcc.attributes.services.data;
  
  let index = 0;
  const servi = servicios.map((s) => {
    return {
      index: index++,
      id: s.id,
      name: s.attributes.name,
      price: s.attributes.price,
      active: s.attributes.active,
    };
  });

  let [data, setData] = useState(servi);
  console.log(data);


  const handleChange = (e) => {
    if (e.target.name === "active") {
      setData(
        data.map((s) => {
          if (s.index == e.target.id) {
            return {
              ...s,
              [e.target.name]: e.target.checked,
            };
          }
          return s;
        })
      );
    } else {
      setData(
        data.map((s) => {
          if (s.index == e.target.id) {
            return {
              ...s,
              [e.target.name]: e.target.value,
            };
          }
          return s;
        })
      );
    }
    console.log(data);
  };

  const handlerSubmit = (e) => {
    
    console.log(data);
    data.map(async (s) => {
      await dispatch(
        putServices(s.id, { name: s.name, price: s.price, active: s.active })
      );
    });
  };

  return (
    <div className="flex flex-col w-full  items-center justify-center font-cool_p tracking-wide">
      <div class="w-full max-w-lg flex justify-center mb-6">
        <h1 className="text-5xl text-gray-700 font-semibold">SERVICIOS</h1>
      </div>
      <form
        onSubmit={(e) => {
          handlerSubmit(e);
        }}
        class="w-full max-w-lg"
      >
        {data.map((s) => {
          return (
            <div key={s.id} class="flex flex-wrap pl-5 mb-3">
              <div key={s.id} class="w-full md:w-2/4 px-3 mb-3 md:mb-0">
                <label key={s.id}
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                  for="grid-first-name"
                >
                  Servicio
                </label>
                <input key={s.id}
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  name="name"
                  id={s.index}
                  index={s.index}
                  value={s.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div key={s.id} class="w-full md:w-1/4 px-3 mb-3">
                <label key={s.id}
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                  for="grid-last-name"
                >
                  Precio
                </label>
                <input key={s.id}
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  name="price"
                  id={s.index}
                  index={s.index}
                  value={s.price}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div key={s.id} class="w-full md:w-1/4 px-3 mb-3 form-check form-switch">
                <label key={s.id}
                  class="block pl-2 uppercase mb-3 tracking-wide text-gray-700 text-xl font-bold "
                  for="grid-last-name"
                >
                  Activo
                </label>
                <div key={s.id}
                className="fles items-center">
                  <Switch
                  key={s.id}
                    name="active"
                    id={s.index}
                    index={s.index}
                    defaultChecked={s.active}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div class="flex mb-2 w-full justify-evenly">
          <button
            type="submit"
            class="bg-blue-500 w-24 hover:bg-blue-400 tracking-widest text-white font-light py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            GUARDAR
          </button>
          <ModalPostService/>
        </div>
      </form>
      
    </div>
  );
};

export default Services;
