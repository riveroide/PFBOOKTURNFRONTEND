import React from "react";
import NabvarResults from "../../components/NavbarResults/NavbarResults";
import Results from "../../components/Results/Results";
import Footer from "../../components/FooterBussines/FooterBussines";

export default function index() {
  return (
    <div>
      <NabvarResults />
      <div>
        <Results />
      </div>
      <Footer />
    </div>
  );
}
