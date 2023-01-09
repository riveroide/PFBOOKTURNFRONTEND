import React from "react";
import Link from "next/link";
// import stylesCard from "../CardResult/CardResult.module.css";
export default function CardResult({ name, services, image, id, categories }) {

  let arrServices = []

  if (services.length > 4) {
    arrServices = services.slice(0, 4)
  }
  else arrServices = services

  return (
    <section className="bg-white mt-4">
       {/* dark:bg-gray-900 */}
    <div className="flex container px-6 py-10 mx-auto justify-center font-cool_g tracking-widest">
        {/* <h1 className="text-3xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white"> {name} </h1> */}
        
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center w-full justify-center">
        <Link href={{
            pathname: "/business/about/[businessId]",
            query: {
              businessId: id,
            },
          }} className="lg:w-1/3 rounded-xl">
            <img className="object-cover w-full lg:mx-6 lg:w-full rounded-xl h-72 lg:h-90" src={image} alt={name} />

          </Link>
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              {
                categories?.map((e) => {
                  return (
                <p className="text-sm text-blue-500 uppercase"> {e.attributes.name} </p>
                  )
                })
              }
                

                <Link
          href={{
            pathname: "/business/about/[businessId]",
            query: {
              businessId: id,
            },
          }} className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline md:text-3xl h-10 capitalize"> 
          {/* dark:text-white */}
                    {name}.
                </Link>

                {arrServices?.map((e) => {
                  return (
                    <div className="flex flex-row justify-between w-2/3 font-cool_g tracking-widest">
                    <p className="mt-3 text-sm text-gray-500 md:text-xl underline capitalize"> 
                    {/* dark:text-gray-300*/}
                    {e.attributes.name}
                     </p>
                     <p className="mt-3 text-sm text-blue-500 md:text-xl "> ${e.attributes.price} </p>
                     {/* dark:text-blue-500 */}
                    </div>
                  )
                })
                }
            </div>
        </div>
    </div>
</section>
  );
}
