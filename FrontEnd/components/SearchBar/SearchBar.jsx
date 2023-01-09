import React from "react";
import { useRouter } from 'next/router'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBusinessByName } from "../../redux/actions/business/getBusiness";
import style from "./SearchBar.module.css"

const SearchBar = () => {
  const dispatch = useDispatch();
  const router = useRouter()

  const [input, setInput] = useState("");

  function handleChange(e) {
    e.preventDefault()
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getBusinessByName(input));
    router.push("/results")
    setInput("");
  }

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
        className={style.searchbar}
          type="text"
          placeholder="Buscar..."
          value={input}
          onChange={handleChange}
        ></input>
        {/* <button>🔍</button> */}
      </form>
    </div>
  );
};

export default SearchBar