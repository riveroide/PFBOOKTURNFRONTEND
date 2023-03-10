import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { putBusiness } from "../../redux/actions/business/putBusiness";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  getBusinessData,
  getBusinessIdByEmail,
} from "../../redux/actions/businessAcc/getDashboardData.js";
import Swal from 'sweetalert2'
import Image from "next/image";

const PutDataForm = () => {
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
        
      });
  }, [dispatch, putData]);


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

  const handlerClick = (e) => {
    e.preventDefault();
    setDisabled(!disabled);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    let id = BusinessAcc[0]?.id;
    let data = putData
    dispatch(putBusiness(id, data));
    Toast.fire({
      icon: 'success',
      title: 'Se actualizo correctamente!'
    })
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
                
              >
                Hora de Apertura
              </label>
              <div class="relative">
                <input
                  type="number"
                  min="0"
                  max="24"
                  disabled={disabled}
                  onChange={(e) => handleChange(e)}
                  value={putData.openhour}
                  name="openhour"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>
            <div class="w-full md:w-3/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                
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
              
            >
              Imagen de Perfil
            </label>
            <Image
              width={1000}
              height={665}
              id="file-ip-1-preview"
              className=" h-64 w-3/4"
              src={
                AccData?.BusinessPic.data?.attributes
                  ? AccData?.BusinessPic.data.attributes.formats.large.url
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
