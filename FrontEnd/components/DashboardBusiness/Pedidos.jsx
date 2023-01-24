import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BookingsUnconfirmed } from "../../redux/actions/businessAcc/getDashboardData";
import { putBooking } from "../../redux/actions/Bookings/putBooking";
import { deleteBooking } from "../../redux/actions/Bookings/deleteBooking";
import { useState } from "react";
import { postEmailNotif } from "../../redux/actions/emailNotifications/postEmail";


const Pedidos = (idBusiness) => {
  const dispatch = useDispatch();
  const { unconfirmedBookings } = useSelector((state) => state.businessacc);
  const { BusinessIdSession } = useSelector((state) => state.business);
  const [reload, setReload] = useState(false);
  const put = async () => {
    await dispatch(putBooking(e.target.id, { confirmed: true }));
  };


  const handleClickConfirm = async (e) => {
    try {
      
      await dispatch(putBooking(e.target.id, { confirmed: true }));
    } catch (error) {
      console.log(error.message);
    }
    setReload(!reload);
    dispatch(
      postEmailNotif({
        subject: "Pedido de reserva",
        email: e.target.name,
        message: `Tu reserva fue hecha satisfactoriamente. En breve, la empresa a la cual realizaste esta reserva va a confirmar (o no) tu solcitud`,
      })
    );
    
  };

  const handleClickDelete = async (e) => {
    console.log(e.target.id);
    try {
      await dispatch(deleteBooking(e.target.id));
    } catch (error) {
      console.log(error.message);
    }
    setReload(!reload);
    dispatch(
      postEmailNotif({
        subject: "Pedido de reserva",
        email: e.target.name,
        message: `Tu reserva fue hecha satisfactoriamente. En breve, la empresa a la cual realizaste esta reserva va a confirmar (o no) tu solcitud`,
      })
    );
  };

  useEffect(() => {
    dispatch(BookingsUnconfirmed(BusinessIdSession));
  }, [dispatch, reload]);
  return (
    <div className="flex flex-col flex-wrap w-full h-fit items-center font-cool_p tracking-wide">
      <div class="w-full max-w-lg flex justify-center mb-6">
        <h1 className="text-5xl text-gray-700 font-semibold">
          RESERVAS POR CONFIRMAR
        </h1>
      </div>
      {unconfirmedBookings &&
        unconfirmedBookings?.map((bookings) => {
          const fecha = bookings.attributes.dateinfo?.split(" ");
          return (
            <div
              key={bookings.id}
              class="md:flex shadow rounded-xl border-solid border-2 border-gray-700 w-full md:w-4/6 lg:w-3/6 mb-8"
            >
              <div class="bg-gray-700 rounded-lg  md:w-3/12 justify-center items-center flex min-h-full shadow-inner">
                <div class="text-center tracking-wide rounded-lg">
                  <div class="text-white font-bold text-4xl ">{fecha[1]}</div>
                  <div class="text-white font-normal text-2xl capitalize">
                    {fecha[2]}
                  </div>
                </div>
              </div>
              <div class="w-full  md:w-11/12 xl:w-full px-1 bg-white py-3 md:px-2 md:py-2 tracking-wide">
                <div class="flex flex-row md:justify-start justify-center">
                  <div class="text-gray-700 font-medium text-sm text-center md:text-left px-2">
                    <i class="far fa-clock"></i> {fecha[5]}
                  </div>
                  {/* <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                  Organiser : IHC
                </div> */}
                </div>
                <div class="font-semibold text-gray-800 text-2xl text-center md:text-left px-2">
                  {bookings.attributes.services?.data[0]?.attributes.name}
                </div>

                <div class="text-gray-800 font-medium text-sm pt-1 text-center md:text-left px-2">
                  <p>
                    Cliente:{" "}
                    {bookings.attributes.client.data.attributes.nameComplete}
                  </p>
                  <p>
                    Telefono:{" "}
                    {bookings.attributes.client.data.attributes.telephone}
                  </p>
                </div>
              </div>
              <div class="flex flex-row items-center w-full md:h-2/2 md:w-1/3 md:justify-end justify-center px-2 py-1 lg:px-0 ">
                <button
                  name={bookings.attributes.emailClient}
                  id={bookings.id}
                  onClick={(e) => {
                    handleClickConfirm(e);
                  }}
                  class="h-10 lg:h-3/5 tracking-wider text-gray-600 bg-gray-200 px-2 text-base rounded leading-none mx-2 font-semibold hover:bg-green-500 hover:text-white"
                >
                  Confirmar Reserva
                </button>
                <button
                  name={bookings.attributes.emailClient}
                  id={bookings.id}
                  onClick={(e) => {
                    handleClickDelete(e);
                  }}
                  class="h-10 lg:h-3/5 tracking-wider text-gray-600 bg-gray-200 px-2 text-base rounded leading-none mx-2 font-semibold hover:bg-red-500 hover:text-white"
                >
                  Cancelar Reserva
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Pedidos;
