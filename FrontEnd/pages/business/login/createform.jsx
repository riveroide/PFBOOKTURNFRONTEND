import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { postBusiness } from "redux/actions/business/postBusiness";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import { useRouter } from "next/router";



const createform = () => {
  const dispatch = useDispatch()
  const router = useRouter();

  const isRequired = "Campo obligatorio"
  const validationSchema=yup.object({
      user: yup.string().required(isRequired).email("Debe ser un email valido"),
      password: yup.string().required(isRequired).min(8,"Debe ser de minimo 8 caracteres"),
      name: yup.string().required(isRequired),
      adress: yup.string().required(isRequired)
  })

  const renderError = (message) => <p className="help is-danger">{message}</p>

  return (
    <div className={styles.container}>
      <h1>SOY EL FORMULARIO DE CREACION DE EMPRESA</h1>
      <Formik
        initialValues={{ 
          user: "",
          password: "",
          name: "",      
          adress: "",
          totalRates: 0,
          totalRated: 0,     
          }}

        validationSchema={validationSchema}
        

        onSubmit={(values,{resetForm}) => {
          console.log(values)
          dispatch(postBusiness(values))
          resetForm();
          alert("cliente registrado con éxito");
          router.push("/");
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <h3>Ingresa correo</h3>
          <Field name="user" type="email" />
          <ErrorMessage name="user" render={renderError}/>
          <h3>Ingresa contraseña</h3>
          <Field name="password" type="text" />
          <ErrorMessage name="password" render={renderError}/>
          <h3>Ingresa nombre de la empresa</h3>
          <Field name="name" type="text" />
          <ErrorMessage name="name" render={renderError}/>
          <h3>Ingresa la direccion</h3>
          <Field name="adress" type="text" />
          <ErrorMessage name="adress" render={renderError}/>
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
