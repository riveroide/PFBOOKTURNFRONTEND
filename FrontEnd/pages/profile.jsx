import React from 'react';
//Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { getClient } from 'redux/actions/clients/getClients';
import styles from '../styles/profile.module.css';
import SideBar from '../components/SideBarClientProfile/SideBar';
import NavBar from '../components/NavBarClientProfile/NavBar';

const profile = () => {
  const dispatch = useDispatch()
  const {clientId} = useSelector((state) => state.clients)
  const {displayOption} = useSelector((state) => state.clients)

  useEffect(() => {
     dispatch(getClient(1))
  },[dispatch])

  return (
    <div>
      <NavBar/>
      <SideBar client={clientId} />
      <div className={styles.content}>
        {displayOption.length === 0 ? (
          <div>
            <h1>Bienvenid@ a tu perfil</h1>
          </div>
        ) : displayOption === 'edit' ?(
          <div>
          <h1>Edicion pulenta</h1>
          <h4>NOMBRE APELLIDO</h4>
          <h4>email</h4>
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

export default profile