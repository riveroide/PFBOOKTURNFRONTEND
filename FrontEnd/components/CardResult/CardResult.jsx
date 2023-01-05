import React from "react";
import stylesCard from "../CardResult/CardResult.module.css";
export default function CardResult({ name, services }) {
  return (
    <div className={stylesCard.cardContainer}>
      <div className={stylesCard.imagenContainer}>
        <div className={stylesCard.imagenPrueba}>imagen</div>
      </div>

      <div className={stylesCard.contenidoCard}>
        <p className={stylesCard.nombreEmpresa}> {name} </p>
        {services?.map((e) => {
          return (
            <tr>
              <td> {e.name} </td>
              <td> {e.time} </td>
              <td> {e.price} </td>
            </tr>
          );
        })}
      </div>
    </div>
  );
}
