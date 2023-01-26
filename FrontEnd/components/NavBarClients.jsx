import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { signIn, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";



export default function NavBarClients() {
  const { data: session } = useSession()
  const {clientAcc: user, clientId: client} = useSelector((state) => state.clients)
  console.log(client)

  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="flex justify-end mr-40 w-full">
        <Link href="/business">
          <p className="text-blue-500">Eres empresa?</p>
        </Link>
      </div>
      <div className='flex flex-row justify-between items-center text-white min-w-full h-16 pr-4'>
        <div className='ml-16 text-4xl'>bookturn</div>

        {session ? (
            <Link href={`/client/profile`}>
              <img
                class="w-10 h-10 rounded-full mr-28"
                src={client.attributes.profilePic?.data ? `${client.attributes.profilePic.data[0].attributes.url}` : session.user.image ? `${session.user.image}` : "https://icon-library.com/images/generic-profile-icon/generic-profile-icon-23.jpg"} 
                alt="user photo"
              />
            </Link>
          ) : (

            <div>
                
              <button
                type="button"
                className="text-white  focus:ring-4  font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                onClick={() => signIn()}
                >
                Acceder
              </button>{" "}
                  
                  <Link href="/client/login/createform">
              <button
                type="button"
                class="py-2.5 md:px-5 px-2 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                >
                Registrarse
              </button>
                  </Link>
            </div>
          )}
      </div>
    </>
  );
}
