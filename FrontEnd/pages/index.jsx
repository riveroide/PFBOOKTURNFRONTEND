// import type { NextPage } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../components/SearchBar/SearchBar";
import NavBarClients from "../components/NavBarClients";
import AboutHomeClient from "../components/AboutHomeClient";
import DetailsClients from "../components/DetailsClients";
import FooterHomeClient from "../components/FooterHomeClient";
import AOS from "aos";
import "aos/dist/aos.css";

//import video from '../videos/videopeluqueria.mp4'

const Home /*: NextPage*/ = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page Bookturn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='font-cool_g flex flex-col items-center'>
        <NavBarClients />

        <div className='absolute -z-10 w-full h-full overflow-y-hidden top-0 left-0 '>
          <video autoPlay muted loop controls={false} className="relative w-full h-full object-cover pointer-events-none">
            <source src="/videopeluqueria.mp4" type="video/mp4" />
          </video>
        </div>

        <div data-aos="fade-up" className='flex flex-col justify-center items-center mt-20 h-80 text-white'>
          <p className='text-6xl'>Reserve su turno</p>
          <p className='text-2xl font-cool_p mt-2 mb-2'>
            busque todo tipo de rubros
          </p>
          <div className=''>
            <SearchBar />
          </div>
          <div>
            <Link href="/results">
              <button>Ver todos los negocios</button>
            </Link>
          </div>
        </div>
        <AboutHomeClient />
        <DetailsClients />
      </div>
      <FooterHomeClient />
    </div>
  );
};

export default Home;
