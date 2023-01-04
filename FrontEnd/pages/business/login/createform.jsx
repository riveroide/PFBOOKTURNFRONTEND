import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";


const createform = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState(
    {
      user: "",
      // email: ""
    }
  )

  const handlerChange=(e)=>{
    e.preventDefault(),
    setData({...data, [e.target.name]: e.target.value})
    // console.log(data)
  }

  const handlerSubmit=(e)=>{
    e.preventDefault(e)
    console.log(data)
    dispatch(postBusiness(data))
  }

  return (
    <div>
      <h1>SOY EL FORMULARIO DE CREACION DE EMPRESA</h1>
      <div>
        <form onSubmit={(e)=>handlerSubmit(e)}>
          <p>Ingrese nombre</p>
          <input name="user" value={data.name} type="text" onChange={(e)=>{handlerChange(e)}}/>
          {/* <input name="email" value={data.email} type="text" onChange={(e)=>{handlerChange(e)}}/> */}
          <input type="submit" />
        </form>
      </div>
      <Link href="/business/login"><button>Volver al login</button></Link>
    </div>
  );
};

export default createform;
