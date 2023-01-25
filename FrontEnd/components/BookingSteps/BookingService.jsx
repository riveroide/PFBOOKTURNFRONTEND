import React, { useEffect, useState } from "react";
import swal from 'sweetalert2'
import { useRouter } from "next/router";
import StepsNav from "./StepsNav";
import StepsContents from "./StepsContents";
import { useDispatch, useSelector } from "react-redux";
import { postBooking } from "../../redux/actions/Bookings/postBooking";
import { postEmailNotif } from "../../redux/actions/emailNotifications/postEmail"
import { getSession, useSession } from "next-auth/react";
import { getClientEmail } from "../../redux/actions/businessAcc/getDashboardData";

const BookingService = () => {
  const { clientAcc: client } = useSelector((state) => state.clients);
  const { businessId: business } = useSelector((state) => state.business);
  const { data: session } = useSession();
  const [stepnum, setstepnum] = useState(1);
  const [bookingPost, setbookingPost] = useState({
    businesses: "",
    client: "",
    services: "",
    dateinfo: "",
    emailClient:""
  });
  
  

  const router = useRouter();
  const dispatch = useDispatch();


  
  console.log(session?.user?.email, "soy session")
  console.log(bookingPost, "soy el pedido");
  console.log(client, "soy client")

  async function handleSubmit() {
    dispatch(postBooking({
      ...bookingPost,
    emailClient: session?.user.email}));
    dispatch(postEmailNotif({
      subject:'Pedido de reserva',
      email:business?.data.attributes.email,
      message:`Recibiste una nueva reserva, por favor ingresá a tu dashboard de Bookturn para revisarla`
    }))
    dispatch(postEmailNotif({
      subject:'Pedido de reserva',
      email:session?.user.email,
      message:`Tu reserva fue hecha satisfactoriamente. En breve, la empresa a la cual realizaste esta reserva va a confirmar (o no) tu solcitud`
    }))

    swal.fire({
      title:'Listo!',
      text: 'Su turno se creó correctamente',
      icon: 'success',
      timer: 3000,
      stopKeydownPropagation: true,
    });
    router.push("/client/profile")
  }

  return (
    <div key={business?.id}>
      <div>
        <StepsNav stepnum={stepnum} />
      </div>
      <div>
        <StepsContents
          stepnum={stepnum}
          setbookingPost={setbookingPost}
          bookingPost={bookingPost}
       
        />
      </div>
      <div className="flex justify-around">
        <button
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-cool_p text-2xl"
          onClick={() => {
            if (stepnum !== 1) {
              setstepnum(stepnum - 1);
            } else {
              null;
            }
          }}
        >
          Anterior
        </button>
        <button
          className={`px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-cool_p text-2xl ${bookingPost.services ? "hover:bg-blue-500" : "cursor-not-allowed"}`}
          onClick={() => {
            if (stepnum < 3) {
              setstepnum(stepnum + 1);
              setbookingPost({
                ...bookingPost,
                client: client?.id,
                businesses: business?.data.id,
              });
            } else {
              handleSubmit();
            }
          }}
          disabled={bookingPost.services ? false : true} >
          Proximo
        </button>
      </div>
    </div>
  );
};

export default BookingService;
