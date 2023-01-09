import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessByName } from "../../redux/actions/business/getBusiness";
import {
  filterCategory,
  filterOrder,
  categoryHandler,
} from "../../redux/actions/business/filterBusiness";
import { getCategories } from "../../redux/actions/categories/getCategories";

const SearchAndFilter = () => {
  const dispatch = useDispatch();

  const { categoriesList } = useSelector((state) => state.categories);

  const [input, setInput] = useState("");
  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getBusinessByName(input));
    setInput("");
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(filterOrder(e.target.value));
  }

  function handleFilter(e) {
    e.preventDefault();
    dispatch(filterCategory(e.target.value));
  }

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex mr-6 my-2 justify-center">
        <form onSubmit={(e) => handleSubmit(e)} className="justify-center flex">
          <input
            type="text"
            placeholder="Buscar"
            value={input}
            onChange={handleChange}
            className="bg-purple-white shadow rounded border-0 p-3 relative"
          ></input>
          <button className="absolute pin-r pin-t mt-3 -mr-36 text-purple-lighter">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="flex justify-around">
        <div className="mb-3 xl:w-full flex justify-around">
          <select
            onChange={(e) => handleOrder(e)}
            className="form-select appearance-none
          block
          w-1/4
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="">Orden Rating</option>
            <option value="Rating asc">Rating asc</option>
            <option value="Rating desc">Rating desc</option>
          </select>
          <select
            onChange={(e) => handleOrder(e)}
            className="form-select appearance-none
          block
          w-1/4
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="">Orden Alfabetico</option>
            <option value="A-Z">Nombre asc</option>
            <option value="Z-A">Nombre desc</option>
          </select>
          <select
            onChange={(e) => handleFilter(e)}
            className="form-select appearance-none
          block
          w-1/4
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="">Todos</option>
            {categoriesList?.map((e) => {
              return (
                <option value={e.attributes.name} key={e.attributes.name}>
                  {" "}
                  {e.attributes.name}{" "}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
