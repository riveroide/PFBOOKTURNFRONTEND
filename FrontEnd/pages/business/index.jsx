import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import FooterBussines from "components/FooterBussines/FooterBussines.jsx";
import LandingInfoBussines from "../../components/HomeBussines/LandingInfoBussines/LandingInfoBussines"
import AOS from 'aos';
import 'aos/dist/aos.css';


const index = () => {
  useEffect(() => {
    AOS.init()

  })
  return (
    <>
      
      <Navbar  />
      <LandingInfoBussines />
      <FooterBussines />
      
    </>
  )
}

export default index
