// import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import stylesHome from "../styles/HomeClient.module.css";
import NavBarClients from "../components/NavBarClients";
import AboutHomeClient from "../components/AboutHomeClient";
import DetailsClients from "../components/DetailsClients";
import FooterHomeClient from "../components/FooterHomeClient";

//import video from '../videos/videopeluqueria.mp4'

const Home/*: NextPage*/ = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page Bookturn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={stylesHome.home_client_container}>
        <NavBarClients />

        <div className={stylesHome.video_container}>
          <video autoPlay muted loop className="video-home">
            <source src="/videopeluqueria.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={stylesHome.input_container}>
          <p className={stylesHome.titulo_input}>Reserve su turno</p>
          <p className={stylesHome.descripcion_input}>
            busque todo tipo de rubros
          </p>
          <div className={stylesHome.input_buscar}>
            <input></input>
            <p>buscar</p>
          </div>
        </div>
        <div className={stylesHome.list} >
          <ul>
            <li> Peluqueria</li>
            <li>Barberia</li>
            <li>Manicuría</li>
            <li>Estética</li>
            <li>Cuidados para piel</li>
            <li>Maquillaje</li>
            <li>Spa</li>
            <li>Mas...</li>
          </ul>
        </div>
        <AboutHomeClient />
        <DetailsClients />
      </div>
      <FooterHomeClient />
    </div>
  );
};

export default Home;
