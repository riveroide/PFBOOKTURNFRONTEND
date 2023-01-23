import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { putServices } from "../../redux/actions/services/putServices";
import { ModalPostService } from "./ModalPostService";
import { useEffect } from "react";
import { getBusinessData } from "../../redux/actions/business/getBusiness";

const Services = () => {
  const dispatch = useDispatch();
  const { BusinessAcc } = useSelector((state) => state.business);
  let index = 0;
  const servicio = BusinessAcc.attributes.services.data;
  const { BusinessIdSession } = useSelector((state) => state.business);
  const servi = servicio.map((s) => {
    return {
      index: index++,
      id: s.id,
      name: s.attributes?.name,
      price: s.attributes?.price,
      active: s.attributes?.active,
    };
  });
  // console.log(servi)
  const [data, setData] = useState(servi);
  

  useEffect(() => {
    dispatch(getBusinessData(BusinessIdSession));
  }, [dispatch, putServices]);

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
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    data.map(async (s) => {
      await dispatch(
        putServices(s.id, { name: s?.name, price: s?.price, active: s?.active })
      );
    });
    dispatch(getBusinessData(2));
  };
  if (data) {
    return (
      <div className="flex flex-col flex-wrap w-full h-fit items-center font-cool_p tracking-wide">
        <div class="w-full max-w-lg flex justify-center mb-6">
          <h1 className="text-5xl text-gray-700 font-semibold">SERVICIOS</h1>
        </div>
        <form
          onSubmit={(e) => {
            handlerSubmit(e);
          }}
          class="w-full flex flex-wrap justify-around px-2 md:px-16"
        >
          {data.map((s) => {
            return (
              <div key={s.id} class="flex flex-wrap pl-5 mb-3">
                <div class="w-full md:w-2/4 px-3 mb-3 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                    for="grid-first-name"
                  >
                    Servicio
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="name"
                    id={s.index}
                    index={s.index}
                    value={s.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div class="w-full md:w-1/4 px-3 mb-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                    for="grid-last-name"
                  >
                    Precio
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="price"
                    id={s.index}
                    index={s.index}
                    value={s.price}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div class="w-full md:w-1/4 px-3 mb-3 form-check form-switch">
                  <label
                    key={s.id}
                    class="block pl-2 uppercase mb-3 tracking-wide text-gray-700 text-xl font-bold "
                    for="grid-last-name"
                  >
                    Activo
                  </label>
                  <div className="fles items-center">
                    <Switch
                      name="active"
                      id={s.index}
                      index={s.index}
                      defaultChecked={s.active===undefined?true:s.active}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
              </div>
            );
          })}

        </form>
          <div class="flex mb-2 w-full justify-center gap-32 mt-12">
            <button
              type="submit"
              class="bg-blue-500 w-24 hover:bg-blue-400 tracking-widest text-white font-light py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              GUARDAR
            </button>
            <ModalPostService index={index} setData={setData} idBusiness={BusinessIdSession} />
          </div>
      </div>
    );
  }
};

export default Services;
