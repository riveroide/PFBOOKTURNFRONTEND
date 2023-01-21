import { React, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { getBusinessIdByEmail, getBusinessData } from "redux/actions/business/getBusiness.js";
import PutDataForm from "../../../components/DashboardBusiness/PutDataForm";
import Services from "../../../components/DashboardBusiness/Services";
import Pedidos from "../../../components/DashboardBusiness/Pedidos";
import { getSession } from 'next-auth/react'
const dashboard = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState(1);
  const { BusinessAcc } = useSelector((state) => state.business);
  const { BusinessIdSession } = useSelector((state) => state.business);
  const [hydrated, setHydrated] = useState(false);
  const dispatch = useDispatch();
  const userEmail=session?.user.email
  const AccData = BusinessAcc.attributes;
  
  

  useEffect(() => {
    try {
      setHydrated(true);
      // async function fetchBusinessEmail(){
      //   await dispatch(getBusinessIdByEmail(userEmail))
      // } 
      // fetchBusinessEmail()
      async function fetchData(){
        await dispatch(getBusinessData(2))

      }
      fetchData()
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  const handlerClick=(e,pagina)=>{
    e.preventDefault()
    setPage(pagina)
  }

  const Menus = [
    {
      title: "Perfiles",
      src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587880/Bookturn/src/User_xuo8og.png",
    //   gap: true,
      page:1
    },
    {
      title: "Servicios",
      src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587813/Bookturn/src/Chart_fill_r59zsx.png",
      page:2
    },
    // {
    //   title: "Inbox",
    //   src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587827/Bookturn/src/Chat_uzro5p.png",
    // },
    {
      title: "Reservas",
      src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587765/Bookturn/src/Calendar_mefkpn.png",
      page:3
    },
    // { title: "Search", src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587862/Bookturn/src/Search_xukvg1.png" },
    // {
    //   title: "Files ",
    //   src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587850/Bookturn/src/Folder_kkndkc.png",
    //   //   gap: true,
    // },
    // {
    //   title: "Setting",
    //   src: "https://res.cloudinary.com/dquxxjngk/image/upload/v1673587874/Bookturn/src/Setting_qjfzlb.png",
    // },
  ];

  if (hydrated && AccData) {
    return (
      <div className="flex scroll-smooth min-h-screen ">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-gray-800  min-h-full p-5 pt-8 relative duration-500`}
        >
          <img
            src="https://res.cloudinary.com/dquxxjngk/image/upload/v1673587887/Bookturn/src/control_xi6vpx.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <Link href={"/business"}>
            <div className="flex gap-x-4 items-center">
              <img
                src="https://res.cloudinary.com/dquxxjngk/image/upload/v1673731534/Bookturn/src/1_ihckv8.png"
                className={`cursor-pointer duration-500 w-10 h-10 ${
                  open && " rotate-[360deg]"
                }`}
              />

              <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0 "
                }`}
              >
                Bookturn
              </h1>
            </div>
          </Link>
          <ul className="pt-6 mt-2">
            {Menus.map((Menu, index) => (
              <div
                key={index}
                onClick={(e)=>handlerClick(e,Menu.page)}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-0" : "mt-0"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={Menu.src} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </div>
            ))}
          </ul>
        </div>
        <div className={`${open && "hidden"} min-h-screen xl:flex p-7 lg:flex md:flex w-full h-full`}>
          {
            page===1?(
              <PutDataForm />
            ):page===2 ? (
              <Services/>):
              page===3 && <Pedidos/>
            // ):(
            //   <div>asdas</div>
            // )
          }
          
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export async function getServerSideProps(context){
  //si no hay sesion iniciada redirige al login
  const session = await getSession(context)

  if(session.status === "unauthenticated") {
    return {
      redirect: {
        destination: "/client/login",
        permanent: false
      },
    }
  }
  
    if(!session) {
      return {
        redirect: {
          destination: "/client/login",
          permanent: false
        },
      }
    }
  
    return {
      props: { session }
    }
  };

export default dashboard;
