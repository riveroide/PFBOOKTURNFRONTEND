import Link from "next/link";
import React from "react";
import stylesCard from "../CardResult/CardResult.module.css";
export default function CardResult({ name, services, image, id }) {
  return (
    <div className={stylesCard.cardContainer}>
      <div className={stylesCard.imagenContainer}>
        <img src={image} alt={name} className={stylesCard.image} />
      </div>

      <div className={stylesCard.contenidoCard}>
        <Link
          href={{
            pathname: "/business/about/[businessId]",
            query: {
              businessId: id,
            },
          }}
        >
            <p className={stylesCard.nombreEmpresa}> {name} </p>
        </Link>
         {services?.map((e) => {
          console.log(e);
          return (
            <div className={stylesCard.prices}>
              <p> {e.attributes.name} </p>
              <p> {e.attributes.price} </p>
            </div>
          );
        })} 
      </div>
    </div>
  );
}
