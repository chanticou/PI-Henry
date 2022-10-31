import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
// import { CountryDetailContainer } from "../CountryDetailContainer/CountryDetailContainer";

export const Card = ({ data: { flag, name, population, continents, id } }) => {
  return (
    <>
      <div className="country_card">
        <img className="country_img" src={flag} alt={name} />
        <p className="country_title">{name}</p>
        <p className="country_description">Continent: {continents}</p>
        <p className="country_description">Population:{population}</p>
        <Link to={`/CountryDetailContainer/${id}`}>DETAIl</Link>
      </div>
    </>
  );
};
