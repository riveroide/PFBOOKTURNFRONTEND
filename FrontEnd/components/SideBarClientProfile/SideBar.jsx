import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { display } from "redux/actions/clients/displayOption";
import styles from "./SideBar.module.css"
import imgProfile from '../../pages/ImgProvisoria/Default_pfp.png'

const SideBar = (props) => {
    const dispatch = useDispatch();
    
    const handleOption = (e) => {
      e.preventDefault(e)
      dispatch(display(e.target.title))
      console.log(props.client)  
    }

    return (
        <div className={styles.sidebar}>
        <div className={styles.usuario}>
          <img src={imgProfile.src} className={styles.profilePic} alt="Not Found" />
          <p>{props.name} {props.lastname}</p>
        </div>
        <ul className={styles.ul}>
          <li className={styles.options}>
            <a onClick={(e) => handleOption(e)}>
              <h4 title="edit">editar informacion</h4>
            </a>
            <hr/>
          </li>
          <li className={styles.options}>
            <a onClick={(e) => handleOption(e)}>
              <h4 title="pay">metodo de pago</h4>
            </a>
            <hr/>
          </li>
          <li className={styles.options}>
            <a onClick={(e) => handleOption(e)}>
              <h4 title="history">historial</h4>
            </a>
            <hr/>
          </li>
          <li className={styles.options}>
            <a onClick={(e) => handleOption(e)}>
              <h4 title="favs">favoritos</h4>
            </a>
            <hr/>
          </li>
          <li className={styles.options}>
            <a onClick={(e) => handleOption(e)}>
              <h4 title="options">opciones</h4>
            </a>
            <hr/>
          </li>
          <li className={styles.options}>
            <a onClick={(e) => handleOption(e)}>
              <h4 title="delete">eliminar cuenta</h4>
            </a>
            <hr />
          </li>
        </ul>
      </div>
    )
}

export default SideBar