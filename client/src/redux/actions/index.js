import {
  GET_COUNTRIES,
  FILTER_CONTINENTS,
  ORDER_BY_ALPHABETIC,
  ACTUAL_PAGE_COLOR,
  SEARCH_COUNTRY_BY_NAME,
  GET_COUNTRY_BY_ID,
} from "../../actions-types.js";
import axios from "axios";

//FORMULARIO

export const getCountries = () => async (dispatch) => {
  try {
    const countries = await axios.get("http://localhost:3001/getAllCountries");

    dispatch({
      type: GET_COUNTRIES,
      payload: {
        countries: countries.data,
        continents: [
          "Todos",
          ...new Set(countries.data.map((el) => el.continents)),
        ],
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

// CONTINENTNAME   ARRAY  ORIGINAL
export const filterCountries = (filterContinent, countries) => (dispatch) => {
  let filterByContinet =
    filterContinent === "Todos"
      ? countries
      : countries.filter((el) => el.continents === filterContinent);

  dispatch({
    type: FILTER_CONTINENTS,
    payload: filterByContinet,
  });
};

export const orderByCountries = (countries, valueSelect) => (dispatch) => {
  let array = [];

  //ORDER BY NAME ASCENDENT
  if (valueSelect == "orderByNameAscendent") {
    array = countries.sort((a, b) => a.name.localeCompare(b.name));
  }
  //ORDER BY NAME DESCENDENT
  if (valueSelect == "orderByNameDescendent") {
    array = countries.sort((a, b) => b.name.localeCompare(a.name));
  }
  //ORDER BY POPULATION
  if (valueSelect == "orderByPoblationQuantity") {
    array = countries.sort((a, b) => a.population - b.population);
  }

  dispatch({
    type: ORDER_BY_ALPHABETIC,
    payload: [...array],
  });
};

export const setActualPage = (page) => (dispatch) => {
  dispatch({
    type: ACTUAL_PAGE_COLOR,
    payload: page,
  });
};

export const SeachCountryByName =
  (nameCountry, countries) => async (dispatch) => {
    let findByName = countries.filter((el) => {
      if (nameCountry === "") return countries;
      if (el.name.toLowerCase().includes(nameCountry.toLowerCase())) return el;
    });

    dispatch({
      type: SEARCH_COUNTRY_BY_NAME,
      payload: findByName,
    });
  };

export const countryDetail = (id) => async (dispatch) => {
  // console.log(id);
  try {
    const idCountry = await axios.get(
      `http://localhost:3001/getCountryById/${id}`
    );
    dispatch({
      type: GET_COUNTRY_BY_ID,
      payload: idCountry.data,
    });
  } catch (err) {
    console.log(err);
  }
};
