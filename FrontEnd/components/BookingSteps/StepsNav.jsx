import React from "react";

const StepsNav = ({ stepnum }) => {
  const primero = "Elejí tus servicios";
  const segundo = "Elejí día y horario";
  const tercero = "Confirmá tus informaciones"
  return (
    <div className="px-40 py-8 justify-center w-screen">
      <h2 className="sr-only">Steps</h2>

      <div>
        <p className="flex justify-center text-xl font-medium text-gray-500 font-cool_g">
          {stepnum === 1 ? ({stepnum}/3,primero): stepnum === 2 ? ({stepnum}/3,segundo) : ({stepnum}/3,tercero)}
        </p>

        <div className="h-2 mt-4 overflow-hidden rounded-full bg-gray-200">
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
