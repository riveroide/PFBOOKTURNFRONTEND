import React, { useEffect } from 'react'
import NabvarResults from "../../components/NavbarResults/NavbarResults"
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
      <NabvarResults/>
      <LandingInfoBussines />
      <FooterBussines />
      
    </>
  )
}

export default index
