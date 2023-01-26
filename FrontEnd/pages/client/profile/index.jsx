import React from 'react';
import { useSession, signOut, getSession } from 'next-auth/react';
import Link from "next/link"
//Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { getClient, getClientByEmail } from 'redux/actions/clients/getClients';
import { getFavourites } from 'redux/actions/clients/getFavourites'
import { getBooked } from 'redux/actions/clients/getBooked'
import { clear } from 'redux/actions/clients/clearClient'
import { display } from 'redux/actions/clients/displayOption'
import FavCard from '../../../components/Favourites/FavCard'
import BookedList from '../../../components/BookedList/BookedList'
import Loader from '../../../components/Loader/Loader'
import InfoClient from '../../../components/InfoClient/InfoClient'
import { useRouter } from 'next/router';

const Profile = () => {
  const dispatch = useDispatch()
  const {data: session} = useSession()
  
  const {clientId} = useSelector((state) => state.clients)
  const {displayOption} = useSelector((state) => state.clients)
  const {clientAcc} = useSelector((state) => state.clients)
  const {favouritesList} = useSelector((state) => state.clients)
  const {bookedList} = useSelector((state) => state.clients)
  console.log(clientId)
  
  const [open, setOpen] = useState(true)
  const [hydrated, setHydrated] = useState(false)
  const [loading, setLoading] = useState(false)
  const userEmail = session?.user.email
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    setHydrated(true)
    dispatch(getClientByEmail(userEmail))
    dispatch(getClient(clientAcc?.id))
    dispatch(getFavourites(clientAcc?.id))
    dispatch(getBooked(clientAcc?.id))
    dispatch(display(''))
    setLoading(false)
  },[userEmail, dispatch])

  if (!hydrated) {
    return null;
  }

  const handleClick = async (e) => {
    await dispatch(display(e.target.title))
  }

  const handlerClose = (e) => {
    e.preventDefault()
    signOut({
      callbackUrl: "/",
    });
    dispatch(clear());
  };
  
  const Menus = [
    // {
    //   title: "Dashboard",
    //   src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587813/Bookturn/src/Chart_fill_r59zsx.png",
    // },
    // {
    //   title: "Inbox",
    //   src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587827/Bookturn/src/Chat_uzro5p.png",
    // },
    {
      title: "Cuenta",
      src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587880/Bookturn/src/User_xuo8og.png",
    //   gap: true,
    },
    {
      title: "Tus turnos",
      src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587765/Bookturn/src/Calendar_mefkpn.png",
    },
    // { title: "Search", src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587862/Bookturn/src/Search_xukvg1.png" },
    {
      title: "Favoritos",
      src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587850/Bookturn/src/Folder_kkndkc.png",
      //   gap: true,
    },
    {
      title: "Salir",
      src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587874/Bookturn/src/Setting_qjfzlb.png",
    },
  ];
  
  if(!loading && clientId !== null){
    const {nameComplete} = clientId?.attributes
    const favourites = favouritesList?.map(e => e.attributes?.businesses.data)
    return (
      <div className="flex scroll-smooth min-h-screen">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-black h-screen p-5 pt-8 relative duration-500 `}
        >
          <img
            src="https://res.cloudinary.com/dquxxjngk/image/upload/v1673587887/Bookturn/src/control_xi6vpx.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <Link href={"/"}>
            <div className="flex gap-x-4 items-center">
              <img
                src="https://res.cloudinary.com/dquxxjngk/image/upload/v1673731534/Bookturn/src/1_ihckv8.png"
                className={`cursor-pointer duration-500 w-10 h-10 ${
                  open && " rotate-[360deg]"
                }`}
              />

              <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0 "
                }`}
              >
                {nameComplete}
              </h1>
            </div>
          </Link>
          <div>
          <ul className="pt-6 mt-2">
            {Menus.map((Menu, index) => (
              <div
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-0" : "mt-0"} ${
                  index === 0 && "bg-light-white"
                } `}
                title={Menu.title}
                onClick={(e) => handleClick(e)}
              >
                <img src={Menu.src} key={index} title={Menu.title}/>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                  title={Menu.title}
                  key={index}
                >
                  {Menu.title}
                </span>
              </div>
            ))}
          </ul>
          </div>
        </div>
        <div className={`${open && "hidden"} h-screen xl:flex p-7 lg:flex md:flex w-full justify-center`}>
          {displayOption === 'Dashboard' ? (
            <h1>DASHBOARD</h1>
          ):displayOption === 'Inbox' ? (
            <h1>TUS MENSAJES</h1>
          ):displayOption === 'Tus turnos' ?(
            <div>
              <h1 className='text-5xl text-gray-700 font-semibold'>HISTORIAL DE TURNOS</h1>
              {bookedList?.length === 0 ?(
                <div>
                  <h2 className='font-semibold text-3xl text-gray-700'>Aun no tiene ningun turno agendado</h2>
                  <Link href={'/results'}>
                    <h2 className='font-semibold text-2xl text-blue-600 hover:text-blue-500'>Ingresa aca para agendar tu primer turno!</h2>
                  </Link>
                </div>  
              ): (
                <div>
                  <BookedList props={bookedList}/>
                </div>
              )}
            </div>
            
          ):displayOption === 'Favoritos' ?(
            <div>
              <h1 className='text-5xl text-gray-700 font-semibold'>LISTA DE FAVORITOS</h1>
              { !favourites.length ?(
                <div>
                  <h2 className='font-semibold text-2xl tracking-wide'>Tu lista de favoritos aun esta vacia!!</h2>
                  <h2 className='font-semibold text-2xl tracking-wide'>Agrega tus locales de confianza para encontrarlos aqui</h2>
                </div>
              ): (
                <div>
                  {favourites?.length && favourites?.map(e => e.map(e => {
                    return(
                      <FavCard 
                        name={e.attributes?.name} 
                        address={e.attributes?.address} 
                        telephone={e.attributes?.telephone}
                        openhour={e.attributes?.openhour}
                        closehour={e.attributes?.closehour}
                        id={e.id}
                        key={e.id}
                      />
                    ) 
                  }))}
                </div>
              )}
              
            </div>
          ):displayOption === 'Salir' ?(
            <div className='flex flex-col items-center'>
              <h1 className='font-semibold text-4xl mb-4'>Seguro quiere cerrar sesion??</h1>
              
                <button className="overflow-hidden px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" 
                onClick={(e) =>handlerClose(e)}>Cerrar sesión</button>   
                 
                 {session.role === 3? 
                 <button className="m-[1.3rem] overflow-hidden px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" 
                 onClick={() =>{
                    router.push("/admin")
                   }}>Admin</button> : null}
              
            </div>
            
          ):(
           <InfoClient props={clientId}/> 
          )}
        </div>
      </div>
     )
  } else {
    return(
      <Loader/>
    )
  }
}

export default Profile