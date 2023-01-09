
import React from 'react'
import Navbar2 from "../../components/Navbar/Navbar2"
import CardResult from '../../components/CardResult/CardResult'
import Results from '../../components/Results/Results'
import Footer from "../../components/FooterBussines/FooterBussines"

export default function index() {
  return (
    <div>

           <Navbar2/>
          <div>
            <Results />
          </div>
          <Footer/>
    </div>
  );
}
