import React, { useState } from "react";
import Navbar from "components/Navbar/Navbar.jsx";

import AboutUsCard from "components/AboutUsCard/AboutUsCard";
import FooterBussines from "components/FooterBussines/FooterBussines.jsx";

const index = () => {
  const [data, setData] = useState({
    name: "",
    image: "",
    position: "",
  });
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="grid grid-cols-3 gap-4">
            <ol className="p-2 w-auto">
              <AboutUsCard />
            </ol>
            <ol className="p-2">
              <AboutUsCard />
            </ol>
            <ol className="p-2">
              <AboutUsCard />
            </ol>
            <ol className="p-2">
              <AboutUsCard />
            </ol>
            <ol className="p-2">
              <AboutUsCard />
            </ol>
            <ol className="p-2">
              <AboutUsCard />
            </ol>
          </div>
        </div>
      </div>
      <FooterBussines />
    </>
  );
};

export default index;
