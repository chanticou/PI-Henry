import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  filterCountries,
  getCountries,
  orderByCountries,
} from "../../redux/actions/index";
import { Card } from "../Card/Card.jsx";
import "./ContentCards.css";
import { useState } from "react";
import { PaginationCountries } from "../PaginationCountries/PaginationCountries.jsx";
import { FormSearchName } from "../FormSearchName/FormSearchName";

export const ContentCards = () => {
  const dispatch = useDispatch();
  const { allCountries, countries, continents, actualPage } = useSelector(
    (state) => state
  );

  useEffect(() => {
    !allCountries.length && dispatch(getCountries());
  }, [dispatch]);

  const [countriesPerPage] = useState(10);

  const orderTypes = [
    "orderByNameAscendent",
    "orderByNameDescendent",
    "orderByPoblationQuantity",
  ];

  const lastIndex = actualPage * countriesPerPage;

  const firstIndex = lastIndex - countriesPerPage;

  const currentCountriesPerPage = countries.slice(firstIndex, lastIndex);

  return (
    <>
      <div className="content_selects">
        <FormSearchName />
        <select
          onChange={(e) =>
            dispatch(filterCountries(e.target.value, allCountries))
          }
        >
          <option>Filter By Continents</option>
          {continents?.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>

        <select
          onChange={(e) => {
            dispatch(orderByCountries(countries, e.target.value));
          }}
        >
          <option>Order By</option>
          {orderTypes.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
      </div>

      <div className="content_numbers">
        <PaginationCountries
          countries={countries}
          countriesPerPage={countriesPerPage}
        />
      </div>
      <div className="content_countries">
        {!countries.length
          ? `There's no countries`
          : currentCountriesPerPage.map((el) => <Card data={el} key={el.id} />)}
      </div>
      <div className="content_numbers">
        <PaginationCountries
          countries={countries}
          countriesPerPage={countriesPerPage}
        />
      </div>
    </>
  );
};
