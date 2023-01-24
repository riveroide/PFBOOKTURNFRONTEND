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
    const [value, setValue] = useState("usuarios")

    useEffect(() => {
      setHydrated(true)
        dispatch(getUsers())
    },[dispatch, change])

    if (!hydrated) {
        return null;
      }
       console.log(value)
        return(
          <div>
            <div>
            <NavBarAdmin setValue={setValue}/>
 
              <TableUsers usersList={usersList} change={change} setChange={setChange}/> 
    
            </div>
         
        </div>
       )
};

export default admin