import React from "react";

const StepsNav = ({ stepnum }) => {
  const primero = "Elige tu servicio";
  const segundo = "Elige día y horario";
  const tercero = "Confirma tu información"
  return (
    <div className="md:px-40 px-20 py-8 justify-center md:w-screen w-full">
      <h2 className="sr-only">Steps</h2>

      <div className="w-full">
        <p className="flex justify-center text-xl font-medium text-gray-500 font-cool_g">
          {stepnum === 1 ? ({stepnum}/3,primero): stepnum === 2 ? ({stepnum}/3,segundo) : ({stepnum}/3,tercero)}
        </p>

        <div className="h-2 mt-4 overflow-hidden rounded-full bg-gray-200 w-full">
          {stepnum === 1 ? (
            <div className="h-2 w-0 rounded-full bg-blue-500" />
          ) : stepnum === 2 ? (
            <div className="h-2 w-1/2 rounded-full bg-blue-500" />
          ) : (
            <div className="h-2 w-full rounded-full bg-blue-500" />
          )}
          ,
        </div>
      </div>
    </div>
  );
};

export default StepsNav;
