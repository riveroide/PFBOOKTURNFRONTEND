import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import SearchbarResults from "../SearchbarResults/SearchbarResults";
import {getClient, getClientByEmail} from "../../redux/actions/clients/getClients"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const NabvarResults = () => {
    
    const dispatch = useDispatch()
    const { data: session } = useSession()
    const {clientAcc: user, clientId: client} = useSelector((state) => state.clients)
    console.log(client, "soy client")
    console.log(user, "soy user")
    console.log(session, "soy session");

   useEffect(() => {
    dispatch(getClientByEmail(session?.user.email))
    dispatch(getClient(user.id))
   }, [])


  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-blue-700">
      <div class="container flex items-center justify-between mx-auto">
        <Link href="/" class="flex items-center">
          <span class="self-center text-4xl font-semibold font-cool_p whitespace-nowrap dark:text-white tracking-wider">
            Bookturn
          </span>
        </Link>
        <SearchbarResults/>
        <div class="flex items-center md:order-2 text-center">
          {session ? (
            <Link href={`/client/profile`}>
              <img
                class="w-10 h-10 rounded-full"
                src={client.attributes.profilePic?.data ? `${client.attributes.profilePic.data}` : session.user.image ? `${session.user.image}` : "https://icon-library.com/images/generic-profile-icon/generic-profile-icon-23.jpg"} 
                alt="user photo"
              />
            </Link>
          ) : (
            <div>
                <Link href="/client/login">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                Acceder
              </button>{" "}
                  </Link>
                  <Link href="/client/login/createform">
              <button
                type="button"
                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
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
