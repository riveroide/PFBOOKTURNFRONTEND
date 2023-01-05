import React from "react";
import stylesResults from "../Results/Results.module.css";
import CardResult from "../../components/CardResult/CardResult";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBusiness } from "../../redux/actions/business/getBusiness";
import SearchBar from "../../components/SearchBar/SearchBar"

export default function Results() {
  const dispatch = useDispatch();

  const { businessList } = useSelector((state) => state.business);

  console.log(businessList);

  useEffect(() => {
    dispatch(getBusiness());
  }, []);

  return (
    <div className={stylesResults.resultsContainer}>
      <div className={stylesResults.searchbarContainer}>
        <SearchBar/>
      </div>
      <div className={stylesResults.categoriaOResultado}>
        categoría/búsqueda {businessList.length} resultados
      </div>
      <button className={stylesResults.mejoresValorados}>
        Mejores valorados
      </button>
      <div>
        { businessList.length && businessList.map((e) => {
          console.log(e.attributes.BusinessPic)
          return <CardResult key={e.id} id={e.id} name={e.attributes.name} services={e.attributes.services.data} image={e.attributes.BusinessPic.data?.attributes.formats.small.url ? `http://localhost:1337${e.attributes.BusinessPic.data?.attributes.formats.small.url}` : "https://avalos.sv/wp-content/uploads/295-default-featured-image.png"}/>
        })}
      </div>
    </div>
  );
}
