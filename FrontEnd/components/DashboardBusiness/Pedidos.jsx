import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BookingsUnconfirmed } from "../../redux/actions/businessAcc/getDashboardData";

const Pedidos = (idBusiness) => {
  const dispatch = useDispatch();
  const { unconfirmedBookings } = useSelector((state) => state.businessacc);

  useEffect(() => {
    dispatch(BookingsUnconfirmed(2));
  }, [dispatch]);

  return (
    <div className="flex flex-col flex-wrap w-full h-fit items-center font-cool_p tracking-wide">
      {unconfirmedBookings.map((bookings) => {
        const fecha = bookings.attributes.dateinfo.split(" ")
        console.log(fecha)
        return (
          <div class="lg:flex shadow rounded-lg border border-gray-600 w-3/6 mb-8">
            <div class="bg-gray-700  lg:rounded-l-lg lg:w-3/12 py-4 block min-h-full shadow-inner">
              <div class="text-center tracking-wide">
                <div class="text-white font-bold text-4xl ">{fecha[1]}</div>
                <div class="text-white font-normal text-2xl">{fecha[2]}</div>
              </div>
            </div>
            <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
              <div class="flex flex-row lg:justify-start justify-center">
                <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                  <i class="far fa-clock"></i> {fecha[5]}
                </div>
                {/* <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                  Organiser : IHC
                </div> */}
              </div>
              <div class="font-semibold text-gray-800 text-2xl text-center lg:text-left px-2">
                {bookings.attributes.services?.data[0]?.attributes.name}
              </div>

              <div class="text-gray-800 font-medium text-sm pt-1 text-center lg:text-left px-2">
                <p>Cliente: {bookings.attributes.client.data.attributes.nameComplete}</p>
                <p>Telefono: {bookings.attributes.client.data.attributes.telephone}</p>
              </div>
              
            </div>
            <div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
              <button class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
                Going
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pedidos;
