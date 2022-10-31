const axios = require("axios");
const { Country, TuristActivities } = require("../db.js");

const getApiCountries = async () => {
  const apiURL = await axios.get("https://restcountries.com/v3/all");
  const result = apiURL.data.map((el) => {
    return {
      name: el.name.common,
      flag: el.flags[0],
      continents: el.continents[0],
      capital: el.capital ? el.capital[0] : "No tiene capital",
      subregion: el.subregion ? el.subregion : el.continents[0],
      area: el.area,
      population: el.population,
    };
  });

  return result;
};

const DBCountries = async () => {
  try {
    const validacionDataIngresada = await Country.findAll();

    if (!validacionDataIngresada.length) {
      const dataApi = await getApiCountries();
      // const createDatabase = await dataApi;
      dataApi.forEach((el) => {
        Country.findOrCreate({
          where: {
            name: el.name,
            flag: el.flag,
            continents: el.continents,
            capital: el.capital,
            subregion: el.subregion,
            area: el.area,
            population: el.population,
          },
        });
      });
    }

    const country = await Country.findAll({
      include: [TuristActivities],
    });

    return country;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { DBCountries };
