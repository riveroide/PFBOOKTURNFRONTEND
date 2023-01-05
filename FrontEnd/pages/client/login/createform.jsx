import React from "react";
import Link from "next/link";

const createform = () => {
  return (
    <div>
      <h1>SOY EL FORMULARIO DE CREACION DE CLIENTE</h1>
      <Link href="/client/login"><button>Volver al login</button></Link>
    </div>
  );
};

export default createform;
