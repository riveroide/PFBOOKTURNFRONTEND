
import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import CardResult from '../../components/CardResult/CardResult'
import Results from '../../components/Results/Results'
import Footer from "../../components/FooterBussines/FooterBussines"

export default function index() {
  return (
    <div>

           <Navbar/>
          <div>
            <Results />
          </div>
          <Footer/>
    </div>
  );
}
