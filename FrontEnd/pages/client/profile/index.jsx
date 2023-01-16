import React from 'react';
import { useSession } from 'next-auth/react';
import Link from "next/link"
//Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { getClient, getClientByEmail } from 'redux/actions/clients/getClients';
import { getFavourites } from 'redux/actions/clients/getFavourites'
import { display } from 'redux/actions/clients/displayOption'
import FavCard from '../../../components/Favourites/FavCard'
import Loader from '../../../components/Loader/Loader'

const Profile = () => {
  const dispatch = useDispatch()
  const {data: session} = useSession()
  
  const {clientId} = useSelector((state) => state.clients)
  const {displayOption} = useSelector((state) => state.clients)
  const {clientAcc} = useSelector((state) => state.clients)
  const {favouritesList} = useSelector((state) => state.clients)
  
  const [open, setOpen] = useState(true)
  const [hydrated, setHydrated] = useState(false)
  const [loading, setLoading] = useState(false)
  const userEmail = session?.user.email

  useEffect(() => {
    setLoading(true)
    try {
      if(userEmail){  
      setHydrated(true)
      async function fetchClientEmail(){
        await dispatch(getClientByEmail(userEmail))
      }
      fetchClientEmail()
      async function fetchClient(){
        await dispatch(getClient(clientAcc))
      }
      fetchClient()
      async function fetchFavList(){
        await dispatch(getFavourites(clientId.attributes.favourite_lists.data[0].id))
      }
      fetchFavList()
      dispatch(display(''))
      setLoading(false)
    }
    } catch (error) {
      console.log(error.message)
    } 
  },[session, dispatch])

  if (!hydrated) {
    return null;
  }

  const handleClick = async (e) => {
    await dispatch(display(e.target.title))
  }
  const Menus = [
    {
      title: "Dashboard",
      src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587813/Bookturn/src/Chart_fill_r59zsx.png",
    },
    {
      title: "Inbox",
      src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587827/Bookturn/src/Chat_uzro5p.png",
    },
    // {
    //   title: "Accounts",
    //   src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587880/Bookturn/src/User_xuo8og.png",
    // //   gap: true,
    // },
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
      title: "Settings",
      src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587874/Bookturn/src/Setting_qjfzlb.png",
    },
  ];

  if(!loading && clientId){
    const {nameComplete, bookings} = clientId.attributes
    const favourites = favouritesList.attributes.businesses.data
    return (
      <div className="flex scroll-smooth">
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
          <Link href={"/business"}>
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
                <img src={Menu.src} title={Menu.title}/>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                  title={Menu.title}
                >
                  {Menu.title}
                </span>
              </div>
            ))}
          </ul>
          </div>
        </div>
        <div className={`${open && "hidden"} h-screen xl:flex p-7 lg:flex md:flex w-full`}>
          {displayOption === 'Dashboard' ? (
            <h1>DASHBOARD</h1>
          ):displayOption === 'Inbox' ? (
            <h1>TUS MENSAJES</h1>
          ):displayOption === 'Tus turnos' ?(
            <h1>ACA TU HISTORIAL DE TURNOS</h1>
          ):displayOption === 'Favoritos' ?(
            <div>
              {favourites.length && favourites.map(e => {
              return(
                <FavCard 
                  name={e.attributes.name} 
                  address={e.attributes.address} 
                  telephone={e.attributes.telephone} 
                  id={e.id}
                />
              )
            })}
            </div>
          ):displayOption === 'Settings' ?(
            <h1>ACA SETTINGS DE USUARIO</h1>
          ):(
            <h1>BIENVENIDO A TU PERFIL</h1>
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