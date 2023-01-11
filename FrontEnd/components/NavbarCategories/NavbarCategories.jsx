import React from "react";

const NavbarCategories = () => {
  return (
    <>
      <div
      className="flex bg-white h-20 items-center justify-center text-blue-600 min-w-[100vw]"
      >
        <ul 
        className="flex justify-between w-4/5"
        >
          <li>Psicología</li>
          <li>Peluquería</li>
          <li>Barbería</li>
          <li>Manicuría</li>
          <li>Estética</li>
          <li>Cuidado para la piel</li>
          <li>Maquillaje</li>
          <li>Spa</li>
          <li>Más...</li>
        </ul>
      </div>
      ;
    </>
  );
};

export default NavbarCategories;
