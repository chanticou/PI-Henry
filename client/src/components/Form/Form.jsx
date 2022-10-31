import React from "react";
import { useState } from "react";
import axios from "axios";
import { getCountries } from "../../redux/actions";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const Form = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    !allCountries.length && dispatch(getCountries());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const [selectCountry, setSelectCountry] = useState([]);

  const handleChoose = (e) => {
    setSelectCountry([...selectCountry, e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // postActivities(Object.assign(input, { countries: selectCountry }));
    postActivities({ ...input, countries: selectCountry });
  };

  const postActivities = async (formData) => {
    try {
      console.log(Object.values(input));
      if (
        Object.values(input).every((el) => Boolean(el)) &&
        selectCountry.length
        // (input.name && input.difficulty && input.season,
        // input.duration && selectCountry.length)
      ) {
        const activities = await axios.post(
          "http://localhost:3001/createActivities",
          formData
        );
        console.log(activities);
      } else {
        console.log("NO LLENARON LOS INPUTA");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    console.log(input);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* <p>{JSON.stringify(selectCountry, null, 2)}</p> */}

      <form className="activities_form" onSubmit={handleSubmit}>
        <select
          onChange={(e) => {
            handleChoose(e);
          }}
        >
          <option value="">Countries</option>
          {allCountries.map((el) => (
            <option value={el.name}>{el.name}</option>
          ))}
        </select>

        <label>Name:</label>
        <input
          onChange={handleChange}
          value={input.value}
          name="name"
          type="text"
        />
        <label>Dificulty:</label>
        <input
          onChange={handleChange}
          value={input.value}
          name="difficulty"
          type="text"
        />
        <label>Duration:</label>
        <input
          onChange={handleChange}
          value={input.value}
          name="duration"
          type="text"
        />
        <label>Season:</label>
        <input
          onChange={handleChange}
          value={input.value}
          name="season"
          type="text"
        />
        <ul>
          {selectCountry.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
        <input type="submit" />
      </form>
    </>
  );
};
