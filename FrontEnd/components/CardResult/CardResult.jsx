import React from "react";
import Link from "next/link";
import {getFavourites} from "../../redux/actions/clients/getFavourites"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { useState } from "react";
import { postFavourite } from "../../redux/actions/clients/postFavourite";
import { putFavourite } from "../../redux/actions/clients/putFavourite";


export default function CardResult({ name, services, image, id, categories, session}) {
  
  // const { favouritesList, clientAcc } = useSelector((state) => state.clients);

  // const [input, setInput] = useState({
  //   businesses: id,
  //   clients: clientAcc.id
  // })

  // const favourite = favouritesList[0].attributes.businesses.data.map(e => e.id)
  // console.log(favouritesList[0])
  // const filter = favourite.filter(e => e !== id)
  // const exist = favourite.filter(e => e === id)

  // console.log(exist.length)
  const dispatch = useDispatch()
  
  // const router = useRouter()
  
  // useEffect(() => {
  //   dispatch(getFavourites(clientAcc.id))
  // }, [dispatch, favouritesList, session])

  let arrServices = [];

  if (services.length > 4) {
    arrServices = services.slice(0, 4);
  } else arrServices = services;

  // const handleChange = () => {
  //   if (!session) {
  //     router.push("/client/login")
  //   } else if (!favouritesList.length) {
  //     dispatch(postFavourite(input))
  //     alert(`${name} se agregó a favoritos`)
  //   } else {
  //     if (!exist.length) {
  //       setInput({
  //         businesses: [...favourite, id],
  //         clients: clientAcc.id
  //       })
  //       dispatch(putFavourite(favouritesList[0].id, input))
  //       alert(`${name} se agregó a favoritos`)
  //     } else {
  //       setInput({
  //         businesses: [filter],
  //         clients: clientAcc.id
  //       })
  //       dispatch(putFavourite(favouritesList[0].id, input))
  //       alert(`${name} se eliminó de favoritos`)
  //     }
  //   }
  // };

  return (
    <section className="bg-white mt-4">
      {/* dark:bg-gray-900 */}
      <div className="flex container px-6 py-10 mx-auto justify-center font-cool_g tracking-widest">
        {/* <h1 className="text-3xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white"> {name} </h1> */}

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center w-full justify-center">
          <div className="relative mr-8">
            <Link
              href={{
                pathname: "/business/about/[businessId]",
                query: {
                  businessId: id,
                },
              }}
              className=" lg:w-1/3 rounded-xl mr-8 relative"
            >
              <img
                className="object-cover w-full lg:mx-6 lg:w-full rounded-xl h-72 lg:h-90"
                src={image}
                alt={name}
                width="150"
                height="150"
              />
            </Link>
            {/* <div className="absolute top-2 2xl:-right-4 md:right-3 lg:-right-4 right-2 hover:bg-white rounded-md w-8 h-8 items-center text-center justify-center flex">
              <button onClick={() => handleChange()}>Fav</button> 
            </div> */}
          </div>

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            {categories?.map((e) => {
              return (
                <p key={e.id} className="text-sm text-blue-500 uppercase">
                  {" "}
                  {e.attributes.name}{" "}
                </p>
              );
            })}

            <Link
              href={{
                pathname: "/business/about/[businessId]",
                query: {
                  businessId: id,
                },
              }}
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline md:text-3xl h-10 capitalize"
            >
              {/* dark:text-white */}
              {name}.
            </Link>

            {arrServices?.map((e) => {
              return (
                <div key={e.id} className="flex flex-row justify-between w-2/3 font-cool_g tracking-widest">
                  <p key={e.id} className="mt-3 text-sm text-gray-500 md:text-xl underline capitalize">
                    {/* dark:text-gray-300*/}
                    {e.attributes.name}
                  </p>
                  <p key={e.id} className="mt-3 text-sm text-blue-500 md:text-xl ">
                    {" "}
                    ${e.attributes.price}{" "}
                  </p>
                  {/* dark:text-blue-500 */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
