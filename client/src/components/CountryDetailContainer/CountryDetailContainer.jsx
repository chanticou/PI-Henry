import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountryDetailCard } from "../CountryDetailCard/CountryDetailCard";
import { useParams } from "react-router-dom";
import { countryDetail } from "../../redux/actions";

export const CountryDetailContainer = () => {
  const dispatch = useDispatch();
  const { countryId } = useParams();
  const countriesDetail = useSelector((state) => state.countriesDetail);
  console.log(countriesDetail);
  useEffect(() => {
    dispatch(countryDetail(countryId));
  }, [countryId]);

  return (
    <>
      <h1>Card Detail</h1>
      {console.log(countriesDetail)}
      <CountryDetailCard {...countriesDetail} />
    </>
  );
};
