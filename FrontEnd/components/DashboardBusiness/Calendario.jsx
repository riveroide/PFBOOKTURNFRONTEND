import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { BookingsConfirmed } from "../../redux/actions/businessAcc/getDashboardData";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const Calendario = () => {
  const { confirmedBookings } = useSelector((state) => state.businessacc);
  const { IdSession } = useSelector((state) => state.businessacc);
  const dispatch = useDispatch();
  const [date, setDate] = useState(
    format(new Date(), "EEEE d MMMM R", { locale: es })
  );

  useEffect(() => {
    dispatch(BookingsConfirmed(IdSession));
  }, [dispatch]);

  return (
    <div className="flex flex-col flex-wrap w-full h-fit items-center font-cool_p tracking-wide">
      <div class="w-full max-w-lg flex justify-center ">
        <h1 className="text-5xl text-gray-700 font-semibold">CALENDARIO</h1>
      </div>
      <ReactCalendar
        className="REACT-CALENDAR my-14"
        onClickDay={(date) =>
          setDate(format(date, "EEEE d MMMM R", { locale: es }))
        }
        view="month"
        locale="es-ES"
      />
      {confirmedBookings &&
        confirmedBookings?.map((bookings) => {
          const fecha = bookings.attributes.dateinfo?.split(" ");
          const fechaCalendar = date?.split(" ");
          if (fecha[2] == fechaCalendar[2] && fecha[1] == fechaCalendar[1]) {
            return (
              <div
                key={bookings?.id}
                class="md:flex shadow rounded-xl border-solid border-2 border-gray-700 w-full md:w-4/6 lg:w-3/6 mb-8"
              >
                <div class="bg-gray-700 rounded-lg  md:w-3/12 justify-center items-center flex min-h-full shadow-inner">
                  <div class="text-center tracking-wide rounded-lg">
                    <div class="text-white font-bold text-5xl ">{fecha[1]}</div>
                    <div class="text-white font-normal text-2xl capitalize">
                      {fecha[2]}
                    </div>
                  </div>
                </div>
                <div class="w-full  md:w-11/12 xl:w-full px-1  py-3 md:px-2 md:py-2 tracking-wide">
                  <div class="flex flex-row md:justify-start justify-center">
                    <div class="text-gray-900 font-medium text-lg text-center md:text-left px-2">
                      <i class="far fa-clock"></i>Hora de reserva {fecha[4]}
                    </div>
                    {/* <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                  Organiser : IHC
                </div> */}
                  </div>
                  <div class="font-semibold text-gray-800 text-3xl text-center md:text-left px-2">
                    {bookings.attributes?.services.data[0]?.attributes.name}
                  </div>

                  <div class="text-lg pt-1 text-center md:text-left px-2">
                    <div className="flex gap-2 w-full justify-center md:justify-start">
                      <p className="text-gray-900">Cliente:</p>
                      <p className="text-gray-800">
                        {bookings.attributes.client.data?.attributes.nameComplete}
                      </p>
                    </div>
                    <div className="flex gap-2 w-full justify-center md:justify-start">
                      <p className="text-gray-900">Telefono:</p>
                      <p className="text-gray-800">
                        {bookings.attributes.client.data?.attributes.telephone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Calendario;
