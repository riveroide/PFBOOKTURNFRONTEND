import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import CardResult from "../../components/CardResult/CardResult";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBusiness } from "../../redux/actions/business/getBusiness";
import {
  getClient,
  getClientByEmail,
} from "../../redux/actions/clients/getClients";
import SearchAndFilter from "../searchAndFilter/SearchAndFilter";
import Paginado from "../Paginado/Paginado";

export default function Results() {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { businessList } = useSelector((state) => state.business);
  const [hydrated, setHydrated] = useState(false);
  const { clientId } = useSelector((state) => state.clients);

  useEffect(() => {
    setHydrated(true);
    if (!businessList.length) dispatch(getBusiness());
    if (session) dispatch(getClientByEmail(session?.user.email));
  }, [dispatch, session]);

  useEffect(() => {
    setState({
      ...state,
      page: 1,
    });
  }, [businessList]);

  const [state, setState] = useState({
    page: 1,
    business: 6,
  });

  if (!hydrated) {
    return null;
  }

  const lastBusiness = state.page * state.business;
  const firstBusiness = lastBusiness - state.business;
  const actualBusiness = businessList.slice(firstBusiness, lastBusiness);

  const paginado = (pageNum) => {
    setState({
      ...state,
      page: pageNum,
    });
  };

  return (
    <div>
      <div>
        <SearchAndFilter />
      </div>

      <h1 className="text-center text-2xl mt-5 font-bold font-cool_p tracking-widest">
        Se han encontrado {businessList.length} resultados
      </h1>

      <>
        {actualBusiness.length &&
          actualBusiness.map((e) => {
            return (
              <CardResult
                key={e.id}
                id={e.id}
                name={e.attributes?.name}
                services={e.attributes?.services?.data}
                categories={e.attributes?.categories.data}
                image={
                  e.attributes?.BusinessPic.data?.attributes
                    ? e.attributes?.BusinessPic.data?.attributes.formats.large?.url
                    : "https://avalos.sv/wp-content/uploads/295-default-featured-image.png"
                }
                session={session}
              />
            );
          })}
      </>
      <div>
        <Paginado
          businessPerPage={state.business}
          allBusiness={businessList.length}
          paginado={paginado}
          currentPage={state.page}
        />
      </div>
    </div>
  );
}
