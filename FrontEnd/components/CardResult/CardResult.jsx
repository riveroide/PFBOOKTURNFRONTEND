import React from "react";
import Link from "next/link";
// import stylesCard from "../CardResult/CardResult.module.css";
export default function CardResult({ name, services, image, id, categories }) {
  return (
    <section class="bg-white mt-4">
       {/* dark:bg-gray-900 */}
    <div class="flex container px-6 py-10 mx-auto justify-center">
        {/* <h1 class="text-3xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white"> {name} </h1> */}
        
        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center w-full justify-center">
        <Link href={{
            pathname: "/business/about/[businessId]",
            query: {
              businessId: id,
            },
          }} class="lg:w-1/3 rounded-xl">
            <img class="object-cover w-full lg:mx-6 lg:w-full rounded-xl h-72 lg:h-90" src={image} alt={name} />

          </Link>
            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              {
                categories?.map((e) => {
                  return (
                <p class="text-sm text-blue-500 uppercase"> {e.attributes.name} </p>
                  )
                })
              }
                

                <Link
          href={{
            pathname: "/business/about/[businessId]",
            query: {
              businessId: id,
            },
          }} class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline md:text-3xl h-10 capitalize"> 
          {/* dark:text-white */}
                    {name}.
                </Link>

                {services?.map((e) => {
                  return (
                    <div class="flex flex-row justify-between w-2/3">
                    <p class="mt-3 text-sm text-gray-500 md:text-xl underline capitalize"> 
                    {/* dark:text-gray-300*/}
                    {e.attributes.name}
                     </p>
                     <p class="mt-3 text-sm text-blue-500 md:text-xl "> ${e.attributes.price} </p>
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
