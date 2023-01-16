import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessByName } from "../../redux/actions/business/getBusiness";
import {
  filterCategory,
  filterOrder
} from "../../redux/actions/business/filterBusiness";
import { getCategories } from "../../redux/actions/categories/getCategories";

const SearchAndFilter = () => {
  const dispatch = useDispatch();

  const { categoriesList } = useSelector((state) => state.categories);

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
    <div className="flex flex-col justify-center mt-8">
      <div className="flex justify-around">
        <div className="mb-3 w-full flex justify-around">
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
