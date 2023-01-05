import React from "react";
import stylesResults from "../Results/Results.module.css";
import CardResult from "../../components/CardResult/CardResult";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBusiness } from "../../redux/actions/business/getBusiness";

export default function Results() {
  const dispatch = useDispatch();

  const { businessList } = useSelector((state) => state.business);

  console.log(businessList);

  useEffect(() => {
    dispatch(getBusiness());
  }, []);

  return (
    <div className={stylesResults.resultsContainer}>
      <div className={stylesResults.categoriaOResultado}>
        categoría/búsqueda {businessList.length} resultados
      </div>
      <button className={stylesResults.mejoresValorados}>
        Mejores valorados
      </button>
      <div>
        { businessList.length && businessList.map((e) => {
          return <CardResult key={e.id} name={e.name} services={e.services}/>;
        })}
      </div>
    </div>
  );
}
