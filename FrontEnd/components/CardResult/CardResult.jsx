import React from "react";
import { useRouter } from "next/router";

export default function CardResult({ name, services, image, id, categories, session }) {
  const router = useRouter()
  let arrServices = [];

  if (services.length > 4) {
    arrServices = services.slice(0, 4);
  } else arrServices = services;

  const onClick = (e) => {
    if(!session){
      alert("Primero debes loguearte.")
      router.push("/client/login")
    }else{
      router.push(`/business/about/${e.target.id}`)
    }
  }
  
  return (
    <section className="bg-white mt-4">
      {/* dark:bg-gray-900 */}
      <div className="flex container px-6 py-10 mx-auto justify-center font-cool_g tracking-widest">
        {/* <h1 className="text-3xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white"> {name} </h1> */}

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center w-full justify-center">
          <div className="relative mr-8 lg:w-96 w-full">
            <div
            
              className="rounded-xl mr-8 relative cursor-pointer w-full"
            >
              <img
                className="object-cover w-full lg:ml-6 lg:w-full rounded-xl h-72 lg:h-90"
                id={id}
             onClick={e => onClick(e)}
                src={image}
                alt={name}
              />
            </div>
          </div>

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            {categories?.map((e) => {
              return (
                <p key={e.id} className="text-sm text-blue-500 uppercase">
                  {" "}
                  {e.attributes?.name}{" "}
                </p>
              );
            })}

            <div
            id={id}
             onClick={e => onClick(e)}
              className="cursor-pointer mt-4 text-3xl font-semibold text-gray-800 hover:underline md:text-3xl h-10 capitalize inline-block"
            >
              {/* dark:text-white */}
              {name}.
            </div>

            {arrServices?.map((e) => {
              return (
                <div key={e.id} className="flex flex-row justify-between xl:w-2/3 w-full font-cool_g tracking-widest">
                  <p key={e.id} className="mt-3 text-xl text-gray-500 md:text-xl underline capitalize">
                    {/* dark:text-gray-300*/}
                    {e.attributes?.name}
                  </p>
                  <p key={e.id} className="mt-3 text-xl text-blue-500 md:text-xl ">
                    {" "}
                    ${e.attributes?.price}{" "}
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
