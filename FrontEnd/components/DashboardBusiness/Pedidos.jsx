import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const Pedidos = () => {
  const { BusinessAcc } = useSelector((state) => state.business);
  const reservas = BusinessAcc.attributes.bookings.data.map((r)=>{return r.id});
  console.log(reservas)

  useEffect(()=>{
    
  })

  return (
    <div>
      {reservas.map((r) => (
        <div>

        </div>
      ))}
    </div>
  );
};

export default Pedidos;
