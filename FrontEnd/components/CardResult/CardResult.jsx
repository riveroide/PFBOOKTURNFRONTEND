import React from 'react'
import stylesCard from '../CardResult/CardResult.module.css'
export default function CardResult() {
  return (
    <div className={stylesCard.cardContainer} >

      <div className={stylesCard.imagenContainer} >
        <div className={stylesCard.imagenPrueba} >imagen</div>
      </div>

      <div className={stylesCard.contenidoCard} >
        <p className={stylesCard.nombreEmpresa} >Nombre de la empresa</p>
  
      </div>
    </div>
  )
}
