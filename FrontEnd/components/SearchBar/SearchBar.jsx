import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBusinessByName } from "../../redux/actions/business/getBusiness";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  function handleChange(e) {
    e.preventDefault()
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getBusinessByName(input));
    setInput("");
  }

  return (
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
  );
};

export default SearchBar