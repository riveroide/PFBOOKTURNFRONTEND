import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postServices } from "../../redux/actions/services/postServices";
import { useSelector } from "react-redux";
import { getBusinessData } from "../../redux/actions/businessAcc/getDashboardData";
import Swal from 'sweetalert2'

export const ModalPostService = ({ index, setData, idBusiness }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { BusinessAcc } = useSelector((state) => state.businessacc);
  const [data, setDataC] = useState({
    name: "",
    price: 0,
    businesses: BusinessAcc[0].id,
  });

  const services = BusinessAcc[0]?.attributes.services.data;
  const serviData = services.map((s) => {
    return {
      index: index++,
      id: s.id,
      name: s.attributes.name,
      price: s.attributes.price,
      active: s.attributes.active,
    };
  });
  useEffect(() => {
    dispatch(getBusinessData(idBusiness));
    
  }, [dispatch, showModal]);

  const handlerChange = (e) => {
    e.preventDefault();
    setDataC({
      ...data,
      [e.target.name]: e.target.value,
    });
    // setData(serviData)
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postServices(data));
    } catch (error) {console.log(error.message)}
    setData([...serviData,{...data, index:index++}]);
    setDataC({
      name: "",
      price: 0,
      businesses: BusinessAcc[0].id,
    });
    setShowModal(false);
    Toast.fire({
      icon: "success",
      title: "Se creo correctamente!",
    });
  };

  return (
    <>
      <button
        class="bg-blue-500 w-24 hover:bg-blue-400 tracking-widest text-white font-light py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        CREATE
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full md:w-4/6 lg:w-3/6 h-2/6 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Creacion de Servicio
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-wrap">
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
                      value={data.name}
                      onChange={(e) => handlerChange(e)}
                    />
                  </div>
                  <div class="w-full md:w-2/4 px-3 mb-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                      for="grid-last-name"
                    >
                      Precio
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="number"
                      name="price"
                      value={data.price}
                      onChange={(e) => handlerChange(e)}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
