import React from 'react'
import stylesResults from '../Results/Results.module.css'
import CardResult from '../../components/CardResult/CardResult'

export default function Results() {
  return (
    <div className={stylesResults.resultsContainer} >
      <div className={stylesResults.categoriaOResultado} >categoría/búsqueda *numero de resultados* </div>
      <button className={stylesResults.mejoresValorados} >Mejores valorados</button>
      <div>
      <CardResult />
      </div>
    </div>
  )
}
