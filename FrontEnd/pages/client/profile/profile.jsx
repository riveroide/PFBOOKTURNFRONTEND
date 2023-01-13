import React from 'react';
//Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { getClient, getClientByEmail } from 'redux/actions/clients/getClients';
import { getFavourites } from 'redux/actions/clients/getFavourites'
import styles from '../../../styles/profile.module.css';
import SideBar from '../../../components/SideBarClientProfile/SideBar';
import NavBar from '../../../components/NavBarClientProfile/NavBar';
// ../../../components/SideBarClientProfile/SideBar
const Profile = () => {
  const dispatch = useDispatch()
  const {clientId} = useSelector((state) => state.clients)
  const {displayOption} = useSelector((state) => state.clients)
  const {clientAcc} = useSelector((state) => state.clients)
  const {favouritesList} = useSelector((state) => state.clients)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
    async function fetchClientEmail(){
      await dispatch(getClientByEmail('tomasgp30@gmail.com'))
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
  },[])

  if (!hydrated) {
    return null;
  }
  console.log(clientId)
  console.log(favouritesList)
  if(clientId){
    const {nameComplete, bookings} = clientId.attributes
    return (
    <div>
      <NavBar/>
      <SideBar 
       name={nameComplete}
      />
      <div className={styles.content}>
        {displayOption.length === 0 ? (
          <div>
            <h1>Bienvenid@ a tu perfil</h1>
          </div>
        ) : displayOption === 'edit' ?(
          <div>
          <h1>Edicion pulenta</h1>
          <h4>USER</h4>
          <h4>clave</h4>
          </div>
        ) : displayOption === 'pay' ?(
          <div>
          <h1>Editar info de pago</h1>
          <h4>datos del banco 🤑</h4>
          </div>
        ): displayOption === 'history' ?(
        <div>
          <h1>Bienvenid@ a tu historial</h1>
          <div>
            <ul className={styles.ul}>
              <li>
                <h4>Turno de ejemplo</h4>
                <span>Status</span>
                <span>12/12/22</span>
              </li>
              <li>
                <h4>Turno de ejemplo</h4>
                <span>Status</span>
                <span>12/12/22</span>
              </li>
              <li>
                <h4>Turno de ejemplo</h4>
                <span>Status</span>
                <span>12/12/22</span>
              </li>
            </ul>
            <h3>No se registran mas turnos a la fecha</h3>
            <hr className={styles.hr}/>
          </div>
        </div>
        ): displayOption === 'favs' ?(
          <div>
          <h1>Favoritos</h1>
          </div>
        ): displayOption === 'options' ?(
          <div>
          <h1>Opciones</h1>
          </div>
        ): displayOption === 'delete' ?(
          <div>
          <h1>Borrar cuenta</h1>
          </div>
        ): (
          <div>
          <h1>OTRA COSA</h1>
          </div>
        )}
      </div>
    </div>
  )
}
else {
  return(
    <h2>LOADING</h2>
  )
}
}

export default Profile