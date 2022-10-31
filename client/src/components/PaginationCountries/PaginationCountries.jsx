import React from "react";
import "./PaginationCountries.css";
import { useDispatch } from "react-redux";
import { setActualPage } from "../../redux/actions";
export const PaginationCountries = ({ countriesPerPage, countries }) => {
  /* //countriesQuantity / currentCountriesPerPage=> cantidad de paginas que va a tener m proeycto */
  const dispatch = useDispatch();
  let pages = [];
  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
      <ul className="content_numbers">
        {pages.map((el) => (
          <li
            onClick={() => {
              dispatch(setActualPage(el));
            }}
            key={el}
          >
            {el}
          </li>
        ))}
      </ul>
    </>
  );
};
