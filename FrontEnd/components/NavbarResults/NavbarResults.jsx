import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import SearchbarResults from "../SearchbarResults/SearchbarResults";
import {getClient, getClientByEmail} from "../../redux/actions/clients/getClients"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "next-auth/react";

export const NabvarResults = () => {
    
    const dispatch = useDispatch()
    const { data: session } = useSession()
    const {clientAcc: user, clientId: client} = useSelector((state) => state.clients)
    console.log(client, "soy client")
    console.log(user, "soy user")
    console.log(session, "soy session");

   useEffect(() => {
    dispatch(getClientByEmail(session?.user.email))
    dispatch(getClient(user?.id))
   }, [])


  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-blue-700">
      <div class="container flex items-center md:justify-between justify-around mx-auto">
        <Link href="/" class="flex items-center">
          <span class="self-center text-xl md:text-4xl font-semibold font-cool_p whitespace-nowrap dark:text-white tracking-wider">


            Bookturn
          </span>
        </Link>
        <SearchbarResults/>
        <div class="flex items-center md:order-2 text-center">
          {session ? (
            <Link href={`/client/profile`}>
              <button 
              type="button"
              className="text-white  focus:ring-4  font-medium rounded-lg text-lg px-5 py-2.5 mr-10 mb-2 focus:outline-none">
                Ir al perfil
              </button>
            </Link>
          ) : (

            <div>
                
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => signIn()}
                >
                Acceder
              </button>{" "}
                  
                  <Link href="/client/login/createform">
              <button
                type="button"
                class="py-2.5 md:px-5 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                >
                Registrarse
              </button>
                  </Link>
            </div>
          )}
          {/* <!-- Dropdown menu --> */}
        </div>
      </div>
    </nav>
  );
};

export default NabvarResults;
