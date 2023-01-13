import React, { useEffect, useState } from "react";
import { getUsers } from "../../redux/actions/users/getUsers";
import { putUser } from "../../redux/actions/users/putUser";
import { useDispatch, useSelector } from "react-redux";


//slider control material ui
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const admin = () => {
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

      const handleChange = (e) => {
        let id = parseInt(e.target.id)
        // console.log(e.target.id);
        // console.log(id);
        // console.log(e.target.checked);
        dispatch(putUser(id, {blocked: e.target.checked}))
        setChange(!change)
      };

      // console.log("Cambios en el estado changes", changes);
      // console.log("estado", usersList);
   return(
      <div>
        <h1>Todos los culiaos blokiados</h1>
        {
            usersList?.map((e) =>(
            <div key={e.id}>
                <h1>{e.username}</h1>
                <h2>{e.email}</h2>
                <FormControlLabel
          control={
            <Switch 
            id={`${e.id}`} 
            defaultChecked={e.blocked} onChange={e => handleChange(e)} />
          }
          label={e.blocked? "Bloqueado" : "Desbloqueado"}
        />
            </div>
            ))
        }
    </div>
   )
};

export default admin