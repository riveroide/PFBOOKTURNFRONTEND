import React, { useEffect, useState } from "react";
import { getUsers } from "../../redux/actions/users/getUsers";
import { useDispatch, useSelector } from "react-redux";
import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin";
import TableUsers from "../../components/TableUsers/TableUsers";


const admin = () => {
  var sesion = true
  
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
             
   if(sesion){
    return(
      <div>
        <div>
        <NavBarAdmin/>

        <TableUsers usersList={usersList} change={change} setChange={setChange}/>

        </div>
     
    </div>
   )
   }else{
    return(
      <h1>Pagina no disponible</h1>
    )
   }
};

export default admin