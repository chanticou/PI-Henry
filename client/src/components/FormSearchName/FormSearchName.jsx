import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SeachCountryByName } from "../../redux/actions/index";
import "./FormSearchName.css";

export const FormSearchName = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const { allCountries } = useSelector((state) => state);

  const handleInput = (e) => {
    setSearchInput(e.target.value);
    if (searchInput.length) {
      dispatch(SeachCountryByName(searchInput, allCountries));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const handleClearInput = () => {
  //   setSearchInput("");
  //   dispatch(SeachCountryByName("", allCountries));
  // };

  return (
    <>
      <form className="form_search_name" onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Search Country"
          onChange={(e) => handleInput(e)}
          type="text"
          value={searchInput}
        />
        {/* <input
          className={!searchInput.length ? "btndisable" : ""}
          type="submit"
        /> */}
      </form>
      {/* {searchInput.length ? (
        <button onClick={handleClearInput}>&times;</button>
      ) : null} */}
    </>
  );
};
