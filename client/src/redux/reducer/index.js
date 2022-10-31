import * as actions from "../../actions-types";

const initialState = {
  allCountries: [],
  countries: [],
  continents: [],
  actualPage: 1,
  countriesDetail: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_COUNTRIES:
      return {
        ...state,
        allCountries: payload.countries,
        continents: payload.continents,
        countries: payload.countries,
      };
    case actions.FILTER_CONTINENTS:
      return {
        ...state,
        countries: payload,
        actualPage: 1,
      };
    case actions.ORDER_BY_ALPHABETIC:
      return {
        ...state,
        countries: payload,
      };

    case actions.ACTUAL_PAGE_COLOR:
      return {
        ...state,
        actualPage: payload,
      };

    case actions.SEARCH_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: payload,
      };

    case actions.GET_COUNTRY_BY_ID:
      return {
        ...state,
        countriesDetail: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
// let orderAlphabetic;
// if (valueSelect === "orderByNameAscendent") {
//   orderAlphabetic = countries.sort((a, b) => a.name.localeCompare(b.name));
// }

// import React from "react";
// import "./PaginationCountries.css";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setActualPage } from "../../redux/actions";

// export const PaginationCountries = ({ countriesPerPage, countries }) => {
//   let pages = [];
//   for (let i = 1; i <= countries.length / countriesPerPage; i++) {
//     pages.push(i);
//   }

//   const setColorNumber = useSelector((state) => state.actualPage);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <ul className="content_numbers">
//         {pages.map((el) => (
//           <li
//             onClick={() => dispatch(setActualPage(el, handleChangePage))}
//             className={"colorNumber" === el && "active"}
//             key={el}
//           >
//             {el}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
