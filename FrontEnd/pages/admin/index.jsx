import React, { useEffect, useState } from "react";
import { getUsers } from "../../redux/actions/users/getUsers";
import { useDispatch, useSelector } from "react-redux";
import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin";
import TableUsers from "../../components/TableUsers/TableUsers";

import { getSession } from 'next-auth/react'

const admin = () => {
  const session = getSession()
  const dispatch = useDispatch()

    const {usersList} = useSelector(state => state.users)
    const [hydrated, setHydrated] = useState(false)
    const [change, setChange] = useState(false)

    useEffect(() => {
      setHydrated(true)
        dispatch(getUsers())
    },[dispatch, change])

    if (!hydrated) {
        return null;
      }

        return(
          <div>
            <div>
            <NavBarAdmin/>
    
            <TableUsers usersList={usersList} change={change} setChange={setChange}/>
    
            </div>
         
        </div>
       )
};

export async function getServerSideProps(context){
  //si no hay sesion iniciada redirige al login
  const session = await getSession(context)
  
    // if(!session) {
    //   return {
    //     redirect: {
    //       destination: "/client/login",
    //       permanent: false
    //     },
    //   }
    // }
    //si el usuario no tiene el mail del admin redirige al inicio
    if(session?.user.role !== "Admin")  {
      return {
        redirect: {
          destination: "/",
          permanent: false
        },
      }
    }
  
    return {
      props: { session }
    }
  };




export default admin