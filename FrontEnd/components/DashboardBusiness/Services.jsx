import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { putServices } from "../../redux/actions/services/putServices";
import { ModalPostService } from "./ModalPostService";
import { useEffect } from "react";
import { getBusinessData } from "../../redux/actions/businessAcc/getDashboardData.js";
import { deleteService } from "../../redux/actions/services/deleteServices.js";
import Swal from "sweetalert2";

const Services = () => {
  const dispatch = useDispatch();
  const { BusinessAcc } = useSelector((state) => state.businessacc);
  let indexC = 0;
  const servicio = BusinessAcc[0]?.attributes?.services?.data;
  const { IdSession } = useSelector((state) => state.businessacc);
  const servi = servicio?.map((s, index) => {
    indexC = index;
    return {
      index: index,
      id: s.id,
      name: s.attributes?.name,
      price: s.attributes?.price,
      active: s.attributes?.active,
    };
  });

  const [data, setData] = useState(servi);
  console.log(data)
  useEffect(() => {
    dispatch(getBusinessData(IdSession));
  }, [dispatch, putServices, deleteService]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

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

  const handlerDelete = async (e) => {
    const modifyData= data.map((s)=>{
      if(s?.id != e.currentTarget.id) return s
    })
    console.log(modifyData);
    setData(modifyData);
    await dispatch(deleteService(e.currentTarget.id));
    await dispatch(getBusinessData(IdSession));
    Toast.fire({
      icon: "success",
      title: "Se elimino correctamente!",
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    data.map((s) => {
      dispatch(
        putServices(s.id, { name: s.name, price: s.price, active: s.active })
      );
    });
    Toast.fire({
      icon: "success",
      title: "Se actualizo correctamente!",
    });
    dispatch(getBusinessData(IdSession));
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
          {data.map((s,index) => {

            if(s) return (
              <div key={s.id} class="flex mb-3 bg-gray-700 rounded w-fit">
                <div class="w-full md:w-3/6 px-3 mb-3 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-300 text-xl font-bold mb-2"
                    for="grid-first-name"
                  >
                    Servicio
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="name"
                    id={s.index}
                    index={index}
                    value={s.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div class="w-full md:w-1/6 px-3 mb-3">
                  <label
                    class="block uppercase tracking-wide text-gray-300 text-xl font-bold mb-2"
                    for="grid-last-name"
                  >
                    Precio
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="price"
                    id={s.index}
                    index={index}
                    value={s.price}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div class="w-full md:w-1/6 px-3 mb-3 form-check form-switch">
                  <label
                    key={s.id}
                    class="block pl-2 uppercase mb-3 tracking-wide text-gray-300 text-xl font-bold "
                    for="grid-last-name"
                  >
                    Activo
                  </label>
                  <div className="flex items-center">
                    <Switch
                      name="active"
                      id={index}
                      index={index}
                      defaultChecked={s.active === undefined ? true : s.active}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="w-full md:w-1/6 pb-1 mb-3 flex justify-center items-end">
                  <button
                    type="button"
                    id={s.id}
                    onClick={(e) => handlerDelete(e)}
                    class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-trash-x"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7h16" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      <path d="M10 12l4 4m0 -4l-4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}

          <div class="flex mb-2 w-full justify-center gap-32 mt-12">
            <button
              type="submit"
              class="bg-blue-500 w-24 hover:bg-blue-400 tracking-widest text-white font-light py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              GUARDAR
            </button>

            <ModalPostService
              index={indexC}
              setData={setData}
              idBusiness={IdSession}
              Toast={Toast}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default Services;
