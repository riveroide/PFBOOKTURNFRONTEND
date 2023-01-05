import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { postBusiness } from "redux/actions/business/postBusiness";
import { Formik, Field, Form } from "formik";



const createform = () => {
  const dispatch = useDispatch()
  // const [data, setData] = useState(
  //   {
  //     user: "",
  //     password: "",
  //     name: "",      
  //     adress: "",     
  //     totalRates: 0,
  //     totalRated: 0,         
  //     schedule: "no se"   
      
  //   }
  // )

  // const handlerChange=(e)=>{
  //   e.preventDefault(),
  //   setData({...data, [e.target.name]: e.target.value})
  //   // console.log(data)
  // }

  // const handlerSubmit=(e)=>{
  //   e.preventDefault(e)
  //   console.log(data)
  //   dispatch(postBusiness(data))
  // }

  return (
    <div>
      <h1>SOY EL FORMULARIO DE CREACION DE EMPRESA</h1>
      <Formik
        initialValues={{ 
          user: "",
          password: "",
          name: "",      
          adress: "",     
          totalRates: 0,
          totalRated: 0,         
          schedule: "no se"   }}

        onSubmit={(values) => {
          console.log(values)
          dispatch(postBusiness(values))
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <h1>asfasfasda</h1>
          <Field name="user" type="text" />
          {/* <h1>asfasfasda</h1> */}
          {/* <Field name="pass" type="email" /> */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {/* <div>
        <form onSubmit={(e)=>handlerSubmit(e)}>
          <p>Ingrese email</p>
          <input name="user" value={data.user} type="text" onChange={(e)=>{handlerChange(e)}}/>
          <p>Ingrese contraseña</p>
          <input name="password" value={data.password} type="text" onChange={(e)=>{handlerChange(e)}}/>
          <p>Ingrese nombre</p>
          <input name="name" value={data.name} type="text" onChange={(e)=>{handlerChange(e)}}/>
          <p>Ingrese direccion</p>
          <input name="adress" value={data.adress} type="text" onChange={(e)=>{handlerChange(e)}}/>
          <input type="submit" />
        </form>
      </div>
      <Link href="/business/login"><button>Volver al login</button></Link> */}
    </div>
  );
};

export default createform;
