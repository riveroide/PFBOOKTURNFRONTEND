import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessByName } from "../../redux/actions/business/getBusiness";
import { filterCategory, filterOrder } from "../../redux/actions/business/filterBusiness";
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
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="search"
            placeholder="Buscar..."
            value={input}
            onChange={handleChange}
          ></input>
          <button>🔍</button>
        </form>
      </div>
      <div>
        <select onChange={(e) => handleOrder(e)}>
          <option value="">Orden Rating</option>
          <option value="Rating asc">Rating asc</option>
          <option value="Rating desc">Rating desc</option>
        </select>
        <select onChange={(e) => handleOrder(e)}>
          <option value="">Orden Alfabetico</option>
          <option value="A-Z">Nombre asc</option>
          <option value="Z-A">Nombre desc</option>
        </select>
        <select onChange={(e) => handleFilter(e)}>
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
  );
};

export default SearchAndFilter;
