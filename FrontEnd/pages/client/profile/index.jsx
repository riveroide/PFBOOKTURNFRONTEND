import React from 'react';
import { useSession } from 'next-auth/react';
//Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { getClient, getClientByEmail } from 'redux/actions/clients/getClients';
import { getFavourites } from 'redux/actions/clients/getFavourites'
import styles from '../../../styles/profile.module.css';
import SideBar from '../../../components/SideBarClientProfile/SideBar';
import NavBar from '../../../components/NavBarClientProfile/NavBar';
import FavCard from '../../../components/Favourites/FavCard'
import Loader from '../../../components/Loader/Loader'

const Profile = () => {
  const dispatch = useDispatch()
  const {data: session} = useSession()
  const {clientId} = useSelector((state) => state.clients)
  const {displayOption} = useSelector((state) => state.clients)
  const {clientAcc} = useSelector((state) => state.clients)
  const {favouritesList} = useSelector((state) => state.clients)
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
      setLoading(false)
    }
    } catch (error) {
      console.log(error.message)
    } 
  },[session, dispatch])

  if (!hydrated) {
    return null;
  }

  if(!loading && clientId){
    const {nameComplete, bookings} = clientId.attributes
    const favourites = favouritesList.attributes.businesses.data
    return (
    <div>
      {/* <NavBar/> */}
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
    <Loader/>
  )
}
}

export default Profile