import React, { useEffect } from 'react'

import FooterBussines from "components/FooterBussines/FooterBussines.jsx";
import LandingInfoBussines from "../../components/HomeBussines/LandingInfoBussines/LandingInfoBussines"
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar2 from 'components/Navbar/Navbar';


const index = () => {
  useEffect(() => {
    AOS.init()

  })
  return (
    <>
      <NavBar2/>
      <LandingInfoBussines />
      <FooterBussines />
      
    </>
  )
}

export default index
